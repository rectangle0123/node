# Next.js with Docker

## セットアップ

### 1. ビルド

```sh
$ docker-compose build
```

### 2. アプリケーション作成

```sh
$ docker-compose run --rm node npx create-next-app app-next
```

## 使い方

### 1. 起動

```sh
$ docker-compose up -d
```

### 2. アプリケーションの開発サーバー起動

```sh
$ docker-compose exec node /bin/bash
$ cd app-next
$ npm run dev
```

### 3. DB接続

```sh
$ docker-compose exec db /bin/bash
$ mysql -u sandbox -p
> show variables like '%char%';
> show variables like '%time_zone%';
> use sandbox;
> show tables;
> select * from authors;
> select b.id, b.name, a.name from books b left join authors a on b.author = a.id;
```

### 4. 停止

```sh
$ docker-compose down
```
