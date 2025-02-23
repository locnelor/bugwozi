import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuotesService } from './quotes.service';
import { CreateQuoteInput } from './dto/create-quote.input';
import { UpdateQuoteInput } from './dto/update-quote.input';
import { BlogQuoteEntity } from '@app/prisma/blog.quote.entity/blog.quote.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';

@Resolver(() => BlogQuoteEntity)
export class QuotesResolver {
  constructor(
    private readonly quotesService: QuotesService,
    private readonly auth: AuthService,
  ) { }

  @Mutation(() => BlogQuoteEntity)
  @UseGuards()
  createQuote(
    @Args('createQuoteInput') createQuoteInput: CreateQuoteInput
  ) {
    // return this.quotesService.create(createQuoteInput);
    return {

    }
  }

  @Query(() => [Int], { name: 'quotes' })
  @UseGuards(GqlAuthGuard)
  async findAll() {
    // await firstValueFrom(this.auth.send({ cmd: "login" }, { a: 1, b: 2 }))
    // await firstValueFrom(this.authClient.send({ cmd: "login" }, { a: 1, b: 2 }))
    // return this.quotesService.findAll();
    return [1, 2, 3, 4]
  }

  @Query(() => BlogQuoteEntity, { name: 'quote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.quotesService.findOne(id);
  }

  @Mutation(() => BlogQuoteEntity)
  updateQuote(
    @Args('updateQuoteInput') updateQuoteInput: UpdateQuoteInput
  ) {
    return this.quotesService.update(updateQuoteInput.id, updateQuoteInput);
  }

  @Mutation(() => BlogQuoteEntity)
  removeQuote(@Args('id', { type: () => Int }) id: number) {
    return this.quotesService.remove(id);
  }
}
