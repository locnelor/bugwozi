import { Field, ObjectType } from "@nestjs/graphql";
import { Pagination } from "../pagination";
import { SysUserEntity } from "@app/prisma/sys.user.entity/sys.user.entity";

@ObjectType()
export class UserPagination extends Pagination {
  @Field(() => [SysUserEntity])
  data: SysUserEntity[]
}
