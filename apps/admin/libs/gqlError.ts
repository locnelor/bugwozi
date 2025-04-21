import { message } from "antd"

const gqlError = (err: any) => {
  console.log(`gqlError`, err)
  message.error(err.message)
}
export default gqlError