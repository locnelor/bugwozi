"use client";
import { message } from "antd";
import { MessageInstance } from "antd/es/message/interface";
import { createContext, PropsWithChildren, useContext } from "react";

const MsgContext = createContext<{
  messageApi: MessageInstance;
}>({} as any);

export const useMsg = () => {
  return useContext(MsgContext);
};

const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <MsgContext.Provider value={{ messageApi }}>
      {contextHolder}
      {children}
    </MsgContext.Provider>
  );
};

export default MessageProvider;
