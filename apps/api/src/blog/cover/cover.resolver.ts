import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CoverService } from './cover.service';
import { BlogArticleGuards, BlogCategoriesGuards, BlogLinkGuards, UPDATE_POWER } from '@app/auth-power';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class CoverResolver {
  constructor(private readonly coverService: CoverService) { }

  @Mutation(() => String)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([UPDATE_POWER]))
  updatePostCover(
    @Args("base64") base64: string
  ) {
    this.coverService.savePostDefaultCover(base64)
    return "success"
  }

  @Mutation(() => String)
  @UseGuards(BlogCategoriesGuards.GqlAuthGuard([UPDATE_POWER]))
  updateCategoriesCover(
    @Args("base64") base64: string
  ) {
    this.coverService.saveCategoriesDefaultCover(base64)
    return "success"
  }

  @Mutation(() => String)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([UPDATE_POWER]))
  updateLinkCover(
    @Args("base64") base64: string
  ) {
    this.coverService.saveLinkDefaultCover(base64)
    return "success"
  }


  @Mutation(() => String)
  @UseGuards(BlogLinkGuards.GqlAuthGuard([UPDATE_POWER]))
  updateUserCover(
    @Args("base64") base64: string
  ) {
    this.coverService.saveUserDefaultAvatar(base64)
    return "success"
  }
}
