import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #bookList = [
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
/*
  @Get('books')
  listProducts(){
    return this.#bookList;
  }

  @Get('books/:id')
  listOneProduct(@Param('id') id: string){
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id == parseInt(id)){
        return this.#bookList[i];
      }
    }
    throw new NotFoundException("No product with ID");
  }

  @Delete('books/:id')
  deleteProduct(@Param('id') id:string){
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id == parseInt(id)){
        return this.#bookList.splice(i, 1);
      }
    }
    throw new NotFoundException("No product with ID");
  }

  @Post('books')
  postBook(@Body() data: BookDTO){
    let max = 0;
    for (let i = 0; i < this.#bookList.length; i++) {
      if(this.#bookList[i].id > max){
        max = this.#bookList[i].id;
      }
    }
    const book = 
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
    */
  /*
  @Put('products/:id')
  replaceProduct(@Param('id') id:string, @Body() data: ReplaceProductDto){
    if(!this.#productList[id]){
      throw new NotFoundException("No product with ID");
    }
    this.#productList[id].name = data.name;
    this.#productList[id].price = data.price;
  }*/
}
