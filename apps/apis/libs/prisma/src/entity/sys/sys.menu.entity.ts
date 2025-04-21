import { Field, Int, ObjectType } from '@nestjs/graphql';
import type { sys_menu } from '@pkg/database';
import { BaseUEntity } from '../base.u.entity';

@ObjectType()
export class SysMenuEntity extends BaseUEntity implements sys_menu {
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(() => Int)
  powers: number;

  @Field({ nullable: true })
  comment: string;

  @Field({ nullable: true })
  parentId: string;
}
