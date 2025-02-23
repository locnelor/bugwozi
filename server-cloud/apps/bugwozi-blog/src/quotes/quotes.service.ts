import { Injectable } from '@nestjs/common';
import { CreateQuoteInput } from './dto/create-quote.input';
import { UpdateQuoteInput } from './dto/update-quote.input';
import { PrismaService } from '@app/prisma';

@Injectable()
export class QuotesService {
  constructor(
    private readonly prisma: PrismaService
  ) { }
  create(
    createQuoteInput: CreateQuoteInput,
    authorId: number
  ) {
    // return this.prisma.blog_quote.create({
    //   data: {
    //     // ...createQuoteInput,
    //     creator: {
    //       connect: {
    //         id: authorId,
    //       },
    //     },
    //   },
    // })
  }

  findAll() {
    return `This action returns all quotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quote`;
  }

  update(id: number, updateQuoteInput: UpdateQuoteInput) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
}
