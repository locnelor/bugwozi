"use client"
import { App, ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const GlobalConfigProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      locale={zhCN}
    >
      <ProgressBar
        shallowRouting
      />
      <App>
        {children}
      </App>
    </ConfigProvider>
  )
}
export default GlobalConfigProvider