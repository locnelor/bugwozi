"use client"
import {
  FindCommentsQuery,
  UpdateCommentMutation,
  RemoveCommentMutation
} from "@pkg/types"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { useCallback } from "react"
import { timeColumns } from "#/hooks/useTable"

const CommentsPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindCommentsQuery,
  })

  const [updateComment] = useMutation(UpdateCommentMutation)
  const [removeComment] = useMutation(RemoveCommentMutation)

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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
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
            required: true
          },
          {
            type: 'select',
            name: 'status',
            label: '状态',
            rest: {
              options: [
                { label: '已审核', value: true },
                { label: '待审核', value: false },
              ]
            },
            required: true
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