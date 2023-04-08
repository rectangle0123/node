# Next.js with Docker

## セットアップ

### 1. コンテナビルド

```sh
$ docker-compose build
```

### 2. アプリケーション作成

```sh
$ docker-compose run --rm node npx create-next-app app-next
```

## 使い方

### 1. コンテナ起動

```sh
$ docker-compose up -d
```

### 2. DBコンテナに接続

```sh
$ docker-compose exec db /bin/bash
```

### 3. アプリケーションにパッケージインストール

```sh
$ docker-compose exec node /bin/bash
$ cd app-next
$ npm install promise-mysql
```

### 3. デバッグサーバー起動

```sh
$ docker-compose exec node /bin/bash
$ cd app-next
$ npm run dev
```

### 4. 停止

```sh
$ docker-compose down
```
