import { BaseEntity } from "./base";
import { MenuOnRoleEntity } from "./on";

export const MenuFields = `
name
path
role
comment
parentId
`
export interface MenuEntity extends BaseEntity {
  name: string;
  path: string;
  role: number;
  comment: string;
  parentId: number;
  children: MenuEntity[] | null
  parent?: MenuEntity;
  sys_menu_on_role?: MenuOnRoleEntity[]
}