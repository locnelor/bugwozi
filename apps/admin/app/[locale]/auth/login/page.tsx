"use client"
import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useMsg } from '#/hooks/MessageProvider';
import { useRouter } from '#/i18n/navigation';
import { useTranslations } from 'next-intl';
import { gql, useMutation, useQuery } from '@apollo/client';
import gqlError from '#/libs/gqlError';

const HasWebsiteInitQuery = gql`
  query HasWebsiteInit{
    hasWebsiteInit
  }
`


const AuthAccountLogin = gql`
  query AuthAccountLogin(
    $account:String!,
    $password:String!
  ){
    authAccountLogin(
      account:$account,
      password:$password
    ){
      access_token
    }
  }
`


const AuthLoginPage = () => {
  const { data } = useQuery(HasWebsiteInitQuery, {
    fetchPolicy: "no-cache"
  })
  const [auth] = useMutation(AuthAccountLogin, {
    onCompleted: ({authAccountLogin}) => {
      
    },
    onError: (error) => {
      gqlError(error)
    }
  })
  const loading = false;
  const router = useRouter()
  useEffect(() => {
    if (!data) return;
    const { hasWebsiteInit } = data;
    if (hasWebsiteInit) return;
    router.push("/auth/init")
  }, [data])

  const { messageApi } = useMsg()
  const t = useTranslations('auth')

  const handleSubmit = (values: any) => {
    console.log('Received values of form: ', values);
    messageApi.success('登录成功');
    router.push("/admin")
  };

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
};

export default AuthLoginPage;