import { AppLayoutProps } from "@pkg/types"

const AuthLayout = async ({ children }: AppLayoutProps) => {
  return (
    <div className="w-full flex pt-20 items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl m-4">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout