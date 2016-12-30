Time Clock. One Docker experiment
======

### Install php vendors
```
cd src/php
composer install
```

### Install python dependencies
```
cd src/python
pip install
```

### Install node dependencies
```
cd src/node
npm install
```

### Run and build containers
```
docker-compose up --build -d
```

Open web browser at: http://localhost

## Execute one script within existing image. 

Create container execute command and destroy container
 
```
docker run -it -v /Users/gonzalo/work/experiments/docker.example/src:/mnt/src --rm gonzalo123/example_python python /mnt/src/python/hello.py
```