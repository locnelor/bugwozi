import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SystemService } from './system.service';
import { SysUserEntity } from '@app/prisma';

@Resolver()
export class SystemResolver {
  constructor(
    private readonly systemService: SystemService,
  ) { }

  @Query(() => Boolean)
  hasWebsiteInit(
  ) {
    return this.systemService.hasWebsiteInit()
  }

  @Mutation(() => SysUserEntity)
  websiteInit(
    @Args("roleName") roleName: string,
    @Args("username") username: string,
    @Args("account") account: string,
    @Args("password") password: string
  ) {
    return this.systemService.websiteInit({
      roleName,
      username,
      account,
      password
    })
  }
}
