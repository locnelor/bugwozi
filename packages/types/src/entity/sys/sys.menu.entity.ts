import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../base.entity";
import type { sys_menu } from "@pkg/database";


@ObjectType()
export class SysMenuEntity extends BaseEntity implements sys_menu {
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(() => Int)
  powers: number;

  @Field({ nullable: true })
  comment: string | null;

  @Field({ nullable: true })
  parentId: number | null;
}