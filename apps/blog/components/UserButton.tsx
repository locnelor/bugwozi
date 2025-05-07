import useViewer from "#/hooks/viewer/useViewer"
import { Link } from "#/i18n/navigation"
import { Avatar, Button, Menu, Popover } from "antd"


const UserButton = () => {
    const { viewer } = useViewer()

    if (!viewer) {
        return (
            <Link href="/auth">
                <Button type="dashed">
                    登陆/注册
                </Button>
            </Link>
        )
    }

    const menuItems = [
        {
            key: 'account',
            label: `账号`
        },
        {
            key: 'name',
            label: `名称`
        },
        {
            key: 'role',
            label: `角色`
        }
    ]

    return (

        <div className="flex gap-2 items-center">
            <div>
                {viewer.name}
            </div>
            <Popover
                content={
                    <Menu items={menuItems} />
                }
                title="用户信息"
                trigger="hover"
            >
                <Avatar className="cursor-pointer">{viewer.name[0].toUpperCase()}</Avatar>
            </Popover>
        </div>
    )
}
export default UserButton