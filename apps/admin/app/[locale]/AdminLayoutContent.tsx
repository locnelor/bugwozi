import { PropsWithChildren } from "react"

const AdminLayoutContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full p-4">
      <div className="h-full overflow-auto bg-white rounded-lg px-4 pt-4">
        {children}
      </div>
    </div>
  )
}
export default AdminLayoutContent