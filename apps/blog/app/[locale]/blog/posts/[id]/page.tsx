import { AppPageProps } from '@pkg/types';
import Posts from './Posts';
import { prisma } from '@pkg/database';
import OmsViewMarkdown from '#/components/Markdown';
import { notFound } from 'next/navigation';


const ArticlePage = async (props: AppPageProps) => {
  const params = await props.params
  const uid = params.id;
  const posts = await prisma.blog_posts.findUnique({
    where: {
      uid
    },
    include: {
      user: true,
      tags: {
        include: {
          tag: true
        }
      },
      categories: true,
      _count: {
        select: {
          comments: true
        }
      }
    }
  })
  if (!posts) notFound()

  return (
    <Posts
      title={posts.title}
      views={posts.views}
      likes={posts.likes}
      createdAt={posts.createdAt}
      uid={posts.uid}
      posts={posts}
      user={posts.user}
      tags={posts.tags.map(e => e.tag)}
      categories={posts.categories}
      commentTotal={posts._count.comments}
    >
      <OmsViewMarkdown
        textContent={posts.content}
      />
    </Posts>
  )
}
export default ArticlePage;