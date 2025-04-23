import { DocumentNode } from "@apollo/client"
import { ReactNode, useMemo } from "react"
import TablePage from "./TablePage"

interface Options {
  update?: {
    query: DocumentNode,
    name: string,
    onFinish?: (data: any) => any
  },
  create?: {
    query: DocumentNode,
    name: string,
    onFinish?: (data: any) => any
  },
  remove?: {
    query: DocumentNode,
    name: string,
    onFinish?: (data: any) => any
  },
  pagination?: ReactNode,
  dataSource: any[],
  columns: any[]
}
const usePage = ({
  dataSource,
  columns,
  pagination,
  update,
  create,
  remove
}: Options) => {

  const selfColumns = useMemo(()=>{
    const operation = {
      title:"操作",
      render:()=>{}
    }
    return [];
  },[columns])
  const content = useMemo(() => {


    return (
      <TablePage
        dataSource={dataSource}
        columns={selfColumns}
        pagination={pagination}
      />
    )
  }, [dataSource, selfColumns, pagination])

}
export default usePage