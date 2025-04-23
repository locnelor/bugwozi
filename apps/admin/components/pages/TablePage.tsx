import { Table } from "antd"
import { ReactNode, useRef } from "react"


interface Props {
  dataSource: any[],
  columns: any[]
  pagination?: ReactNode
}
const TablePage = ({
  dataSource,
  columns,
  pagination
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="h-full w-full">
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{
          y: 'calc(100% - 64px)'
        }}
        pagination={false}
      />
      <div className="flex justify-end absolute bottom-0 left-0 w-full h-16">
        {pagination}
      </div>
    </div>
  )
}
export default TablePage