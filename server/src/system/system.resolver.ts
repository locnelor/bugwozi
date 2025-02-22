import { Resolver } from '@nestjs/graphql';
import { MakeGqlAuthPowerGuard } from 'src/auth/gql.auth.guard';



export const SystemMenuPath = "/system"
export const SystemGuard = MakeGqlAuthPowerGuard(SystemMenuPath, "系统管理")
@Resolver()
export class SystemResolver { }
