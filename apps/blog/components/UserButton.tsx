"use client"
import useViewer from "#/hooks/viewer/useViewer"
import { Link, useRouter } from "#/i18n/navigation"
import { Avatar, Button, Menu, Popover } from "antd"
import { useCallback, useMemo } from "react"
import BlogLink, { getBlogHref } from "./BlogLink"
import { setCookie } from "#/libs/cookie"


const UserButton = () => {
    const { viewer } = useViewer()
    const router = useRouter()

    const onClick = useCallback(({ key }: any) => {
        if (key === "/auth/logout") {
            setCookie("token", "");
            router.push("/auth")
            return;
        }
        router.push({
            pathname: getBlogHref(key)
        })
    }, [])
    const menuItems = useMemo(() => {
        return [
            {
                key: '/creator',
                label: `发布`
            },
            {
                key: '/home',
                label: `个人中心`
            },
            {
                key: '/auth/logout',
                label: `退出登录`
            }
        ]
    }, [])
    if (!viewer) {
        return (
            <Link href="/auth">
                <Button type="dashed">
                    登陆/注册
                </Button>
            </Link>
        )
    }
    return (

        <div className="flex gap-2 items-center">
            <div>
                {viewer.name}
            </div>
            <Popover
                content={
                    <Menu onClick={onClick} items={menuItems} />
                }
                trigger="hover"
            >
                <Avatar className="cursor-pointer">{viewer.name[0].toUpperCase()}</Avatar>
            </Popover>
        </div>
    )
}
export default UserButton