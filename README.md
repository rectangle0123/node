# Next.js with Docker

## セットアップ

### 1. ビルド

```sh
$ docker-compose build
```

### 2. Next.jsアプリケーション作成

```sh
$ docker-compose run --rm node npx create-next-app app-next
```

## 使い方

### 1. 起動

```sh
$ docker-compose up -d
```

### 2. NodeコンテナでNext.jsアプリケーションの開発サーバー起動

```sh
$ docker-compose exec node /bin/bash
$ cd app-next
$ npm run dev
```

### 3. MySQLに入ってみる

```sh
$ docker-compose exec db /bin/bash
$ mysql -u root -p
$ show variables like '%char%';
$ show variables like '%time_zone%';
```

### 4. 停止

```sh
$ docker-compose down
```
