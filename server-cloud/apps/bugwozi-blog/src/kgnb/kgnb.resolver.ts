import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KgnbService } from './kgnb.service';
import { Kgnb } from './entities/kgnb.entity';
import { CreateKgnbInput } from './dto/create-kgnb.input';
import { UpdateKgnbInput } from './dto/update-kgnb.input';

@Resolver(() => Kgnb)
export class KgnbResolver {
  constructor(private readonly kgnbService: KgnbService) {}

  @Mutation(() => Kgnb)
  createKgnb(@Args('createKgnbInput') createKgnbInput: CreateKgnbInput) {
    return this.kgnbService.create(createKgnbInput);
  }

  @Query(() => [Kgnb], { name: 'kgnb' })
  findAll() {
    return this.kgnbService.findAll();
  }

  @Query(() => Kgnb, { name: 'kgnb' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kgnbService.findOne(id);
  }

  @Mutation(() => Kgnb)
  updateKgnb(@Args('updateKgnbInput') updateKgnbInput: UpdateKgnbInput) {
    return this.kgnbService.update(updateKgnbInput.id, updateKgnbInput);
  }

  @Mutation(() => Kgnb)
  removeKgnb(@Args('id', { type: () => Int }) id: number) {
    return this.kgnbService.remove(id);
  }
}
