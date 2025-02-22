import { BaseEntity } from "./base";
import { MenuOnRoleEntity } from "./on";
import { UserEntity } from "./user";

export const RoleFields = `
name
status
comment
`
export interface RoleEntity extends BaseEntity {
  name: string
  status: number
  comment: string
  sys_menu_on_role?: MenuOnRoleEntity[]
  sys_user?: UserEntity
}