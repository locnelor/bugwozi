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
    <BasePage style={{
      height: `calc(100% - 64px)`
    }}>
      <div className="flex gap-4 flex-col h-full">
        {!!header && <PageCard className={headerClassName}>{header}</PageCard>}
        <div className="flex gap-4 w-full grow">
          {!!side && <PageCard className={sideClassName}>{side}</PageCard>}
          <PageCard className="h-full flex-1 w-full">{children}</PageCard>
        </div>
      </div>
    </BasePage>
  )
}
export default Page