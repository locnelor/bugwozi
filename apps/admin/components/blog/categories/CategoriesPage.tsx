"use client"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"
import { DocumentNode } from "@apollo/client"

interface CategoriesPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const CategoriesPage = ({ queries }: CategoriesPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createCategory] = useMutation(queries.create)
  const [updateCategory] = useMutation(queries.update)
  const [removeCategory] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createCategory({
        variables: {
          createCategoryInput: {
            name: values.name,
            description: values.description,
          }
        }
      })
      message.success('创建分类成功')
      onRefresh()
    } catch (error) {
      message.error('创建分类失败')
      console.error(error)
    }
  }, [createCategory, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateCategory({
        variables: {
          updateCategoryInput: {
            uid: values.uid,
            name: values.name,
            description: values.description,
          }
        }
      })
      message.success('更新分类成功')
      onRefresh()
    } catch (error) {
      message.error('更新分类失败')
      console.error(error)
    }
  }, [updateCategory, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeCategory({
        variables: {
          uid: values.uid
        }
      })
      message.success('删除分类成功')
      onRefresh()
    } catch (error) {
      message.error('删除分类失败')
      console.error(error)
    }
  }, [removeCategory, onRefresh])

  const categoriesList = useMemo(() => data?.categories || { total: 0, data: [] }, [data])

  return (
    <AutoPage
      dataSource={categoriesList.data}
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
        name: '创建分类',
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
        name: '更新分类',
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
        name: '删除分类',
      }}
      pagination={pagination}
    />
  )
}

export default CategoriesPage 