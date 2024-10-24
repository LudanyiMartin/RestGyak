import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  #bookList: Book[] = [
    {
      id: 1,
      title: "Romeo és Júlia",
      author: "Shakespeare",
      isbn: "9783161481000",
      publishYear: 1597,
      reserved: false
    },
    {
      id: 2,
      title: "Pál utcai fiúk",
      author: "Molnár Frecen",
      isbn: "1112223334445",
      publishYear: 1906,
      reserved: true
    },
    {
      id: 3,
      title: "Harry Potter",
      author: "J.K. Rowling",
      isbn: "5556667778889",
      publishYear: 1997,
      reserved: false
    },
  ]
  
  @Get()
  listProducts(){
    return this.#bookList;
  }

  @Get(':id')
  listOneProduct(@Param('id') id: string){
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id == parseInt(id)){
        return this.#bookList[i];
      }
    }
    throw new NotFoundException("No product with ID");
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id == parseInt(id)){
        if(updateBookDto.title){
          this.#bookList[i].title = updateBookDto.title;
        }
        if(updateBookDto.author){
          this.#bookList[i].author = updateBookDto.author;
        }
        if(updateBookDto.isbn){
          this.#bookList[i].isbn = updateBookDto.isbn;
        }
        if(updateBookDto.publishYear){
          this.#bookList[i].publishYear = updateBookDto.publishYear;
        }
      }
    }
    return this.listOneProduct(id);
  }

  @Post()
  @HttpCode(201)
  postBook(@Body() data: CreateBookDto){
    let max = 0;
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id > max){
        max = this.#bookList[i].id;
      }
    }
    const book: Book = 
      {
        id: max + 1,
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        publishYear: data.publishYear,
        reserved: false
      }
    
    this.#bookList.push(book)
  }

  @Delete(':id')
  @HttpCode(204)
  deleteProduct(@Param('id') id:string){
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id == parseInt(id)){
        return this.#bookList.splice(i, 1);
      }
    }
    throw new NotFoundException("No product with ID");
  }
}
