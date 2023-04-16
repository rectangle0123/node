import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "./Author";

@Index("author", ["author"], {})
@Entity("books", { schema: "sandbox" })
export class Book {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 60 })
  name: string;

  @Column("int", { name: "author" })
  author: number;

  @ManyToOne(() => Author, (author) => author.books, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "author", referencedColumnName: "id" }])
  author2: Author;
}
