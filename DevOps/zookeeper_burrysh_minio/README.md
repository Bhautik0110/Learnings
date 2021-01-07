## Workflow

```ZooKeeper``` -> ```Burry.sh``` -> ```Minio```

## Inital Picture
![My First Board - Burry with zk and min io](https://user-images.githubusercontent.com/76986554/103889401-615eeb00-510c-11eb-9b26-12e5150d0cd6.jpg)


## Zoo Keeper

Zoo keeper is key value store like ```etcd```

Zoo keeper store data inside ```var/lib/zookepeer/data```

We need to create file ```/data``
`

```bash
docker run --name zk -p 2181:2181 --restart always -d -v $(pwd)/data:/var/lib/zookeeper/data zookeeper

```
## Minio Setup
Minio is like ```Object Storage.```

Minio store data inside ```minio```

http://localhost:9000/minio/dummy/

```minio
docker run -d -p 9000:9000 \
  -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" \
  -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  minio/minio server /minio
```

## Burry Setup (ZOOKEPEER -> Burry -> Minio) 
```bash
./auxiliary --endpoint=localhost:2181 --isvc=zk --credentials=localhost:9000,ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE,SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY,BUCKET=dummy,SSL=false --target=minio
```

All infomation inside ```burry.sh```.

### All images are given in ```DockerHub```.

