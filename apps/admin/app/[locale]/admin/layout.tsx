
import { getPrismaClient } from '#/libs/db';
import React, { PropsWithChildren } from 'react';
import AdminLayoutHeader from '../AdminLayoutHeader';
import AdminLayoutContent from '../AdminLayoutContent';
import AdminLayoutSide from "../AdminLayoutSide"
const AdminLayout = async ({ children }: PropsWithChildren) => {
  const client = getPrismaClient();
  await client.$connect()
  const menus = await client.sys_menu.findMany();

  return (
    <div className="fixed inset-0 flex flex-col w-full bg-gradient-to-bl">
      <div className="flex-none">
        <AdminLayoutHeader />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-none w-64">
          <AdminLayoutSide menus={menus} />
        </div>
        <div className="flex-1 overflow-auto">
          <AdminLayoutContent>
            {children}
          </AdminLayoutContent>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;