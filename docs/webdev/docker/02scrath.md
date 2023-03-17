#  Minimal docker images from scratch

## Basics
1. Building with official docker images, `FROM golang`, `FROM nginx` etc. will produce big filesizes. Results in a size of **~800MB**
2. alpine (small linux distro of just a few MBs) helps reducing the size. `FROM golang:alpine`. Results in size of **~350MB**
3. Multi-stage builds to build our binary then just image that  binary in a (empty) scratch image.

```Dockerfile
# 1.step-build the executable binary
FROM golang:alpine AS builder

# Git is required for fetching the dependencies, so we install it
RUN apk update && apk add --no-cache git

# Set a workingdirectory
WORKDIR $GOPATH/src/mypackage/myapp
COPY . .

# Fetch dependencies
RUN go get -d -v

# Build the binary
RUN go build -o /go/bin/hello

# ---------------------------------------------------- #

# 2.step build a minimal image
FROM scratch

# copy our binary, from the build-step, to our new image
COPY --from=builder /go/bin/hello /go/bin/hello

# run the binary
ENTRYPOINT ["/go/bin/hello"]
```

- `sudo docker build -t hello .`
- `sudo docker images` shows a SIZE of just **1.85MB**
- `sudo docker run -it --rm hello`

## Further optimisation
- `RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="-w -s" -o /go/bin/hello`
- *CGO_ENABLED=0* is useful since alpinelinux will not use those C libraries anyway.
- *-a* force rebuilding of packages that are already up-to-date.
- `installsuffix suffix`
a suffix to use in the name of the package installation directory, in order to keep output separate from default builds.
If using the -race flag, the install suffix is automatically set to race or, if set explicitly, has _race appended to it. Likewise for the -msan and -asan flags. Using a - -buildmode option that requires non-default compile flags has a similar effect.
-`ldflags [pattern=]arg list` arguments to pass on each go tool link invocation.


**ACTUALLY CGO_ENABLED=0 and INSTALLSUFFIX cgo** might **NOT** be longer required as of Go 1.10 and onwards, :todo read up on that later

# Guidelines for a more secure/correct docker image

- 1. Keep your image up to date.
- 2. Never run a process as root in a container.
- 3. Image-Pinning with docker pull image by digest.
- 4. Verify third-party container repositories.
- 5. Don’t install not used packages.
- 6. Run only one process in a container.
- 7. Never store data in a container, do it in a volume.
- 8. Never store credentials in a container, do it in a volume.
- 9. Use tool like docker-security-scanning.
- 10.Use docker scan image
- 11. Always export on port > 1024 (smaller needs extra privileges collides with 2.)

## 2. Nonroot user
### Template for Docker (alpine/debian)creating a non root user
We want a non root user on our image, to run our apps/processes on.
```Dockerfile
# See https://stackoverflow.com/a/55757473/12429735RUN
ENV USER=docker
ENV UID=12345
ENV GID=23456

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "$(pwd)" \
    --ingroup "$USER" \
    --no-create-home \
    --uid "$UID" \
    "$USER"
```
- `--disabled-password` prevents promt for a password
- `--gecos ""` circumvents the prompt for "full name" etc.
- `--home "$(pwd)"` sets the users home to the workdir **we might not want this in cases**
- `--no-create-home` prevents cruft getting copied into the directory from */etc/skel*

### so we change our Dockerfile 
```Dockerfile
# 1.step-build the executable binary

FROM golang:alpine AS builder

# Git is required for fetching the dependencies, so we install it
RUN apk update && apk add --no-cache git

# Create a User with Name/PW stored in envs and set him up
ENV USER=appuser
ENV UID=10001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    "${USER}"

# Set a workingdirectory
WORKDIR $GOPATH/src/mypackage/myapp
COPY . .

# Fetch dependencies
RUN go get -d -v

# Build the binary
RUN go build -o /go/bin/hello

# ---------------------- #

# 2.step build a minimal image

FROM scratch

# Import the user and group files from the builder
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

# copy our binary, from the build-step, to our new image
COPY --from=builder /go/bin/hello /go/bin/hello

# use the new unprivileged user from here on
USER appuser:appuser

# run the binary
ENTRYPOINT ["/go/bin/hello"]
```
## 3. name vs name:tag vs name@sha256:digest
- when an image is pulled using only the name, the immage with tag `latest` is pulled. If there is no image with the `latest` tag no image will be pulled.
```Dockerfile
docker pull golang
docker pull vincepr/bestThing
```


- Tags are **NOT** version numbers. There is no guarantee, golang:1.17.1 will be the same in a few months time. 
- It could happen that the architecture: "amd64" and os: "linux" chanes without us noticing
```Dockerfile
docker pull golang:latest
docker pull golang:1.17.1
docker pull vincepr/bestThing:2.9.0.0-axh
```

- a solution can be to use the digest, an immutable id that is created during build time.
- this is called image pinning
```
sudo docker manifest inspect golang --verbose

# Example output
[
        {
                "Ref": "docker.io/library/golang:latest@sha256:bd4a3e7eee6d6ea30b2e27d6c1ac3c56809e78e08c7e44ddf91f8c741091f5ad",
                "Descriptor": {
                        "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
                        "digest": "sha256:bd4a3e7eee6d6ea30b2e27d6c1ac3c56809e78e08c7e44ddf91f8c741091f5ad",
                        "size": 1796,
                        "platform": {
                                "architecture": "amd64",
                                "os": "linux"
                        }
                },
                ...
```
- after getting the sha256 we can use that to pin our exact docker image down:

````Dockerfile
docker pull golang@sha256:bd4a3e7eee6d6ea30b2e27d6c1ac3c56809e78e08c7e44ddf91f8c741091f5ad

docker pull vincepr/bestThing@sha256:543368fb39eebb09d53cdd07e735a73a50b9773ad9019a5563e816d88a75e067
```
### some example usecases
- small scale developing/experimenting on a local machine -> just use name:tag
- building an image for production, use name@sha254:digest to pull your base images. This ensures the same result for building on different machines
- if the image was build by your team/company use name:tag. If the image comes from elsewhere prefer name@sha256:digest
- avoid using latest since it makes rollbacks harder

## 4 using trusted image
Use a trusted docker image like golang:alpine etc.
```
export DOCKER_CONTENT_TRUST=1 && docker pull sha256:1db127655b32aa559e32ed3754ed2ea735204d967a433e4b605aed1dd44c5084
```

## Add SSL ca certificates
in our 1st step we get the certs, in our 2nd. Step we can add them in.
```Dockerfile
# Git is required for fetching the dependencies, so we install it
RUN apk update && apk add --no-cache git ca-certificates && update-ca-certificates

#...

# Import the user and group files from the builder
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
```

## Alternative googleContainer distroless
for statically compiled binaries, like go etc, that do not require libc we could also use https://github.com/GoogleContainerTools/distroless/tree/main/base

It provides:
- ca-certificates
- /etc/passwd entry for a root user
- a /tmp directory