import { PropsWithChildren } from "react"
import classNames from "classnames"

const BasePage = ({ children, className }: PropsWithChildren<{ className?: string }>) => {

  return (
    <div className={classNames(
      "h-full p-4",
      className
    )}>
      {children}
    </div>
  )
}
export default BasePage