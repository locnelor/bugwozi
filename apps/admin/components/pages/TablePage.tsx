import { Table } from "antd"
import { ReactNode, useRef } from "react"


interface Props {
  dataSource: any[]
  columns: any[]
  pagination?: ReactNode
  loading?: boolean
}
const TablePage = ({
  dataSource,
  columns,
  pagination,
  loading
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      className="h-full w-full"
    >
      <Table
        dataSource={dataSource}
        loading={loading}
        columns={columns}
        scroll={{
          y: '60vh',
          x: 100
        }}
        pagination={false}
      />
      <div className="flex pr-4 z-10 bg-white items-center justify-end absolute bottom-0 left-0 w-full h-16">
        {pagination}
      </div>
    </div>
  )
}
export default TablePage