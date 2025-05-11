import { prisma } from "@pkg/database"
import ClientLink from "./ClientLink"


// 服务端组件
const LinkPage = async () => {
  const links = (await prisma.blog_links.findMany())
    .sort((a, b) => a.sort - b.sort)
    .filter(link => link.status) // 只显示状态为true的链接


  return (
    <ClientLink links={links} />
  )
}

export default LinkPage