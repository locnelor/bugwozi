"use client"
import { setCookie } from "@/lib/cookie";
import { gql, useMutation } from "@apollo/client";
import { Form, Input, Button, Divider, App } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const AuthMutation = gql`
  mutation Auth(
    $account:String!,
    $password:String!
  ){
    auth(
      account:$account,
      password:$password
    )
  }
`
const LoginPage = () => {
  const router = useRouter()
  const { message } = App.useApp()
  const [form] = Form.useForm()
  const [auth, { loading }] = useMutation(AuthMutation, {
    onCompleted(data) {
      setCookie("token", data.auth)
      message.success("登录成功");

      router.push("/")
    },
    onError(error) {
      message.error(error.message)
    },
  })
  const onFinish = useCallback((variables: unknown) => {
    console.log("finish")
    auth({
      variables
    })
  }, [])
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          登录
        </h1>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            label="账号"
            name="account"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <Input placeholder="请输入账号" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <Divider>没有账号？</Divider>
        <div className="text-center">
          <Link href="/auth/register" className="text-blue-600 hover:text-blue-800">
            前往注册
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;