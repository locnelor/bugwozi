import { ColumnsType } from "antd/es/table"

export const useColumns = (columns: ColumnsType<any>) => {
    return columns.map((item, index) => {
        return {
            width: item.width || (typeof item.title === 'string' ? item.title.length * 20 : 100),
            ...item,
            key: item.key || index,
        }
    })
}

export const useDataSource = (data?: any[]) => {
    return data?.map((item, index) => {
        return {
            ...item,
            key: item.key || item.uid || item.id || index
        }
    })
}

export const timeColumns = [
    {
        title: '创建时间',
        dataIndex: 'createdAt',
        render: (value: string) => new Date(value).toLocaleString(),
    },
    {
        title: '更新时间',
        dataIndex: 'updatedAt',
        render: (value: string) => new Date(value).toLocaleString(),
    },
]