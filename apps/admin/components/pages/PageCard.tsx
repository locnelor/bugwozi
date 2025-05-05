import classNames from "classnames"
import { PropsWithChildren } from "react"


const PageCard = ({ children, className, style }: PropsWithChildren<{ className?: string, style?: any }>) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-2xl p-2",
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
export default PageCard