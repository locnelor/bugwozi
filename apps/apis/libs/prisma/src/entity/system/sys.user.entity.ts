import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity";

@ObjectType()
export class SysUserEntity extends BaseEntity {
  @Field(() => ID)
  uid: string

  @Field()
  name: string

  @Field({ nullable: true })
  roleId?: string

  @Field()
  account: string
} 