"use client"
import { useLocale } from "next-intl"
import { useRouter, } from "next/navigation";


const LocalPage = () => {
  const locale = useLocale();
  const router = useRouter();
  
  return (
    <div>
      <div>当前locale = {locale}</div>
      <div className="flex gap-10">
        <div onClick={() => router.push("/en")}>英语</div>
        <div onClick={() => router.push("/")}>中文</div>
      </div>
    </div>
  )
}
export default LocalPage