import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { BlogTagEntity } from '@app/prisma/entity/blog/blog.tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { TagPaginationInput, TagPaginationEntity } from './dto/tag.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogTagsGuards, CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => BlogTagEntity)
@UseGuards(BlogTagsGuards.GqlAuthGuard())
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards.GqlAuthGuard([CREATE_POWER]))
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Query(() => TagPaginationEntity)
  @UseGuards(BlogTagsGuards.GqlAuthGuard([VIEW_POWER]))
  tags(@Args('pagination') pagination: TagPaginationInput) {
    return this.tagService.findAll(pagination);
  }

  @Query(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards.GqlAuthGuard([VIEW_POWER]))
  tag(@Args('uid') uid: string) {
    return this.tagService.findOne(uid);
  }

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards.GqlAuthGuard([UPDATE_POWER]))
  updateTag(
    @Args('updateTagInput') updateTagInput: UpdateTagInput,
  ) {
    return this.tagService.update(updateTagInput);
  }

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards.GqlAuthGuard([DELETE_POWER]))
  removeTag(@Args('uid') uid: string) {
    return this.tagService.remove(uid);
  }
} 