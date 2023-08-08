import { Injectable } from "@nestjs/common"
import { Book } from "./data/book.dto"
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class BookService {

    public books:Book[] = [];

    addBook(book:Book):string{
        // auto id generator
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been succesffully Added"
    }

    deleteBook(bookId:string):string {
        this.books = this.books.filter((book)=>{
            return book.id !== bookId
        })
        return "This will delete book"
    }

    updateBook(book:Book):string{
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id == book.id;
        })
        this.books[index] = book;
        return "This will Update book"
    }

    getAllbooks():Book[]{
        return this.books;
    }

}