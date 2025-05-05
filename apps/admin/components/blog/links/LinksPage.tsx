"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { timeColumns } from "#/hooks/useTable"

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
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [createLink, onRefresh])

  const handleUpdate = useCallback(async (updateLinkInput: any) => {
    try {
      await updateLink({
        variables: {
          updateLinkInput
        }
      })
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removeLink, onRefresh])

  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
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
        ...timeColumns
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
            required: true
          },
          {
            type: 'input',
            name: 'url',
            label: '链接',
            required: true
          },
          {
            type: "number",
            name: "sort",
            label: "排序"
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            },
            required: true
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
            required: true
          },
          {
            type: 'input',
            name: 'url',
            label: '链接',
            required: true
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
              options: [
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            },
            required: true
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