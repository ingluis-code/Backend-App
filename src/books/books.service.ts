import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRespository: Repository<Book>
  ){}

  async create(createBookDto: CreateBookDto) {
    try {
      const book = this.bookRespository.create(createBookDto);

      await this.bookRespository.save(book);

      return book;

    } catch (error) {
      if(error.code === '23505')
        throw new BadRequestException(error.detail);
      throw new InternalServerErrorException('Unexpected error, check server logs')
    }
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
