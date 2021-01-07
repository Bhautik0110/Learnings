
## Docker compose installation

```bash
$> sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$> sudo chmod +x /usr/local/bin/docker-compose
```

## Initial Picture

![Workflow](https://user-images.githubusercontent.com/76986554/103887109-8a7d7c80-5108-11eb-99d7-9c4dc207af3c.jpg)

If you hit ```http://localhost:80``` then you redirect to ```node``` app

If you hit ```https://localhost:7000``` then you redirect to ```admire``` see password in ```docker-compose.yaml```.


## Docker Compose

```bash
$> docker-compose up
```


## Tricks

```bash
# Create the network
$> docker network create db

# Remove all container
$> docker rm $(docker ps -aq)

# Remove all images
$> docker rmi -f $(docker images -a -q)
```

## DockerHub

We are using ```bhautikimp/simple-node-app``` public image for node app that expose on port ```3000```.

We are using ```nginx```, ```admire```, and ```mysql``` images.



## Common error may be occur

* ERROR: Named volume "ng.conf:/etc/nginx/nginx.conf:rw" is used in service "nginx-app" but no declaration was found in the volumes section.

```bash
# FIX: Add relative path (./, ../)
volumes:
    - ./xplore:/root/xPlore/rtdata
```
## Learnings

Two different container cannot runs on same port while using ```nginx```.

```
X -> 5000:80
Y -> 6000:80
NGINX -> Unable to map internally.
```

Nginx ```upstream``` directive used in load balancing.
http://nginx.org/en/docs/dirindex.html

