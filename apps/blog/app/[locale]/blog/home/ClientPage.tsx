"use client"

import { sys_user } from "@pkg/database"
import { getUserAvatar } from "@pkg/hooks"
import { Card, Avatar, Typography, Space } from "antd"
import dayjs from "dayjs"

const { Text, Title } = Typography

const ClientPage = ({ user }: { user: sys_user }) => {
  const avatarUrl = getUserAvatar(user.uid)
  
  return (
    <Card>
      <Space direction="vertical" size="small">
        <Space align="center">
          <Avatar size={64} src={avatarUrl} />
          <Space direction="vertical" size={0}>
            <Title level={4} style={{ margin: 0 }}>{user.name}</Title>
            <Text type="secondary">@{user.account}</Text>
          </Space>
        </Space>
        <Text type="secondary">
          加入了这个窝子: {dayjs(user.createdAt).format('YYYY年MM月DD日')}
        </Text>
      </Space>
    </Card>
  )
}

export default ClientPage