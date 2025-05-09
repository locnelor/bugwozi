"use client"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { DocumentNode } from "@apollo/client"
import { timeColumns } from "#/hooks/useTable"

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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removeCategory, onRefresh])


  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: "封面",
          dataIndex: "uid",
          render: (uid: string) => {
            return (
              <img
                src={`${process.env.NEXT_PUBLIC_BASEURI}/categories/${uid}/cover`}
              />
            )
          }
        },
        ...timeColumns
      ]}
      search={{
        onSubmit: values => {
          console.log(values)
          onRefresh(values)
        },
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
            type: "base64",
            name: "base64",
            label: "封面"
          },
          {
            type: 'input',
            name: 'name',
            label: '名称',
            required: true
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
            type: "base64",
            name: "base64",
            label: "封面"
          },
          {
            type: 'input',
            name: 'name',
            label: '名称',
            required: true
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