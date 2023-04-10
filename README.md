# Applications on Node.js

## Setup

### 1. Build container

```sh
$ docker-compose build
```

### 2. Create applications

```sh
# Create Next.js Application
$ docker-compose run --rm node npx create-next-app app-next
```

## Usage

### 1. Startup container

```sh
$ docker-compose up -d
```

### 2. Login in DB

To execute queries as needed.

```sh
$ docker-compose exec db /bin/bash
$ mysql -u username -p
```

### 3. Install packages into applications

```sh
$ docker-compose exec node /bin/bash

# For Next.js apoplication
$ cd app-next
$ npm install promise-mysql
$ npm install dotenv
```

### 4. Startup debug servers

Kick the application which you like.

```sh
$ docker-compose exec node /bin/bash

# Startup Next.js apoplication
$ cd app-next
$ npm run dev
```

### 5. Confirmation

- Next.js Application http://localhost:3000/books/

### 6. Shutdown container

```sh
$ docker-compose down
```
