"use client"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"
import { DocumentNode } from "graphql"

interface PostsPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const PostsPage = ({ queries }: PostsPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createPost] = useMutation(queries.create)
  const [updatePost] = useMutation(queries.update)
  const [removePost] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createPost({
        variables: {
          createPostInput: {
            title: values.title,
            content: values.content,
            status: values.status,
            userId: values.userId,
            categoriesId: values.categoriesId,
          }
        }
      })
      message.success('创建文章成功')
      onRefresh()
    } catch (error) {
      message.error('创建文章失败')
      console.error(error)
    }
  }, [createPost, onRefresh])

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
      message.success('更新文章成功')
      onRefresh()
    } catch (error) {
      message.error('更新文章失败')
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
      message.success('删除文章成功')
      onRefresh()
    } catch (error) {
      message.error('删除文章失败')
      console.error(error)
    }
  }, [removePost, onRefresh])

  const postList = useMemo(() => data?.posts || { total: 0, data: [] }, [data])

  return (
    <AutoPage
      dataSource={postList.data}
      loading={loading}
      columns={[
        {
          title: 'ID',
          dataIndex: 'uid',
          key: 'uid',
          width: 100,
        },
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
      create={{
        onSubmit: handleCreate,
        name: '创建文章',
        fields: [
          {
            type: 'input',
            name: 'title',
            label: '标题',
            rest: { rules: [{ required: true, message: '请输入标题' }] }
          },
          {
            type: 'textarea',
            name: 'content',
            label: '内容',
            rest: { rules: [{ required: true, message: '请输入内容' }] }
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              rules: [{ required: true, message: '请选择状态' }],
              options: [
                { label: '已发布', value: true },
                { label: '草稿', value: false },
              ]
            }
          },
          {
            type: 'input',
            name: 'userId',
            label: '作者ID',
            rest: { rules: [{ required: true, message: '请输入作者ID' }] }
          },
          {
            type: 'input',
            name: 'categoriesId',
            label: '分类ID',
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新文章',
        fields: [
          {
            type: 'input',
            name: 'title',
            label: '标题',
            rest: { rules: [{ required: true, message: '请输入标题' }] }
          },
          {
            type: 'textarea',
            name: 'content',
            label: '内容',
            rest: { rules: [{ required: true, message: '请输入内容' }] }
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              rules: [{ required: true, message: '请选择状态' }],
              options: [
                { label: '已发布', value: true },
                { label: '草稿', value: false },
              ]
            }
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