import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("authors", { schema: "sandbox" })
export class Author {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 60 })
  name: string;

  @OneToMany(() => Book, (book) => book.author2)
  books: Book[];
}
