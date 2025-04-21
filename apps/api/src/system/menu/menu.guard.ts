import { makePowerGuard } from "../auth/auth.guard";
import { SystemGuards } from "../system.guard";


export const MenuGuards = makePowerGuard("/system/menu", "菜单管理", SystemGuards.path)