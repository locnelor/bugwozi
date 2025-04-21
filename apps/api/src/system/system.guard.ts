
import { makePowerGuard } from './auth/auth.guard';

export const SystemGuards = makePowerGuard("/system", "系统管理")