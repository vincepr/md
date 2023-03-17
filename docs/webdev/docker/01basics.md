# Dev and Production Container for a go project

# Dev Docker container

## setup

```
mkdir src
cd src
export GOFLAGS=-mod=vendor
export GO111MODULE=on
go mod init github.com/vincepr/go-web-docker 
```

- now we can use the following to download required ependencies in the /vendor/ folder instead of GOROOT-path.
- useful since we build them into our dev container

```
go mod tidy
go mod download
go mod vendor
go mod verify
```

## creating the dockerfile (for production)
`Dockerfile`

```Dockerfile
# References the base image
FROM golang:1.20.2-bullseye

# installs bee tool globaly, used to live-reload our code during development
RUN go install github.com/beego/bee/v2@latest

# Env variables. used to configure the use of our vendor location for the GO modules
ENV GO111MODULE=on
ENV GOFLAGS=-mod=vendor

# creates a folder for the code and make it the active directory
ENV APP_HOME /go/src/mathapp
RUN mkdir -p "$APP_HOME"
WORKDIR "$APP_HOME"

# port of our port we work with
EXPOSE 8010
#uses the bee comand to start our application
CMD ["bee", "run"]
```

## building the image

`sudo docker build -t mathapp-development .`

- `-t mathapp` sets the tag name for the new image, we can reference the image later as *mathapp:latest*

- to check and list images on the system `docker images`

- we added (if not already existed) golang and mathapp images to the list

## running the container

`sudo docker run -it --rm -p 8888:8010 -v $PWD/src:/go/src/mathapp mathapp-development`

- **docker run** to run a container
- **-it** flag to start the container in an interactive mode, tying it to the current shell
- **--rm** cleans out the container after it shuts down
- **-p 8888:8010** flag allows the container to be accessed at port 8888 using the 8010 port inside the container
- **-v $PWD/src:/go/src/mathapp** makes the development files available inside and outside the container. Maping the src/ from the machine to the /go/src/mathapp in the container
- **--name mathapp-instance** would name the container so
- last **mathapp** just names the container
- access our app on: `http://localhost:8888/sum/4/5`

to access our app

# Docker in Production
- auto build after changes are pushed to the git repo
- auto run test
- create docker image if the above is sucessfull only, then push it to Docker Hub

## setup
new dockerfile to create a self contained image, without external dependencies.

## creating the dockerfile
`Dockerfile.production`


```Dockerfile

# 1st stage of the multistage build - to compile our binary (using semaphoreci instead of normal because of docker rates limites) 
# builder is just our name for the stage
FROM registry.semaphoreci.com/golang:1.18 as builder

# create the application folder for the app and copies the source code. 
ENV APP_HOME /go/src/mathapp
WORKDIR "$APP_HOME"
COPY src/ .

# download modules and build the binary
RUN go mod download
RUN go mod verify
RUN go build -o mathapp

# ----------------------------------------------------- #

# 2nd stage of the multistage build - the final container where we will run the services
FROM registry.semaphoreci.com/golang:1.18

# create a folder for the code and make it the active directory
ENV APP_HOME /go/src/mathapp
RUN mkdir -p "$APP_HOME"
WORKDIR "$APP_HOME"

# copy command to copy files into the image. --from lets copy from the previous "1st stage" named builder.
COPY src/conf/ conf/
COPY src/views/ views/
COPY --from=builder "$APP_HOME" /mathapp $APP_HOME

# what to look at and run app
EXPOSE 8010
CMD ["./mathapp"]
```

- build the deployment image: `sudo docker build -t mathapp-production -f Dockerfile.production .`
- run it: `sudo docker build run -it -p 8888:8010 mathapp-production`
- check mem/cpu usage with `sudo docker stats`

# Continous Integration (with Semaphore)
## CI/CD
- Continous Integration CI and Continous Delivery CD
- Developers merge their changes to the main code branch many times per day (like Github-Actions automation)
- Each code merge triggers an automated build and test sequence
- Automated Testing neccessary to check that code is save to deploy

## check this for a good entrypoint
- https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker
- https://docs.semaphoreci.com/examples/golang-continuous-integration/
- https://docs.semaphoreci.com/programming-languages/go/
