import { MenuEntity } from "./menu"
import { RoleEntity } from "./role"

export const MenuOnRoleFields = `
sys_roleId
sys_menuId
power
`
export interface MenuOnRoleEntity {
  sys_roleId: number
  sys_menuId: number
  role?: RoleEntity
  menu?: MenuEntity
  power: number
}