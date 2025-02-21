"use client"
import React from "react";
import Link from "next/link";
import useViewer from "@/hooks/viewer/useViewer";

const HomePage = () => {
  const { viewer } = useViewer()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          快速搭建 Next.js 应用
        </h1>
        <p className="text-gray-700 mb-4">
          本项目结合以下核心依赖，快速构建现代 Web 应用：
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>
            <strong>@apollo/client 和 graphql:</strong> 提供高效的 GraphQL 数据管理。
          </li>
          <li>
            <strong>antd:</strong> 集成了丰富的 UI 组件库。
          </li>
          <li>
            <strong>tailwindcss:</strong> 用于快速开发响应式样式。
          </li>
        </ul>
        <div className="flex space-x-4 justify-center">
          <Link href="/auth/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            前往登录
          </Link>
          <Link href="/test" className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            前往测试
          </Link>
        </div>
        <div>
          {viewer?.name}
        </div>
      </div>
    </div>
  );
};

export default HomePage;