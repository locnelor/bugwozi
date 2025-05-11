"use client"
import { FindCategoriesQuery, CreateCategoryMutation, UpdateCategoryMutation, RemoveCategoryMutation } from "@pkg/types"
import { useMutation } from "@apollo/client"
import { DEFAULT_CATEGORIES_COVER, usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { timeColumns } from "#/hooks/useTable"
import UploadDefaultCover from "#/components/UploadDefaultCover"

const CategoriesPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindCategoriesQuery
  })

  const [createCategory] = useMutation(CreateCategoryMutation)
  const [updateCategory] = useMutation(UpdateCategoryMutation)
  const [removeCategory] = useMutation(RemoveCategoryMutation)

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
      headerChildren={<UploadDefaultCover
        defaultCover={DEFAULT_CATEGORIES_COVER}
        name="updateCategoriesCover"
      />}
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
            label: "封面",
            rest: {
              maxWidth: 400
            }
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