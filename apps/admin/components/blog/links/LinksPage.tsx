"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"

interface LinksPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const LinksPage = ({ queries }: LinksPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createLink] = useMutation(queries.create)
  const [updateLink] = useMutation(queries.update)
  const [removeLink] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createLink({
        variables: {
          createLinkInput: {
            name: values.name,
            url: values.url,
            description: values.description,
            status: values.status,
          }
        }
      })
      message.success('创建链接成功')
      onRefresh()
    } catch (error) {
      message.error('创建链接失败')
      console.error(error)
    }
  }, [createLink, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateLink({
        variables: {
          updateLinkInput: {
            uid: values.uid,
            name: values.name,
            url: values.url,
            description: values.description,
            status: values.status,
          }
        }
      })
      message.success('更新链接成功')
      onRefresh()
    } catch (error) {
      message.error('更新链接失败')
      console.error(error)
    }
  }, [updateLink, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeLink({
        variables: {
          uid: values.uid
        }
      })
      message.success('删除链接成功')
      onRefresh()
    } catch (error) {
      message.error('删除链接失败')
      console.error(error)
    }
  }, [removeLink, onRefresh])

  // 根据查询结果的数据结构推断数据
  const linksList = useMemo(() => {
    if (!data || typeof data !== 'object') return { total: 0, data: [] };
    const dataKeys = Object.keys(data);
    if (dataKeys.length === 0) return { total: 0, data: [] };
    
    const firstKey = dataKeys[0];
    return (data as Record<string, any>)[firstKey] || { total: 0, data: [] };
  }, [data])

  return (
    <AutoPage
      dataSource={linksList.data}
      loading={loading}
      columns={[
        {
          title: 'ID',
          dataIndex: 'uid',
          key: 'uid',
          width: 100,
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '链接',
          dataIndex: 'url',
          key: 'url',
          render: (url: string) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          ),
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (status: boolean) => (status ? '显示' : '隐藏'),
        },
        {
          title: '创建时间',
          dataIndex: 'createAt',
          key: 'createAt',
          render: (value: string) => new Date(value).toLocaleString(),
        },
        {
          title: '更新时间',
          dataIndex: 'updateAt',
          key: 'updateAt',
          render: (value: string) => new Date(value).toLocaleString(),
        },
      ]}
      search={{
        onSubmit: values => onRefresh(values),
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '名称',
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '全部', value: undefined },
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建链接',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '名称',
            rest: { rules: [{ required: true, message: '请输入名称' }] }
          },
          {
            type: 'input',
            name: 'url',
            label: '链接',
            rest: { rules: [{ required: true, message: '请输入链接' }] }
          },
          {
            type: 'textarea',
            name: 'description',
            label: '描述',
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              rules: [{ required: true, message: '请选择状态' }],
              options: [
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新链接',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '名称',
            rest: { rules: [{ required: true, message: '请输入名称' }] }
          },
          {
            type: 'input',
            name: 'url',
            label: '链接',
            rest: { rules: [{ required: true, message: '请输入链接' }] }
          },
          {
            type: 'textarea',
            name: 'description',
            label: '描述',
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              rules: [{ required: true, message: '请选择状态' }],
              options: [
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除链接',
      }}
      pagination={pagination}
    />
  )
}

export default LinksPage 