import { PropsWithChildren } from "react"
import classNames from "classnames"

const BasePage = ({ children, className, style }: PropsWithChildren<{ className?: string, style?: any }>) => {

  return (
    <div className={classNames(
      "h-full p-4",
      className
    )}
      style={style}
    >
      {children}
    </div>
  )
}
export default BasePage