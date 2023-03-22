# Docker compose

- https://docs.docker.com/compose/compose-file/

## basic structures
### Services
- computing components of an application. Basically our container images
- services communicate with each other trough Networks
### Networks
- in this setting a Network enables IP routes between containers
### VOLUMES
- persistent data that services may access if possible.
- basically exist on our actually system and can be accessed from there aswell
### Configs
- configs allow services to adapt their behavior without the need to rebuild the docker image.
### Secret
- configuration data, that shoud not be exposed without security consideration. 
- Secrets are made available to services as files mounted into their containers, just like configs
### Project
- A Project is an individual deployment of an application specification on a platfom.
- it is used to group ressources together and isolate them from other appliactions of the same Compose.
- A Compose implementation creating ressources on a platfrom MUST prefix resource names by project and set the label `com.docker.compose.project`
- Project name can be set explicit by top-level `name` attribute. Compose implementation MUST offer a way for users to set a custom project name and override this name. this allows running the same compose.yaml twice on the same infrastructure without changes.

## compose file
- compose.yaml prefered over compose.yml with docker-compose.yaml or docker-compose.yml as the (depr-)old form in the working directory.
- multiple compose files can be combined together to define the application model.

### example to profiles

```yaml
services:
    base_thing:
        image: base_thing
    base_thing_test:
        image: base_test
        profiles:
            - test
```

```yaml
## expresses startup and shotdown dependencies between services
services:
  init_check:
    image: test_image
  web:
    build: .
    depends_on:
      - init_check
        condition: service_completed_successfully   # expected to run successful to completion before
      - db
        condition: service_healthy # a check we can implement to run to indicate if a container is "healthy"
      - redis
        # default is condition: service_started after a service is running (sql db might not be fully initialized though! )
  redis:
    image: redis
  db:
    image: postgres
            - baste_test
```

#### Name top-level element
```yaml
services:
    foo:   
        image: busybox
        environment:
            - COMPOSE_PROJECT_NAME
        command: echo "running project ${COMPOSE_PROJECT_NAME}"
```
## some more examples:
```yaml

services:
  foo:
    image: busybox
    environment:
      - COMPOSE_PROJECT_NAME
    command: echo "running project ${COMPOSE_PROJECT_NAME}"
  initializer:
    image: busybox
    blkio_config:
      ## weight - modify the proportion of bandwith allocated for this ervice (10-1000 , 500 as default)
      weight: 300
      weight_device:
        - path: /dev/sda
        - weight: 400
      ## device_read_bps _write_bps set a limit in bytes per second, must have 2 keys:
      device_read_bps:    
        - path: /dev/sdb
        - rate: '12mb' 
      ## cpu_count, cpu_percent ... defines usable CPU usage
      cpu_count: 0.5

## configs
  #short syntax:
services1:
  redis:
    image: redis:latest
    configs:
      - my_config
configs:
  my_config:
    file: ./my_config.txt
  myother_config:
    external: true

service3:
  ## device_cgroup_rules , like linux kernel specified
  some_service:
    device_cgroup_rules:
      - 'c 1:3 mr'
      - 'a 7:* rmw'
    ## dns defines custom DNS servers to set on the container network interface
    dns:
      - 8.8.8.8
      - 9.9.9.9
    ## defines custom dns search domains can be single value or list (like above)
    dns_search:
      - example.com 
      - shop.example.com
    ## entrypoint OVERRIDES the default entrypoint for the docker image
    entrypoint:
      - php
      - -d
      - memory_limit=-1
      - vendor/bin/phpuit
  
  ## hosdtname, domainname
  someservice:
    hostname: shop
    domainname: vincepr.com
  
  ## env_file
    env_file: .env
  nextservice:
    env_file:
      - ./a.env
      - ./b.env
  # relative path MUST be resloved from the Compose file's parent folder.
  # env variables declared in the environment section MUST override these values
    environment:
      RACK_ENV: development
      SHOW: "true"
      USER_INPUT:
  some_other_service:
    environment:
      - RACK_ENV=evelopment
      - SHOW=true
      - USER_INPUT
    # when both env_file and environment are set for a service values set by environment have precedence
  ## expose defines the ports taht Compose implementations MUST exose from container. These ports are accessible to linked services and SHOULD NOT be published to the host machine. 
    expose:
      - "3000"
      - "8080"
  ## ports
    ports:
      - "3000" 
      - "3000-30010"
      - "8000:8000"
      - "127.0.0.1:8001:8001"
      - "6060:6060/udp"
  next_service:
    ports:
      - target: 80
        host_ip: 127.0.0.1
        published: 8080
        protocol: tcp
        mode: host
  ## read_only configures service container to be created with a read-only filesystem

  ## restart defines restart policy: no | always | on-failure | unless-stopped
  restart: always
## secrets
servies3:
  frontend:
    image: some/webapp
    secrets:
      - server-certificate
secrets:
  server-certificate:
    file: ./file-server.cert

## volumes , ACCESS_MODE: rw, ro ...
service4:
  backend:
    image: some/api
    volumes:
      - type: volume
        source: db-data   #a path on the host for a bind mount
        target: /data
        volume:
          nocopy: true  # disable copying of data from a container when volume is created
      - type: bind
        source: /var/run/postgress.sock
        target: /var/run/postgress.sock
volumes:
  db-data:
        
```