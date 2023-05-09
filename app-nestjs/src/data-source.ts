import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Author } from './entities/Author';
import { Book } from './entities/Book';

// 環境変数
require('dotenv').config({path: '../.env'});

// データソース
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [Author, Book]
});

// 初期化
AppDataSource.initialize().then(() => {
  console.log('DataSource has been initialized!')
}).catch((error) => console.log(error));