import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogAnnouncementsEntity } from '@app/prisma/entity/blog/blog.announcements.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';

@ObjectType()
export class AnnouncementsPaginationEntity extends BasePagination {
  @Field(() => [BlogAnnouncementsEntity])
  data: BlogAnnouncementsEntity[];
}

@InputType()
export class AnnouncementsPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean, { nullable: true })
  status?: boolean;
} 