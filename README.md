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