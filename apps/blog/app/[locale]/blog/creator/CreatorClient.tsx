"use client"

import { useCallback, useState } from "react"
import {
  Input,
  Select,
  Tag,
  Typography,
  Form,
  Upload,
  Button,
  Splitter,
} from "antd"
import { UploadOutlined } from "@ant-design/icons"
import useSelectFile from "#/hooks/useSelectFile"
import OmsViewMarkdown from "#/components/Markdown"
import { gql, useMutation } from "@apollo/client"
import gqlError from "#/libs/gqlError"
import { useRouter } from "#/i18n/navigation"
import { useFileToBase64 } from "@pkg/hooks"

const { TextArea } = Input
const { Title } = Typography
const { Option } = Select

interface Category {
  uid: string
  name: string
}

interface Post {
  uid?: string
  title?: string
  content?: string
  coverUrl?: string
  tags?: string[]
  categoryUid?: string
}

interface Props {
  posts?: Post
  categories: Category[]
}
const CreatePostMutation = gql`
  mutation CreatePost(
    $data:CreatePostInput!
  ){
    createPost(
      createPostInput:$data
    ){
      uid
    }
  }
`
const UpdatePostMutation = gql`
  mutation UpdatePost(
    $data:UpdatePostInput!
  ){
    updatePost(
      updatePostInput:$data
    ){
      uid
    }
  }
`

const CreatorClient = ({ posts = {}, categories }: Props) => {
  const [title, setTitle] = useState(posts.title || "")
  const [content, setContent] = useState(posts.content || "")
  const [tags, setTags] = useState<string[]>(posts.tags || [])
  const [categoriesId, setCategoryUid] = useState(posts.categoryUid || "")
  const [files, selectFile] = useSelectFile()
  const [base64] = useFileToBase64(files[0])

  const [create, { loading: createLoading }] = useMutation(CreatePostMutation)
  const [update, { loading: updateLoading }] = useMutation(UpdatePostMutation)

  const loading = createLoading || updateLoading
  const router = useRouter()

  const publish = useCallback(() => {
    const uid = posts.uid;
    const variables = {
      data: {
        title,
        content,
        tags,
        categoriesId,
        base64,
        uid
      }
    };
    (!!uid ? update : create)({ variables }).then(({ data: { createPost, updatePost } }: any) => {
      const result = createPost || updatePost;
      router.push(`/posts/${result.uid}`)
    }).catch((err) => { gqlError(err) })
  }, [title, content, tags, categoriesId, base64, posts])

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 bg-white rounded-2xl shadow-lg space-y-10">
      <Title level={2} className="!text-center">发布文章</Title>
      <Form layout="vertical" className="space-y-8">
        <Form.Item label="文章封面">
          <Upload
            showUploadList={false}
            beforeUpload={() => false}
            onChange={selectFile}
          >
            <Button icon={<UploadOutlined />}>选择封面</Button>
          </Upload>
          {base64 && (
            <img
              src={base64}
              alt="封面"
              className="mt-4 w-full max-h-96 object-cover rounded-xl border-2"
            />
          )}
        </Form.Item>

        <Form.Item label="文章标题" required>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="请输入文章标题"
            className="rounded-lg h-12 text-lg"
          />
        </Form.Item>

        <Form.Item label="文章内容（Markdown 支持）" required>
          <Splitter
            style={{ height: '700px' }}
            className="border-2 rounded-xl overflow-hidden"
          >
            <div className="p-6 h-full bg-white">
              <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="请输入 Markdown 格式的内容"
                className="h-full resize-none text-base"
                style={{ height: '100%', padding: '1.5rem', lineHeight: 1.6 }}
              />
            </div>

            <div className="p-6 h-full overflow-auto bg-gray-50 prose max-w-none markdown">
              <OmsViewMarkdown
                textContent={content}
              />
            </div>
          </Splitter>
        </Form.Item>

        <Form.Item label="标签">
          <Select
            mode="tags"
            value={tags}
            onChange={setTags}
            placeholder="输入标签后回车"
            className="w-full rounded-lg h-12"
          />
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Tag key={tag} color="blue" className="text-base px-3 py-1">{tag}</Tag>
              ))}
            </div>
          )}
        </Form.Item>

        <Form.Item label="分类" required>
          <Select
            value={categoriesId}
            onChange={setCategoryUid}
            placeholder="请选择分类"
            className="w-full rounded-lg h-12"
          >
            {categories.map((cat) => (
              <Option
                key={cat.uid}
                value={cat.uid}
                className="text-base p-3"
              >
                {cat.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>

      <div className="text-center">
        <Button
          type="primary"
          size="large"
          className="px-16 h-14 text-xl rounded-2xl"
          onClick={publish}
          loading={loading}
        >
          发布文章
        </Button>
      </div>
    </div>
  )
}

export default CreatorClient