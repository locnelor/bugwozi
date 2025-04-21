import { SysUserEntity } from "@app/prisma";
import { BasePagination, BasePaginationInput } from "@app/prisma/entity/base.pagination";
import { Field, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class UserPaginationEntity extends BasePagination {
  @Field(() => [SysUserEntity])
  data: SysUserEntity[]
}

@InputType()
export class UserPaginationInput extends BasePaginationInput {
  @Field({ nullable: true })
  name: string
}