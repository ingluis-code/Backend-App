import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

      return {
        status: 'success',
        message: 'Book created successfully',
        data: book
      };

    } catch (error) {
      
      if(error.code === '23505')
        throw new BadRequestException({
          status: 'error',
          message: 'The book with this title already exists',
          error: error.detail,
        });
        

      throw new InternalServerErrorException({
        status: 'error',
        message: 'Unexpected error, check server logs',
        error: error.message,
      })
    }
  }

  async findAll() {
    try {
      const books = await this.bookRespository.find();

      if (books.length === 0) {
        return {
          status: 'error',
          message: 'No books available',
        }
      }

      return {
        status: 'success',
        message: 'Books retrieved successfully',
        data: books,
      };
      
    } catch (error) {

      throw new InternalServerErrorException(
        {
          status: 'error',
          message: 'An error occurred while fetching the books',
          error: error.message,
        }
      )
      
    }
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
