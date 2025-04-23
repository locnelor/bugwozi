import { PropsWithChildren, ReactNode } from "react"
import BasePage from "./BasePage"
import PageCard from "./PageCard"
interface PageProps extends PropsWithChildren {
  header?: ReactNode
  headerClassName?: string
  side?: ReactNode
  sideClassName?: string
}
const Page = ({
  children,
  header,
  side,
  headerClassName,
  sideClassName
}: PageProps) => {
  return (
    <BasePage>
      <div className="flex gap-4 flex-col h-full">
        {!!header && <PageCard className={headerClassName}>{header}</PageCard>}
        <div className="flex gap-4">
          {!!side && <PageCard className={sideClassName}>{side}</PageCard>}
          <PageCard>{children}</PageCard>
        </div>
      </div>
    </BasePage>
  )
}
export default Page