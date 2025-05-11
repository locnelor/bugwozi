
import { prisma } from '@pkg/database';
import Tags from './Tags';

const TagsPage = async () => {
  const tags = await prisma.blog_tag.findMany({
    orderBy: { name: 'asc' },
  });
  return <Tags
    tags={tags}
  />
};

export default TagsPage;