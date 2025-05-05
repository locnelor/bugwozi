"use client"
import { Card, Descriptions, Typography, Divider, Timeline, Avatar } from "antd"
import { GithubOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons"

const { Title, Paragraph, Text, Link } = Typography

const AboutPage = () => {
  return (
    <div className="p-6">
      <Title level={2} className="mb-6">关于系统</Title>
      
      <Card className="mb-6">
        <div className="flex items-center mb-4">
          <Avatar size={64} src="/logo.png" className="mr-4" />
          <div>
            <Title level={3} style={{ margin: 0 }}>BugWoZi 管理系统</Title>
            <Text type="secondary">版本 1.0.0</Text>
          </div>
        </div>
        
        <Paragraph>
          BugWoZi是一个综合管理系统，集成了订单管理、用户管理、博客管理、记账系统等多种功能。
          系统采用现代化的技术栈开发，提供高效、安全、易用的管理体验。
        </Paragraph>
      </Card>
      
      <Card title="系统信息" className="mb-6">
        <Descriptions bordered column={1}>
          <Descriptions.Item label="系统名称">BugWoZi 管理系统</Descriptions.Item>
          <Descriptions.Item label="当前版本">v1.0.0</Descriptions.Item>
          <Descriptions.Item label="更新日期">2023-06-15</Descriptions.Item>
          <Descriptions.Item label="技术栈">Next.js, React, TypeScript, Prisma, GraphQL, Ant Design</Descriptions.Item>
          <Descriptions.Item label="开发团队">BugWoZi 开发团队</Descriptions.Item>
          <Descriptions.Item label="授权信息">企业内部使用</Descriptions.Item>
        </Descriptions>
      </Card>
      
      <Card title="联系方式" className="mb-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <MailOutlined className="mr-2" />
            <Text>邮箱: support@bugwozi.com</Text>
          </div>
          <div className="flex items-center">
            <HomeOutlined className="mr-2" />
            <Text>官网: <Link href="https://www.bugwozi.com" target="_blank">https://www.bugwozi.com</Link></Text>
          </div>
          <div className="flex items-center">
            <GithubOutlined className="mr-2" />
            <Text>Github: <Link href="https://github.com/bugwozi" target="_blank">https://github.com/bugwozi</Link></Text>
          </div>
        </div>
      </Card>
      
      <Card title="版本历史">
        <Timeline
          items={[
            {
              color: 'green',
              children: (
                <div>
                  <Text strong>v1.0.0 (2023-06-15)</Text>
                  <p>初始版本发布</p>
                  <ul className="list-disc pl-5">
                    <li>用户管理系统</li>
                    <li>订单管理功能</li>
                    <li>博客内容管理</li>
                    <li>记账功能</li>
                    <li>基础数据统计</li>
                  </ul>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <Text strong>v0.9.0 (2023-05-20)</Text>
                  <p>Beta测试版本</p>
                  <ul className="list-disc pl-5">
                    <li>系统框架搭建</li>
                    <li>核心功能实现</li>
                    <li>UI界面设计</li>
                  </ul>
                </div>
              ),
            },
            {
              color: 'gray',
              children: (
                <div>
                  <Text strong>v0.5.0 (2023-04-10)</Text>
                  <p>Alpha内部测试版本</p>
                  <ul className="list-disc pl-5">
                    <li>系统原型开发</li>
                    <li>数据库设计</li>
                    <li>API接口设计</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  )
}

export default AboutPage