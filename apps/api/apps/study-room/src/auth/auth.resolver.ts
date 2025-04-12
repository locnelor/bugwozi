import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, GqlCurrentUser } from './gql.auth.guard';

import { StudyUserEntity } from '@pkg/types';
@Resolver()
export class AuthResolver {

  @Query(() => StudyUserEntity)
  @UseGuards(new GqlAuthGuard)
  viewer(
    @GqlCurrentUser() user: StudyUserEntity
  ) {
    return user;
  }
}
