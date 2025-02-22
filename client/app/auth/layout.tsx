import { LayoutProps } from "@/type";
import { Card } from "antd";

const AuthLayout = async ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card
        className="w-full max-w-xl shadow-md"
        style={{ borderRadius: "8px" }}
      >
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;