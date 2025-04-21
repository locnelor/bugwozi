import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserPaginationEntity, UserPaginationInput } from './dto/user.pagination';
import { UseGuards } from '@nestjs/common';
import { CREATE_POWER, DELETE_POWER, UPDATE_POWER, VIEW_POWER } from '../auth/auth.guard';
import { UserGuards } from './user.guard';
import { SysUserEntity } from '@app/prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => SysUserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => [SysUserEntity], { name: "users" })
  @UseGuards(UserGuards.GqlAuthGuard([VIEW_POWER]))
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserPaginationEntity, { name: "userList" })
  @UseGuards(UserGuards.GqlAuthGuard([VIEW_POWER]))
  findList(
    @Args("pagination") pagination: UserPaginationInput
  ) {
    return this.userService.findList(pagination);
  }

  @Query(() => SysUserEntity)
  @UseGuards(UserGuards.GqlAuthGuard([VIEW_POWER]))
  findOne(@Args('uid') uid: string) {
    return this.userService.findOne(uid);
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuards.GqlAuthGuard([CREATE_POWER]))
  createUser(
    @Args("createInput") input: CreateUserInput
  ) {
    return this.userService.create(input)
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuards.GqlAuthGuard([UPDATE_POWER]))
  updateUser(
    @Args("updateInput") input: UpdateUserInput
  ) {
    return this.userService.update(input)
  }

  @Mutation(() => SysUserEntity)
  @UseGuards(UserGuards.GqlAuthGuard([DELETE_POWER]))
  removeUser(@Args('uid') uid: string) {
    return this.userService.remove(uid);
  }
}
