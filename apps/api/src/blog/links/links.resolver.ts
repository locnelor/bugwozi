import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LinksService } from './links.service';
import { BlogLinksEntity } from '@app/prisma/entity/blog/blog.links.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { LinksPaginationInput, LinksPaginationEntity } from './dto/links.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogLinkGuards, CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => BlogLinksEntity)
@UseGuards(BlogLinkGuards.GqlAuthGuard())
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([CREATE_POWER]))
  createLink(@Args('createLinkInput') createLinkInput: CreateLinkInput) {
    return this.linksService.create(createLinkInput);
  }

  @Query(() => LinksPaginationEntity)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([VIEW_POWER]))
  links(@Args('pagination') pagination: LinksPaginationInput) {
    return this.linksService.findAll(pagination);
  }

  @Query(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([VIEW_POWER]))
  link(@Args('uid') uid: string) {
    return this.linksService.findOne(uid);
  }

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([UPDATE_POWER]))
  updateLink(
    @Args('updateLinkInput') updateLinkInput: UpdateLinkInput,
  ) {
    return this.linksService.update(updateLinkInput);
  }

  @Mutation(() => BlogLinksEntity)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([DELETE_POWER]) )
  removeLink(@Args('uid') uid: string) {
    return this.linksService.remove(uid);
  }
} 