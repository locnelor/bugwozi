import { blog_user } from "@prisma/client"
import { UbaseEntity } from "../ubase.entity/ubase.entity";
import { Field } from "@nestjs/graphql";

export class BlogUserEntity extends UbaseEntity implements blog_user {
  @Field()
  name: string;
}
