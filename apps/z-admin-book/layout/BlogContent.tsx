import { useTranslations } from "next-intl";
import type { PropsWithChildren } from "react";


const Card = ({ children, title }: PropsWithChildren<{ title?: string }>) => {

  return (
    <div className="shadow rounded-2xl mb-3 p-4">
      {!!title && <div className="text-center">{title}</div>}
      {children}
    </div>
  )
}
const BlogContent = ({ children }: PropsWithChildren) => {
  const t = useTranslations("Page")
  return (
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      <div className="pt-20">
        <div className="flex gap-2">
          <div className="w-64">
            <Card>
              <div className="flex justify-center items-center min-h-16">
                icon
              </div>
              <div className="text-center">
                {t("author")}
              </div>
              <div className="flex gap-2 justify-center">
                <div className="flex flex-col gap-2 justify-center">
                  <div>文章</div>
                  <div>11</div>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <div>标签</div>
                  <div>11</div>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <div>分类</div>
                  <div>11</div>
                </div>
              </div>
            </Card>
            <Card title="公告">
              这里是公告.html
            </Card>
          </div>
          <div className="grow">
            {children}
          </div>
        </div>
      </div>
    </div >
  )
}
export default BlogContent