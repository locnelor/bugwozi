"use client"
import { useMutation } from "@apollo/client"
import { DEFAULT_POST_COVER, usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { timeColumns } from "#/hooks/useTable"
import UploadDefaultCover from "#/components/UploadDefaultCover"
import { FindPostsQuery, UpdatePostMutation, RemovePostMutation } from "@pkg/types"


const PostsPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindPostsQuery,
  })
  const [updatePost] = useMutation(UpdatePostMutation)
  const [removePost] = useMutation(RemovePostMutation)
  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updatePost({
        variables: {
          updatePostInput: {
            uid: values.uid,
            title: values.title,
            content: values.content,
            status: values.status,
            categoriesId: values.categoriesId,
          }
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [updatePost, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removePost({
        variables: {
          uid: values.uid
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removePost, onRefresh])

  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (status: boolean) => (status ? '已发布' : '草稿'),
        },
        {
          title: '作者',
          dataIndex: ['user', 'name'],
          key: 'user',
        },
        {
          title: '分类',
          dataIndex: ['categories', 'name'],
          key: 'categories',
        },
        ...timeColumns
      ]}
      search={{
        onSubmit: values => onRefresh(values),
        fields: [
          {
            type: 'input',
            name: 'title',
            label: '标题',
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '全部', value: undefined },
                { label: '已发布', value: true },
                { label: '草稿', value: false },
              ]
            }
          },
        ]
      }}
      headerChildren={<UploadDefaultCover
        defaultCover={DEFAULT_POST_COVER}
        name="updatePostCover"
      />}
      update={{
        onSubmit: handleUpdate,
        name: '更新文章',
        fields: [
          {
            type: 'input',
            name: 'title',
            label: '标题',
            required: true
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '已发布', value: true },
                { label: '草稿', value: false },
              ]
            },
            required: true
          },
          {
            type: 'input',
            name: 'categoriesId',
            label: '分类ID',
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除文章',
      }}
      pagination={pagination}
    />
  )
}

export default PostsPage 