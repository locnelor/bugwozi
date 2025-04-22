"use client"
import { array2tree } from '#/libs/utils'
import { sys_menu } from '@pkg/database'
import { Menu } from 'antd'
import { useMemo } from 'react'

interface AdminLayoutSideProps {
  menus: sys_menu[]
}

const AdminLayoutSide = ({ menus }: AdminLayoutSideProps) => {
  const items = useMemo(() => {
    return array2tree(menus, {
      parentNodeName: "parentId",
      nodeName: "uid",
      defaultParentId: null,
      cbk(item: any) {
        const children = item.children?.length ? item.children : undefined
        return {
          label: item.name,
          key: item.uid,
          children
        }
      }
    })
  }, [menus])
  return (
    <div className="h-full">
      <Menu
        mode="inline"
        className="h-full border-r bg-none"
        items={items}
      />
    </div>
  )
}

export default AdminLayoutSide