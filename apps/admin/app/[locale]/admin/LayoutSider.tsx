import { Layout, Menu } from 'antd'
import { useTranslations } from 'next-intl'
import { Link } from '#/i18n/navigation'
import { usePathname } from 'next/navigation'
import React from 'react'

const { Sider } = Layout

const LayoutSider: React.FC = () => {
  const t = useTranslations('Admin')
  const pathname = usePathname()

  // 侧边栏菜单项
  const menuItems = [
    {
      key: 'dashboard',
      label: <Link href="/admin">{t('dashboard')}</Link>,
    },
    {
      key: 'users',
      label: <Link href="/admin/users">{t('users')}</Link>,
    },
    {
      key: 'courses',
      label: <Link href="/admin/courses">{t('courses')}</Link>,
    },
    {
      key: 'settings',
      label: <Link href="/admin/settings">{t('settings')}</Link>,
    },
  ]

  // 获取当前选中的菜单项
  const selectedKey = menuItems.find((item) => pathname?.includes(item.key))?.key || ''

  return (
    <Sider width={200} theme="light">
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
      />
    </Sider>
  )
}

export default LayoutSider
