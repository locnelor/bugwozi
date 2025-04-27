"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo, useEffect } from "react"

interface TagsPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const TagsPage = ({ queries }: TagsPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createTag] = useMutation(queries.create)
  const [updateTag] = useMutation(queries.update)
  const [removeTag] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createTag({
        variables: {
          createTagInput: {
            name: values.name,
            description: values.description,
          }
        }
      })
      message.success('创建标签成功')
      onRefresh()
    } catch (error) {
      message.error('创建标签失败')
      console.error(error)
    }
  }, [createTag, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateTag({
        variables: {
          updateTagInput: {
            uid: values.uid,
            name: values.name,
            description: values.description,
          }
        }
      })
      message.success('更新标签成功')
      onRefresh()
    } catch (error) {
      message.error('更新标签失败')
      console.error(error)
    }
  }, [updateTag, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeTag({
        variables: {
          uid: values.uid
        }
      })
      message.success('删除标签成功')
      onRefresh()
    } catch (error) {
      message.error('删除标签失败')
      console.error(error)
    }
  }, [removeTag, onRefresh])

  // 根据查询结果的数据结构推断数据
  const tagsList = useMemo(() => {
    if (!data || typeof data !== 'object') return { total: 0, data: [] };
    // 假设响应中包含tags字段
    const dataKeys = Object.keys(data);
    if (dataKeys.length === 0) return { total: 0, data: [] };
    
    // 获取第一个键（可能是tags）
    const firstKey = dataKeys[0];
    return (data as Record<string, any>)[firstKey] || { total: 0, data: [] };
  }, [data])

  return (
    <AutoPage
      dataSource={tagsList.data}
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
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建标签',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '名称',
            rest: { rules: [{ required: true, message: '请输入名称' }] }
          },
          {
            type: 'textarea',
            name: 'description',
            label: '描述',
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新标签',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '名称',
            rest: { rules: [{ required: true, message: '请输入名称' }] }
          },
          {
            type: 'textarea',
            name: 'description',
            label: '描述',
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除标签',
      }}
      pagination={pagination}
    />
  )
}

export default TagsPage 