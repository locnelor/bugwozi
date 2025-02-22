import { message } from "antd"
import { MessageInstance } from "antd/es/message/interface";
import { createContext, useContext } from "react";
const MessageContext = createContext<MessageInstance>(message)
export const MessageProviter = MessageContext.Provider
const useMessage = () => {
  const messageApi = useContext(MessageContext)
  return messageApi
}
export default useMessage