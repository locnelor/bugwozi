import { makePowerGuard } from "src/system/auth/auth.guard";
export const DashboardGuards = makePowerGuard("/dashboard", "仪表盘")