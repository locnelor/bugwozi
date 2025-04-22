import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { SysMenuOnRoleEntity, SysRoleEntity } from '@app/prisma';
import { RolePaginationEntity, RolePaginationInput } from './dto/role.pagination';
import { UseGuards } from '@nestjs/common';
import { ASSIGN_POWER, CREATE_POWER, DELETE_POWER, SystemRoleGuards, UPDATE_POWER, VIEW_POWER } from '@app/auth-power';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { AssignRoleInput } from './dto/assign-role.input';

@Resolver(() => SysRoleEntity)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }
  
  @Query(() => [SysRoleEntity], { name: "roles" })
  @UseGuards(SystemRoleGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => RolePaginationEntity, { name: "roleList" })
  @UseGuards(SystemRoleGuards.GqlAuthGuard([VIEW_POWER]))
  findList(
    @Args("pagination") pagination: RolePaginationInput
  ) {
    return this.roleService.findList(pagination)
  }

  @Query(()=>[SysMenuOnRoleEntity])
  @UseGuards(SystemRoleGuards.GqlAuthGuard([VIEW_POWER]))
  findMenuOnRoles(@Args("id")uid:string){
    return this.roleService.findMenuOnRoles(uid)
  }

  @Query(() => SysRoleEntity)
  @UseGuards(SystemRoleGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('uid') uid: string) {
    return this.roleService.findOne(uid);
  }

  @Mutation(() => SysRoleEntity)
  @UseGuards(SystemRoleGuards.GqlAuthGuard([CREATE_POWER]))
  createRole(
    @Args("data") data: CreateRoleInput
  ) {
    return this.roleService.create(data)
  }

  @Mutation(() => SysRoleEntity)
  @UseGuards(SystemRoleGuards.GqlAuthGuard([UPDATE_POWER]))
  updateRole(
    @Args("data") data: UpdateRoleInput
  ) {
    return this.roleService.update(data)
  }

  @Mutation(() => Int)
  @UseGuards(SystemRoleGuards.GqlAuthGuard([ASSIGN_POWER]))
  assignRole(
    @Args("data") data: AssignRoleInput
  ) {
    return this.roleService.assign(data)
  }

  @Mutation(() => SysRoleEntity)
  @UseGuards(SystemRoleGuards.GqlAuthGuard([DELETE_POWER]))
  removeRole(@Args('uid') uid: string) {
    return this.roleService.remove(uid);
  }
}
