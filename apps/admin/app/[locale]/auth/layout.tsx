import { AppLayoutProps } from "@pkg/types"

const AuthLayout = async ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl m-4">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout