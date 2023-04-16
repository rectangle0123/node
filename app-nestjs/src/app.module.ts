import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksController } from './controllers/books.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
