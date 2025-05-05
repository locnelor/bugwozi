"use client"
import { Card, Form, Input, Button, message, Typography, Tabs } from "antd"
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons"
import { gql, useMutation } from "@apollo/client"
import useViewer from "#/hooks/viewer/useViewer"

const { Title, Paragraph } = Typography

// 修改账号和密码的GraphQL mutation
const UPDATE_ACCOUNT_PASSWORD = gql`
  mutation UpdatePassword($password: String!) {
    updatePassword(password: $password)
  }
`;

// 修改账号和用户名的GraphQL mutation
const UPDATE_ACCOUNT_INFO = gql`
  mutation UpdateAccountInfo($account: String!, $name: String!) {
    updateAccountInfo(account: $account, name: $name)
  }
`;

const SettingClient = () => {
  const { viewer, loading: viewerLoading } = useViewer()
  const [passwordForm] = Form.useForm()
  const [accountForm] = Form.useForm()

  // 修改账号密码的mutation
  const [updateAccount, { loading: passwordLoading }] = useMutation(UPDATE_ACCOUNT_PASSWORD, {
    onCompleted: () => {
      message.success('密码修改成功！')
      passwordForm.resetFields()
    },
    onError: (error) => {
      message.error(`修改失败: ${error.message}`)
    }
  })

  // 修改账号信息的mutation
  const [updateAccountInfo, { loading: accountLoading }] = useMutation(UPDATE_ACCOUNT_INFO, {
    onCompleted: () => {
      message.success('账号信息修改成功！')
    },
    onError: (error) => {
      message.error(`修改失败: ${error.message}`)
    }
  })

  // 提交密码表单
  const handlePasswordSubmit = (values: { account: string; password: string; confirmPassword: string }) => {
    if (values.password !== values.confirmPassword) {
      message.error('两次输入的密码不一致！')
      return
    }

    updateAccount({
      variables: {
        password: values.password
      }
    })
  }

  // 提交账号信息表单
  const handleAccountSubmit = (values: { account: string; name: string }) => {
    updateAccountInfo({
      variables: {
        account: values.account,
        name: values.name
      }
    })
  }
  return (
    <div className="p-6">
      <Title level={2} className="mb-6">系统设置</Title>

      <Tabs
        defaultActiveKey="password"
        items={[
          {
            key: 'password',
            label: (
              <span>
                <LockOutlined />
                修改密码
              </span>
            ),
            children: (
              <Card>
                <Title level={4}>修改密码</Title>
                <Paragraph type="secondary" className="mb-6">
                  更改您的密码，请确保密码安全且不要与其他网站使用相同的密码。
                </Paragraph>

                <Form
                  form={passwordForm}
                  layout="vertical"
                  onFinish={handlePasswordSubmit}
                  initialValues={{ account: viewer?.account || '' }}
                >
                  <Form.Item
                    name="password"
                    label="新密码"
                    rules={[
                      { required: true, message: '请输入新密码' },
                      { min: 6, message: '密码长度不能少于6个字符' }
                    ]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="请输入新密码" />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    label="确认新密码"
                    rules={[
                      { required: true, message: '请确认新密码' },
                      { min: 6, message: '密码长度不能少于6个字符' }
                    ]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="请确认新密码" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={passwordLoading}>
                      保存修改
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: 'account',
            label: (
              <span>
                <UserOutlined />
                账号信息
              </span>
            ),
            children: (
              <>
                <Card>
                  <Title level={4}>修改账号信息</Title>
                  <Paragraph type="secondary" className="mb-6">
                    更新您的账号和用户名信息。
                  </Paragraph>

                  <Form
                    form={accountForm}
                    layout="vertical"
                    onFinish={handleAccountSubmit}
                    initialValues={{ account: viewer?.account || '', name: viewer?.name || '' }}
                  >
                    <Form.Item
                      name="name"
                      label="用户名"
                      rules={[
                        { required: true, message: '请输入用户名' }
                      ]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                      name="account"
                      label="账号"
                      rules={[
                        { required: true, message: '请输入账号' },
                        { min: 4, message: '账号长度不能少于4个字符' }
                      ]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="请输入账号" />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={accountLoading}>
                        保存修改
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>

                {/* <Card className="pt-4">
                  <Title level={4}>修改邮箱</Title>
                  <Paragraph type="secondary" className="mb-6">
                    更新您的邮箱地址，用于接收系统通知和重要信息。
                  </Paragraph>

                  <Form
                    layout="vertical"
                    initialValues={{ email: viewer?.email || '' }}
                  >
                    <Form.Item
                      name="email"
                      label="电子邮箱"
                      rules={[
                        { required: true, message: '请输入电子邮箱' },
                        { type: 'email', message: '请输入有效的电子邮箱地址' }
                      ]}
                    >
                      <Input prefix={<MailOutlined />} placeholder="请输入电子邮箱" />
                    </Form.Item>

                    <Form.Item
                      name="verificationCode"
                      label="验证码"
                      rules={[
                        { required: true, message: '请输入验证码' }
                      ]}
                    >
                      <div className="flex">
                        <Input placeholder="请输入验证码" className="flex-1 mr-2" />
                        <Button>获取验证码</Button>
                      </div>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary">更新邮箱</Button>
                    </Form.Item>
                  </Form>
                </Card> */}
              </>
            ),
          }
        ]}
      />
    </div>
  )
}

export default SettingClient 