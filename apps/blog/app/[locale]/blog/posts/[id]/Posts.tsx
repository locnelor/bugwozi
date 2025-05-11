"use client"
import {
  CalendarOutlined,
  TagOutlined,
  FolderOutlined,
  EyeOutlined,
  LikeOutlined,
  CommentOutlined,
  UserOutlined
} from '@ant-design/icons';
import { formatDate, formatDateTime, getUserAvatar, usePagination } from '@pkg/hooks';
import { Link } from '#/i18n/navigation';
import { useTranslations } from 'next-intl';
import {
  Card,
  Tag,
  Divider,
  Avatar,
  Button,
  Form,
  Input,
  List,
  Typography
} from 'antd';
import { blog_categories, blog_posts, blog_tag, sys_user } from '@pkg/database';
import { PropsWithChildren, useCallback, useMemo } from 'react';
import { CreateCommentMutation, FindCommentsQuery } from '@pkg/types';
import { useMutation } from '@apollo/client';
import useViewer from '#/hooks/viewer/useViewer';




const { TextArea } = Input;
const { Title } = Typography;

interface Props extends PropsWithChildren {
  posts: blog_posts;
  tags: blog_tag[];
  categories: blog_categories;
  user: sys_user
  commentTotal: number
  title: string;
  createdAt: Date;
  views: number;
  likes: number;
  uid: string
}
const Posts = ({
  tags,
  categories,
  user,
  commentTotal,
  children,
  title,
  createdAt,
  views,
  likes,
  uid
}: Props) => {
  const { viewer } = useViewer();
  const t = useTranslations('Posts');
  const [{ data }] = usePagination({
    query: FindCommentsQuery,
    variables: {
      postId: uid
    }
  })
  const [createComment, { data: createData, loading: createLoading }] = useMutation(CreateCommentMutation);
  const [commentForm] = Form.useForm()
  const comments = useMemo(() => {
    if (!!createData) {
      return [{ ...data, user: viewer }, createData.createComment]
    }
    return data
  }, [data, createData])

  const commentFinish = useCallback((data: any) => {
    createComment({
      variables: {
        data: {
          ...data,
          postId: uid
        }
      }
    })
  }, [uid])
  return (
    <div>
      <Card>
        <Title level={1}>{title}</Title>
        <div className="flex flex-wrap items-center text-gray-500 mb-6">
          <div className="flex items-center mr-6">
            <Avatar src={getUserAvatar(user.uid)} icon={<UserOutlined />} />
            <span className="ml-2">{user.name}</span>
          </div>
          <div className="flex items-center mr-6">
            <CalendarOutlined className="mr-1" />
            <span>{formatDate(createdAt)}</span>
          </div>
          <div className="flex items-center mr-6">
            <FolderOutlined className="mr-1" />
            <Link href={`/categories/${categories.uid}`}>
              {categories.name}
            </Link>
          </div>
          <div className="flex items-center mr-6">
            <EyeOutlined className="mr-1" />
            <span>{views} {t('views')}</span>
          </div>
          <div className="flex items-center">
            <CommentOutlined className="mr-1" />
            <span>{commentTotal} {t('comment')}</span>
          </div>
        </div>

        <div className="mb-4">
          <TagOutlined className="mr-2" />
          {tags.map(({ name, uid }) => (
            <Tag key={uid} color="blue" className="mr-2">
              <Link href={`/tag/${uid.toLowerCase()}`}>{name}</Link>
            </Tag>
          ))}
        </div>

        <Divider />

        <div className="prose max-w-none" >
          {children}
        </div>

        <Divider />

        <div className="flex justify-between items-center">
          <Button
            type="primary"
            icon={<LikeOutlined />}
          // onClick={handleLike}
          >
            {t('like')} ({likes})
          </Button>

          <div className="flex space-x-4">
            <Button>
              <Link href="/">{t('backToList')}</Link>
            </Button>
          </div>
        </div>
      </Card>

      <Card title={`${t('comments')} (${commentTotal})`}>
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(comment) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={getUserAvatar(comment.user.uid)} icon={<UserOutlined />} />}
                title={
                  <div className="flex justify-between">
                    <span>{comment.user.name}</span>
                    <span className="text-gray-500 text-sm">{formatDateTime(comment.createdAt)}</span>
                  </div>
                }
                description={comment.content}
              />
            </List.Item>
          )}
        />
      </Card>

      <Card title={t('leaveComment')}>
        <Form
          form={commentForm}
          onFinish={commentFinish}
        >
          <Form.Item
            name="content"
            rules={[{ required: true, message: t('commentRequired') }]}
          >
            <TextArea rows={4} placeholder={t('commentPlaceholder')} />
          </Form.Item>
          <Form.Item>
            <Button loading={createLoading} onClick={commentForm.submit} type="primary" htmlType="submit">
              {t('submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Posts