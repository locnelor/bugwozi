import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnnouncementsService } from './announcements.service';
import { BlogAnnouncementsEntity } from '@app/prisma/entity/blog/blog.announcements.entity';
import { CreateAnnouncementInput } from './dto/create-announcement.input';
import { UpdateAnnouncementInput } from './dto/update-announcement.input';
import { AnnouncementsPaginationInput, AnnouncementsPaginationEntity } from './dto/announcements.pagination';
import { UseGuards } from '@nestjs/common';
import { BlogArticleGuards, CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';

@Resolver(() => BlogAnnouncementsEntity)
@UseGuards(BlogArticleGuards.GqlAuthGuard)
export class AnnouncementsResolver {
  constructor(private readonly announcementsService: AnnouncementsService) { }

  @Mutation(() => BlogAnnouncementsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([CREATE_POWER]))
  createAnnouncement(@Args('createAnnouncementInput') createAnnouncementInput: CreateAnnouncementInput) {
    return this.announcementsService.create(createAnnouncementInput);
  }

  @Query(() => AnnouncementsPaginationEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  announcements(@Args('pagination') pagination: AnnouncementsPaginationInput) {
    return this.announcementsService.findAll(pagination);
  }

  @Query(() => BlogAnnouncementsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([VIEW_POWER]))
  announcement(@Args('uid') uid: string) {
    return this.announcementsService.findOne(uid);
  }

  @Mutation(() => BlogAnnouncementsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([UPDATE_POWER]))
  updateAnnouncement(
    @Args('uid') uid: string,
    @Args('updateAnnouncementInput') updateAnnouncementInput: UpdateAnnouncementInput,
  ) {
    return this.announcementsService.update(uid, updateAnnouncementInput);
  }

  @Mutation(() => BlogAnnouncementsEntity)
  @UseGuards(BlogArticleGuards.GqlAuthGuard([DELETE_POWER]))
  removeAnnouncement(@Args('uid') uid: string) {
    return this.announcementsService.remove(uid);
  }
} 