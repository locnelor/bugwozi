import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { SysRoleEntity } from '@app/prisma';
import { RolePaginationEntity, RolePaginationInput } from './dto/role.pagination';

@Resolver(() => SysRoleEntity)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }
  @Query(() => [SysRoleEntity], { name: "roles" })
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => RolePaginationEntity, { name: "roleList" })
  findList(
    @Args("pagination") pagination: RolePaginationInput
  ) {
    return this.roleService.findList(pagination)
  }

  @Query(() => SysRoleEntity)
  findOne(@Args('uid') uid: string) {
    return this.roleService.findOne(uid);
  }


  @Mutation(() => SysRoleEntity)
  removeRole(@Args('uid') uid: string) {
    return this.roleService.remove(uid);
  }
}
