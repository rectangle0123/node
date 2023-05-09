import { NextResponse } from 'next/server';
import * as mysql from 'promise-mysql';

// 環境変数
require('dotenv').config({path: '../.env'});

// 書籍一覧取得API
export async function GET() {
  const connection = await mysql.createConnection({
    host: 'db',
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  });

  const sql = 'SELECT b.id id, b.name name, a.name author FROM books b LEFT JOIN authors a ON b.author = a.id';
  const result = await connection.query(sql);
  connection.end();

  return NextResponse.json(result);
}