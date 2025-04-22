"use client"
import { useRouter } from '#/i18n/navigation'
import { array2tree } from '#/libs/utils'
import { sys_menu } from '@pkg/database'
import { Menu } from 'antd'
import { useMemo } from 'react'

interface AdminLayoutSideProps {
  menus: sys_menu[]
}

const AdminLayoutSide = ({ menus }: AdminLayoutSideProps) => {
  const router = useRouter()
  const items = useMemo(() => {
    return array2tree(menus, {
      parentNodeName: "parentId",
      nodeName: "uid",
      defaultParentId: null,
      cbk(item: any) {
        const children = item.children?.length ? item.children : undefined
        return {
          label: item.name,
          key: item.path,
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
        onSelect={(e) => {
          router.push(`${e.key}`)
        }}
      />
    </div>
  )
}

export default AdminLayoutSide