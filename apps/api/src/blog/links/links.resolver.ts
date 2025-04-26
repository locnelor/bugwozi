import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LinksService } from './links.service';
import { BlogLinksEntity } from '@app/prisma/entity/blog/blog.links.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { LinksPaginationInput, LinksPaginationEntity } from './dto/links.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogLinkGuards } from '@app/auth-power';
import { GqlAuthGuard } from '@app/auth';

@Resolver(() => BlogLinksEntity)
@UseGuards(GqlAuthGuard)
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards)
  createLink(@Args('createLinkInput') createLinkInput: CreateLinkInput) {
    return this.linksService.create(createLinkInput);
  }

  @Query(() => LinksPaginationEntity)
  @UseGuards(BlogLinkGuards)
  links(@Args('pagination') pagination: LinksPaginationInput) {
    return this.linksService.findAll(pagination);
  }

  @Query(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards)
  link(@Args('uid') uid: string) {
    return this.linksService.findOne(uid);
  }

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards)
  updateLink(
    @Args('uid') uid: string,
    @Args('updateLinkInput') updateLinkInput: UpdateLinkInput,
  ) {
    return this.linksService.update(uid, updateLinkInput);
  }

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards)
  removeLink(@Args('uid') uid: string) {
    return this.linksService.remove(uid);
  }
} 