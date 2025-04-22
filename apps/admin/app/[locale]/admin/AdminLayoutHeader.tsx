'use client'

import { Avatar, Badge, Button } from 'antd'
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
const AdminLayoutHeader = () => {
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
        {/* 通知 */}
        <Badge count={5} size="small">
          <Button 
            type="text" 
            icon={<BellOutlined className="text-lg" />}
            className="flex items-center justify-center"
          />
        </Badge>

        {/* 设置 */}
        <Button 
          type="text" 
          icon={<SettingOutlined className="text-lg" />}
          className="flex items-center justify-center"
        />

        {/* 用户信息和头像 */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Admin User</span>
          <Avatar 
            icon={<UserOutlined />} 
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default AdminLayoutHeader