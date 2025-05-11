"use client"
import { FindTagsQuery, CreateTagMutation, UpdateTagMutation, RemoveTagMutation } from "@pkg/types"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { timeColumns } from "#/hooks/useTable"

const TagsPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindTagsQuery,
  })

  const [createTag] = useMutation(CreateTagMutation)
  const [updateTag] = useMutation(UpdateTagMutation)
  const [removeTag] = useMutation(RemoveTagMutation)

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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removeTag, onRefresh])

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
        name: '更新标签',
        fields: [
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
        name: '删除标签',
      }}
      pagination={pagination}
    />
  )
}

export default TagsPage 