## Simple node application

Simple node application that runs on port ```3000```.

Path: ```/``` -> ```Home```.

Path: ```*``` -> ```Out of town!```.

## Docker build

```bash
docker build -t simple-node-app .
```

## Run

```bash
docker run -p 3000:3000 simple-node-app
```

## DockerHub

```bhautikimp/simple-node-app```

## DockerHub pushing

```bash
$> docker tag local remote
$> docker push remote
```

