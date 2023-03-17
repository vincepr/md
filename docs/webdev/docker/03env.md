# Passing Env variables to a docker container

## directly in the shell
- We can pass environment variables direct to the container with the -e flag.

Example of a bash script, note this will print/store in our bash history.
```
sudo docker run -i-e POSTGRES_ENV_USER='userfoo' \
-e POSTGRES_ENV_PASSWORD='bar' \
-e POSTGRES_ENV_DB_NAME='baz' \
-e SITEURL='staging.vincepr.de' \
-p 80:8080 \
-- name container_name dockerhub_id/some_image
```
- if we dont want the values in the command line, we could also pull the value from the current (global)environment
`sudo PASSWORD='foo' docker run ... -e PASSWORD`


## .env file
`/.env1` file
```
USERNAME=mike
PASSWORD=foobar
API_KEY=SOME_KEY
```
and our shell commands
```
docker run --env-file ./env1.list some_image
docker run --env-file=.env1 --env-file=.env2 some_image
```

##  docker-compose
`docker-compose.yml`
```yml
version: '3.9'

services:

    env_printer:
        image: 'some_image'
        environment:
            - SITEURL=staging.vincepr.de
            - APIKEY: SOME_KEY  # <- we can also pass in our current env variables like so
        env_file:
            - .env1
            - .env2
```
`docker-compose up`
`we can test our configuration with values like so: `docker-compose --env-file=some_folder/.env config`