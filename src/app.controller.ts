import { Controller, Delete, Post, Put,Get, Body,Param,ParseIntPipe } from "@nestjs/common";
import { BookService } from "./app.service";
import { Book } from "./data/book.dto";
@Controller('book')
export  class BookController {
   constructor(private bookService:BookService){}
    //add book
    @Post('/add')
    addBook(@Body()book:Book):string{
        return this.bookService.addBook(book);
    }
    //delete book and implemneting pipe concept
    @Delete('/delete/:id')
    deleteBook(@Param("id",ParseIntPipe)bookId:string):string {
        return this.bookService.deleteBook(bookId);
    }
    //update book
    @Put('/update')
    updateBook(@Body() book:Book):string{
        return this.bookService.updateBook(book);
    }
    //get all books
    @Get('/')
    getAllbooks():Book[]{
        return this.bookService.getAllbooks();
    }


}