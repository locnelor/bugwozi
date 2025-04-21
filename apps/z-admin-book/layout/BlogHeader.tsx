import { useTranslations } from "next-intl"
import Link from "next/link";
import { useMemo } from "react"


const BlogHeader = () => {
  const t = useTranslations("Page");
  const menu = useMemo(() => {
    return [{
      name: t("logo"),
      path: "/"
    }, {
      name: t("archives"),
      path: "/archives"
    }, {
      name: t("tags"),
      path: "/tags"
    }, {
      name: t("categories"),
      path: "/categories"
    }, {
      name: t("links"),
      path: "/links"
    }, {
      name: t("about"),
      path: "/about"
    }]
  }, [t])
  return (
    <div
      className="fixed w-full top-0 left-0 z-50 shadow-md"
    >
      <div className="flex justify-center items-center gap-4 p-5">
        {menu.map(({ name, path }) => {
          return (
            <Link
              key={path}
              href={path}
            >
              <div
              >
                {name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default BlogHeader