import { IsDefined, IsNumber, IsString } from "class-validator"

export class BookDTO{
  id: number

  @IsDefined()
  @IsString()
  title: string

  @IsDefined()
  @IsString()
  author: string

  @IsDefined()
  @IsString()
  isbn: string

  @IsDefined()
  @IsNumber()
  publishYear: number
  reserved: boolean
}
