import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlogCommentsEntity } from '@app/prisma/entity/blog/blog.comments.entity';
import { BasePagination, BasePaginationInput } from '@app/prisma/entity/base.pagination';

@ObjectType()
export class CommentsPaginationEntity extends BasePagination {
  @Field(() => [BlogCommentsEntity])
  data: BlogCommentsEntity[];
}

@InputType()
export class CommentsPaginationInput extends BasePaginationInput {
  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean, { nullable: true })
  status?: boolean;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  postId?: string;
} 