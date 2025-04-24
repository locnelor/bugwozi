import classNames from "classnames"
import { PropsWithChildren } from "react"


const PageCard = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={classNames(
      "bg-white rounded-2xl p-2",
      className
    )}>
      {children}
    </div>
  )
}
export default PageCard