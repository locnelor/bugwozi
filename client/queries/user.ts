import { BaseEntity } from "./base";
import { RoleEntity } from "./role";

export const UserFields = `
name
account
sys_roleId
loginId
`
export interface UserEntity extends BaseEntity {
  name: string
  account: string
  sys_roleId: number
  loginId: string
  role?: RoleEntity
}