import { getViewer } from "#/hooks/viewer/getViewer"
import { prisma } from "@pkg/database";
import ClientPage from "./ClientPage";

const HomePage = async () => {
  const { viewer } = await getViewer();
  const user = await prisma.sys_user.findUnique({
    where: {
      uid: viewer.uid
    },
    include: {
      _count: {
        select: {
          blog_posts: true,
          blog_comments: true
        }
      }
    }
  });

  const recentPosts = await prisma.blog_posts.findMany({
    where: {
      userId: viewer.uid,
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 5,
    select: {
      uid: true,
      title: true,
      createdAt: true
    }
  });

  const recentComments = await prisma.blog_comments.findMany({
    where: {
      uid: viewer.uid
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 5,
    select: {
      uid: true,
      userId: true,
      content: true,
      createdAt: true,
      post: {
        select: {
          title: true
        }
      }
    }
  });

  return (
    <div className="flex flex-col gap-6 w-full">
      <ClientPage user={user} />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">文章数</h3>
          <p className="text-2xl">{user._count.blog_posts}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">评论数</h3>
          <p className="text-2xl">{user._count.blog_comments}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">最近发布的文章</h3>
          <ul className="space-y-3">
            {recentPosts.map(post => (
              <li key={post.uid} className="border-b pb-2">
                <h4 className="font-medium">{post.title}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">最近的评论</h3>
          <ul className="space-y-3">
            {recentComments.map(comment => (
              <li key={comment.uid} className="border-b pb-2">
                <p className="text-sm">{comment.content}</p>
                <p className="text-xs text-gray-500">
                  评论于: {comment.post.title}
                  <span className="ml-2">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage