"use client"
import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from '#/i18n/navigation';
import LayoutSider from './LayoutSider';

const { Header, Content } = Layout;


const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider />
      <Layout>
        <Header className="bg-white shadow">
          <div className="text-right pr-8 text-gray-700 font-semibold">
            欢迎来到后台管理系统
          </div>
        </Header>
        <Content className="p-8 bg-gray-100">
          {/* 这里放置具体页面内容 */}
          <div className="bg-white p-6 rounded shadow">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;