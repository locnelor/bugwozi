import { Popconfirm } from "antd"
import { PropsWithChildren, ReactNode } from "react"


type DelPopoverProps = {
  onDelete?: () => void,
  children: ReactNode
}
const DelPopover = ({
  onDelete,
  children
}: PropsWithChildren<DelPopoverProps>) => {
  return (
    <Popconfirm
      title="删除后无法恢复，确定要删除吗？"
      onConfirm={onDelete}
    >
      {children}
    </Popconfirm>
  )
}
export default DelPopover