# Node.js Applications on Docker

## Setup

### 1. Build container

```sh
$ docker-compose build
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

### 3. Startup debug servers

Kick the application which you like.

```sh
$ docker-compose exec node /bin/bash

# Startup React application
#   Additinal packages:
#     - react-router-dom
$ cd app-react
$ npm start

# Startup Next.js application
#   Additinal packages:
#     - promise-mysql
#     - dotenv
$ cd app-next
$ npm run dev
```

### 4. Confirmation

- React.js Application
    - http://localhost:3000/startup/
    - http://localhost:3000/tic-tac-toe/
- Next.js Application
    - http://localhost:3000/books/

### 5. Shutdown container

```sh
$ docker-compose down
```
