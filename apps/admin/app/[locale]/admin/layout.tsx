import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import LayoutSider from './LayoutSider';
import { getViewer } from '#/hooks/viewer/getViewer';
import { redirect } from 'next/navigation';



const AdminLayout = async ({ children }: PropsWithChildren) => {
  const { data, error } = await getViewer();
  if (!!error) {
    redirect("/auth/login")
  }
  console.log(data, error)
  return (
    <div>
      {children}
    </div>
  )
};

export default AdminLayout;