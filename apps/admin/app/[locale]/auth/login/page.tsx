"use client"
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Divider, Space, Spin } from 'antd';
import { useRouter } from '#/i18n/navigation';
import { useTranslations } from 'next-intl';
import { gql, useMutation, useQuery } from '@apollo/client';
import gqlError from '#/libs/gqlError';
import { setCookie } from '#/libs/cookie';
import useViewer from "#/hooks/viewer/useViewer";
import axios from 'axios';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';

const HasWebsiteInitQuery = gql`
  query HasWebsiteInit{
    hasWebsiteInit
  }
`

const AuthAccountLogin = gql`
  mutation AuthAccountLogin(
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

const GetQrCodeMutation = gql`
  mutation GetQrCode{
    getQrCode{
      base64
      uuid
    }
  }
`
const ScanQrCodeMutation = gql`
  mutation Scan($uuid:String!){
    scan(uuid:$uuid){
      access_token
    }
  }
`
const AuthLoginPage = () => {
  const [isWechatModalVisible, setIsWechatModalVisible] = useState(false);
  const [getQrCode, { data: QrCode, loading: QrCodeLoading }] = useMutation(GetQrCodeMutation)
  const [ScanQrCode] = useMutation(ScanQrCodeMutation, {
    onCompleted({ scan }) {
      if (!scan) return;
      setCookie("token", scan.access_token)
      window.location.href = "/dashboard"
    },
  })
  useEffect(() => {
    if (!QrCode) return;
    const time = setInterval(() => {
      ScanQrCode({
        variables: {
          uuid: QrCode.getQrCode.uuid
        }
      })
    }, 2000)
    return () => clearInterval(time);
  }, [QrCode])

  const { data } = useQuery(HasWebsiteInitQuery, {
    fetchPolicy: "no-cache"
  })
  useViewer()
  const [auth] = useMutation(AuthAccountLogin, {
    onCompleted: ({ authAccountLogin }) => {
      setCookie("token", authAccountLogin.access_token)
      window.location.href = "/dashboard"
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
  const t = useTranslations('auth')

  const handleSubmit = (variables: any) => {
    auth({
      variables
    })
  };

  const showWechatModal = async () => {
    setIsWechatModalVisible(true);
    getQrCode()
  };

  const handleGiteeLogin = () => {
    // 实现Gitee登录逻辑
    console.log('Gitee登录');
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

        <Divider>其他登录方式</Divider>

        <div className="flex justify-center space-x-4">
          <Button icon={<WechatOutlined />} onClick={showWechatModal}>
            微信登录
          </Button>
          <Button icon={<GithubOutlined />} onClick={handleGiteeLogin}>
            Gitee登录
          </Button>
        </div>
      </Form>

      <Modal
        title="微信扫码登录"
        open={isWechatModalVisible}
        onCancel={() => setIsWechatModalVisible(false)}
        footer={null}
      >
        <div className="flex justify-center">
          {QrCodeLoading && <Spin ><div className='w-96 h-96' /></Spin>}
          {!QrCodeLoading && !!QrCode && <img src={QrCode.getQrCode.base64} />}
          {/* <img src={`https://api.bugwozi.top/auth/getQrCode?s=${Date.now()}`} alt="微信登录二维码" style={{ width: 200 }} /> */}
        </div>
      </Modal>
    </div>
  )
};

export default AuthLoginPage;