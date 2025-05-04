"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"
import { timeColumns } from "#/hooks/useTable"

interface CommentsPageProps {
  queries: {
    find: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const CommentsPage = ({ queries }: CommentsPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [updateComment] = useMutation(queries.update)
  const [removeComment] = useMutation(queries.remove)

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

  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
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
        ...timeColumns
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