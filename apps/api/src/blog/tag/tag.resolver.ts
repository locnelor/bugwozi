import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { BlogTagEntity } from '@app/prisma/entity/blog/blog.tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { TagPaginationInput, TagPaginationEntity } from './dto/tag.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogTagsGuards } from '@app/auth-power';
import { GqlAuthGuard } from '@app/auth';

@Resolver(() => BlogTagEntity)
@UseGuards(GqlAuthGuard)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards)
  createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Query(() => TagPaginationEntity)
  @UseGuards(BlogTagsGuards)
  tags(@Args('pagination') pagination: TagPaginationInput) {
    return this.tagService.findAll(pagination);
  }

  @Query(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards)
  tag(@Args('uid') uid: string) {
    return this.tagService.findOne(uid);
  }

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards)
  updateTag(
    @Args('uid') uid: string,
    @Args('updateTagInput') updateTagInput: UpdateTagInput,
  ) {
    return this.tagService.update(uid, updateTagInput);
  }

  @Mutation(() => BlogTagEntity)
  @UseGuards(BlogTagsGuards)
  removeTag(@Args('uid') uid: string) {
    return this.tagService.remove(uid);
  }
} 