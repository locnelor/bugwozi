"use client"
import { useLocale } from "next-intl"
import { Link } from "#/i18n/navigation";


const LocalPage = () => {
  const locale = useLocale();
  
  return (
    <div>
      <div>当前locale = {locale}</div>
      <div className="flex gap-10">
        <Link href="/" locale="en" className="cursor-pointer hover:text-blue-500">英语</Link>
        <Link href="/" locale="zh" className="cursor-pointer hover:text-blue-500">中文</Link>
      </div>
    </div>
  )
}
export default LocalPage