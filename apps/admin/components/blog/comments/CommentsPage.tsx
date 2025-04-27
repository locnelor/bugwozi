"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"

interface CommentsPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const CommentsPage = ({ queries }: CommentsPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createComment] = useMutation(queries.create)
  const [updateComment] = useMutation(queries.update)
  const [removeComment] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            content: values.content,
            postId: values.postId,
            userId: values.userId,
            status: values.status,
          }
        }
      })
      message.success('创建评论成功')
      onRefresh()
    } catch (error) {
      message.error('创建评论失败')
      console.error(error)
    }
  }, [createComment, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateComment({
        variables: {
          updateCommentInput: {
            uid: values.uid,
            content: values.content,
            status: values.status,
          }
        }
      })
      message.success('更新评论成功')
      onRefresh()
    } catch (error) {
      message.error('更新评论失败')
      console.error(error)
    }
  }, [updateComment, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeComment({
        variables: {
          uid: values.uid
        }
      })
      message.success('删除评论成功')
      onRefresh()
    } catch (error) {
      message.error('删除评论失败')
      console.error(error)
    }
  }, [removeComment, onRefresh])

  // 根据查询结果的数据结构推断数据
  const commentsList = useMemo(() => {
    if (!data || typeof data !== 'object') return { total: 0, data: [] };
    const dataKeys = Object.keys(data);
    if (dataKeys.length === 0) return { total: 0, data: [] };
    
    const firstKey = dataKeys[0];
    return (data as Record<string, any>)[firstKey] || { total: 0, data: [] };
  }, [data])

  return (
    <AutoPage
      dataSource={commentsList.data}
      loading={loading}
      columns={[
        {
          title: 'ID',
          dataIndex: 'uid',
          key: 'uid',
          width: 100,
        },
        {
          title: '内容',
          dataIndex: 'content',
          key: 'content',
          ellipsis: true,
        },
        {
          title: '文章',
          dataIndex: ['post', 'title'],
          key: 'post',
        },
        {
          title: '用户',
          dataIndex: ['user', 'name'],
          key: 'user',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (status: boolean) => (status ? '已审核' : '待审核'),
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
            name: 'content',
            label: '内容',
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '全部', value: undefined },
                { label: '已审核', value: true },
                { label: '待审核', value: false },
              ]
            }
          },
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建评论',
        fields: [
          {
            type: 'textarea',
            name: 'content',
            label: '内容',
            rest: { rules: [{ required: true, message: '请输入内容' }] }
          },
          {
            type: 'input',
            name: 'postId',
            label: '文章ID',
            rest: { rules: [{ required: true, message: '请输入文章ID' }] }
          },
          {
            type: 'input',
            name: 'userId',
            label: '用户ID',
            rest: { rules: [{ required: true, message: '请输入用户ID' }] }
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              rules: [{ required: true, message: '请选择状态' }],
              options: [
                { label: '已审核', value: true },
                { label: '待审核', value: false },
              ]
            }
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新评论',
        fields: [
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
                { label: '已审核', value: true },
                { label: '待审核', value: false },
              ]
            }
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除评论',
      }}
      pagination={pagination}
    />
  )
}

export default CommentsPage 