'use client'

import { Avatar, Badge, Button, Popover } from 'antd'
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import useViewer from '#/hooks/viewer/useViewer'
import { useCallback, useMemo } from 'react'
import { useApolloClient } from '@apollo/client'
import { setCookie } from '#/libs/cookie'
import { Link } from '#/i18n/navigation'
const AdminLayoutHeader = () => {
  const { viewer } = useViewer();
  const menus = useMemo(() => {
    return [
      //   {
      //   href: "/account",
      //   label: "账户"
      // },
      {
        href: "/setting",
        label: "设置"
      }, {
        href: "/about",
        label: "关于"
      }]
  }, [])
  const client = useApolloClient();
  const onLogout = useCallback(() => {
    setCookie("token", "");
    client.clearStore().finally(() => {
      window.location.reload()
    })
  }, [])
  return (
    <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200">
      {/* 左侧 Logo */}
      <div className="flex items-center">
        {/* <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={32}
          className="cursor-pointer"
        /> */}
        Logo
      </div>

      {/* 右侧功能区 */}
      <div className="flex items-center space-x-4">
        {/* <Badge count={5} size="small">
          <Button
            type="text"
            icon={<BellOutlined className="text-lg" />}
            className="flex items-center justify-center"
          />
        </Badge>

        <Button
          type="text"
          icon={<SettingOutlined className="text-lg" />}
          className="flex items-center justify-center"
        /> */}

        <Popover
          placement="bottomRight"
          content={
            <div className="flex flex-col w-32">
              {menus.map(({
                href,
                label
              }, key) => {
                return (
                  <Link href={href} key={key} className='w-full block'>
                    <Button type="text" block className="text-left">{label}</Button>
                  </Link>
                )
              })}
              <div className="border-t border-gray-200 my-1"></div>
              <Button onClick={onLogout} danger type="text" className="text-left text-red-500">退出登录</Button>
            </div>
          }
          trigger="click"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>{viewer?.name}</span>
            <Avatar icon={<UserOutlined />} />
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default AdminLayoutHeader