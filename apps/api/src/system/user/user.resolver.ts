import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserPaginationEntity, UserPaginationInput } from './dto/user.pagination';
import { UseGuards } from '@nestjs/common';
import { SysUserEntity } from '@app/prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { VIEW_POWER, CREATE_POWER, UPDATE_POWER, DELETE_POWER, SystemUserGuards } from '@app/auth-power';

@Resolver(() => SysUserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => [SysUserEntity], { name: "users" })
  @UseGuards(SystemUserGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserPaginationEntity, { name: "userList" })
  @UseGuards(SystemUserGuards.GqlAuthGuard([VIEW_POWER]))
  findList(
    @Args("pagination") pagination: UserPaginationInput
  ) {
    return this.userService.findList(pagination);
  }

  @Query(() => SysUserEntity)
  @UseGuards(SystemUserGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('uid') uid: string) {
    return this.userService.findOne(uid);
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(SystemUserGuards.GqlAuthGuard([CREATE_POWER]))
  createUser(
    @Args("createInput") input: CreateUserInput
  ) {
    return this.userService.create(input)
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(SystemUserGuards.GqlAuthGuard([UPDATE_POWER]))
  updateUser(
    @Args("updateInput") input: UpdateUserInput
  ) {
    return this.userService.update(input)
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(SystemUserGuards.GqlAuthGuard([DELETE_POWER]))
  removeUser(@Args('uid') uid: string) {
    return this.userService.remove(uid);
  }
}
