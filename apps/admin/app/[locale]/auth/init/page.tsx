"use client"

import { useRouter } from '#/i18n/navigation'
import { setCookie } from '#/libs/cookie'
import gqlError from '#/libs/gqlError'
import { gql, useMutation } from '@apollo/client'
import { Input, Button, Form } from 'antd'
import { useTranslations } from 'next-intl'


const WebsiteInitMutation = gql`
  mutation WebsiteInit(
    $roleName:String!,
    $username:String!,
    $account:String!,
    $password:String!
  ){
    websiteInit(
      roleName:$roleName,
      username:$username,
      account:$account,
      password:$password
    ){
      access_token
    }
  }
`
const AuthInitPage = () => {
  const t = useTranslations("auth.init")
  const router = useRouter()
  const [init, { loading }] = useMutation(WebsiteInitMutation, {
    onCompleted({ websiteInit: { access_token } }) {
      setCookie("token", access_token);
      router.push("/")
    },
    onError(error) {
      gqlError(error)
    },
  })
  const handleSubmit = async (variables: any) => {
    init({ variables })
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
        <p className="mt-2 text-sm text-gray-600">{t('subtitle')}</p>
      </div>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        className="space-y-6"
      >
        <div className="space-y-4">
          <Form.Item
            label={t('roleName')}
            name="roleName"
            rules={[{ required: true, message: t('roleNameRequired') }]}
          >
            <Input
              placeholder={t('roleNamePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            label={t('username')}
            name="username"
            rules={[{ required: true, message: t('usernameRequired') }]}
          >
            <Input
              placeholder={t('usernamePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            label={t('account')}
            name="account"
            rules={[{ required: true, message: t('accountRequired') }]}
          >
            <Input
              placeholder={t('accountPlaceholder')}
            />
          </Form.Item>

          <Form.Item
            label={t('password')}
            name="password"
            rules={[{ required: true, message: t('passwordRequired') }]}
          >
            <Input.Password
              placeholder={t('passwordPlaceholder')}
            />
          </Form.Item>

          <Form.Item
            label={t('confirmPassword')}
            name="confirmPassword"
            rules={[
              { required: true, message: t('confirmPasswordRequired') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('passwordMismatch')));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder={t('confirmPasswordPlaceholder')}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AuthInitPage