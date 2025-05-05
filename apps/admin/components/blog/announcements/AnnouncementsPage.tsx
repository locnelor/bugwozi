"use client"
import { useMutation, DocumentNode } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"
import { useCallback, useMemo } from "react"

interface AnnouncementsPageProps {
  queries: {
    find: DocumentNode
    create: DocumentNode
    update: DocumentNode
    remove: DocumentNode
  }
}

const AnnouncementsPage = ({ queries }: AnnouncementsPageProps) => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: queries.find,
  })

  const [createAnnouncement] = useMutation(queries.create)
  const [updateAnnouncement] = useMutation(queries.update)
  const [removeAnnouncement] = useMutation(queries.remove)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createAnnouncement({
        variables: {
          createAnnouncementInput: {
            title: values.title,
            content: values.content,
            status: values.status,
          }
        }
      })
      message.success('创建公告成功')
      onRefresh()
    } catch (error) {
      message.error('创建公告失败')
      console.error(error)
    }
  }, [createAnnouncement, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateAnnouncement({
        variables: {
          updateAnnouncementInput: {
            uid: values.uid,
            title: values.title,
            content: values.content,
            status: values.status,
          }
        }
      })
      message.success('更新公告成功')
      onRefresh()
    } catch (error) {
      message.error('更新公告失败')
      console.error(error)
    }
  }, [updateAnnouncement, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeAnnouncement({
        variables: {
          uid: values.uid
        }
      })
      message.success('删除公告成功')
      onRefresh()
    } catch (error) {
      message.error('删除公告失败')
      console.error(error)
    }
  }, [removeAnnouncement, onRefresh])

  // 根据查询结果的数据结构推断数据
  const announcementsList = useMemo(() => {
    if (!data || typeof data !== 'object') return { total: 0, data: [] };
    const dataKeys = Object.keys(data);
    if (dataKeys.length === 0) return { total: 0, data: [] };

    const firstKey = dataKeys[0];
    return (data as Record<string, any>)[firstKey] || { total: 0, data: [] };
  }, [data])

  return (
    <AutoPage
      dataSource={announcementsList.data}
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
          title: '内容',
          dataIndex: 'content',
          key: 'content',
          ellipsis: true,
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (status: boolean) => (status ? '显示' : '隐藏'),
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
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建公告',
        fields: [
          {
            type: 'input',
            name: 'title',
            label: '标题',
            required: true
          },
          {
            type: 'textarea',
            name: 'content',
            label: '内容',
            required: true
          },
          {
            type: 'select',
            name: 'status',
            required: true,
            label: '状态',
            rest: {
              options: [
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新公告',
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
                { label: '显示', value: true },
                { label: '隐藏', value: false },
              ]
            }
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除公告',
      }}
      pagination={pagination}
    />
  )
}

export default AnnouncementsPage 