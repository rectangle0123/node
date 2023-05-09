import { Controller, Get } from '@nestjs/common';
import { Book } from '../entities/Book';
import { AppDataSource } from 'src/data-source';

@Controller('books')
export class BooksController {
  @Get()
  async findAll(): Promise<Book[]> {
    const bookRepository = AppDataSource.getRepository(Book);
    const books = await bookRepository.find();
    console.log(books);
    return books;
  }
}
