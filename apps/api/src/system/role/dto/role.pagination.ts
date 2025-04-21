import { SysRoleEntity } from "@app/prisma";
import { BasePagination, BasePaginationInput } from "@app/prisma/entity/base.pagination";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class RolePaginationInput extends BasePaginationInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  status?: boolean

  @Field({ nullable: true })
  comment?: string
}


@ObjectType()
export class RolePaginationEntity extends BasePagination {
  @Field(() => [SysRoleEntity])
  data: SysRoleEntity[]
}