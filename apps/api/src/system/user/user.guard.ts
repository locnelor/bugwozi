import { makePowerGuard } from "../auth/auth.guard";
import { SystemGuards } from "../system.guard";


export const UserGuards = makePowerGuard("/system/user", "用户管理", SystemGuards.path)