import { Link } from "#/i18n/navigation"


export const getBlogHref = (href: string) => {
  if (href.startsWith("/")) return `/blog${href}`
  return `/blog/${href}`
}

const BlogLink = ({ href, ...props }: any) => {

  return (
    <Link
      href={getBlogHref(href)}
      {...props}
    />
  )
}
export default BlogLink