"use client"
import { BaseUFields } from "#/libs/fields"
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client"
import { FindAllMenuQuery } from "../menu/page"
import { Button, Card, Form, Input, message, Modal, Space, Table, Tree } from "antd"
import { useEffect, useMemo, useState } from "react"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { array2tree } from "#/libs/utils"
import gqlError from "#/libs/gqlError"

export const RolesQuery = gql`
    query Roles{
        roles{
            ${BaseUFields}
            name
        }
    }
`

export const CreateRoleMutation = gql`
    mutation CreateRole($data: CreateRoleInput!) {
        createRole(data: $data) {
            ${BaseUFields}
            name
        }
    }
`

export const UpdateRoleMutation = gql`
    mutation UpdateRole($data: UpdateRoleInput!) {
        updateRole(data: $data) {
            ${BaseUFields}
            name
        }
    }
`

export const DeleteRoleMutation = gql`
    mutation RemoveRole($uid: String!) {
        removeRole(uid: $uid) {
            ${BaseUFields}
        }
    }
`

export const AssignRoleMutation = gql`
    mutation AssignRole($data: AssignRoleInput!) {
        assignRole(data: $data)
    }
`

export const FindMenuOnRolesQuery = gql`
    query FindMenuOnRoles($id: String!) {
        findMenuOnRoles(id: $id) {
            menuId
        }
    }
`

const SystemRolePage = () => {
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [currentRole, setCurrentRole] = useState<any>(null)
    const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>([])

    const { data: rolesData, loading: rolesLoading, refetch } = useQuery(RolesQuery)
    const { data: menuData } = useQuery(FindAllMenuQuery)
    const [refetchMenuOnRole] = useLazyQuery(FindMenuOnRolesQuery)
    const menus = useMemo(() => {
        return array2tree(menuData?.menus || [], {
            parentNodeName: "parentId",
            nodeName: "uid",
            defaultParentId: null
        })
    }, [menuData])

    const [createRole] = useMutation(CreateRoleMutation)
    const [updateRole] = useMutation(UpdateRoleMutation)
    const [deleteRole] = useMutation(DeleteRoleMutation)
    const [assignRole] = useMutation(AssignRoleMutation)

    const handleSubmit = async (values: any) => {
        try {
            if (currentRole) {
                await updateRole({
                    variables: {
                        data: {
                            uid: currentRole.uid,
                            ...values
                        }
                    }
                })
            } else {
                await createRole({
                    variables: {
                        data: values
                    }
                })
            }
            message.success("操作成功")
            setVisible(false)
            refetch()
            form.resetFields()
        } catch (error) {
            gqlError(error)
        }
    }

    const handleDelete = async (record: any) => {
        try {
            await deleteRole({
                variables: {
                    uid: record.uid
                }
            })
            refetch()

            message.success("操作成功")
        } catch (error) {
            gqlError(error)
        }
    }

    const handleAssignMenu = async () => {
        try {
            await assignRole({
                variables: {
                    data: {
                        roleId: currentRole.uid,
                        menuIds: selectedMenuKeys
                    }
                }
            })
            message.success("操作成功")
            setMenuVisible(false)
            refetchMenuOnRole()
        } catch (error) {
            gqlError(error)
        }
    }
    useEffect(() => {
        if (!currentRole) return;
        refetchMenuOnRole({
            variables: {
                id: currentRole.uid
            }
        }).then(({ data: { findMenuOnRoles } }) => {
            setSelectedMenuKeys(findMenuOnRoles?.map((item: any) => item.menuId) || [])
        })
    }, [currentRole])
    const columns = [
        {
            title: '角色名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: any) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setCurrentRole(record)
                            form.setFieldsValue(record)
                            setVisible(true)
                        }}
                    >
                        编辑
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => handleDelete(record)}
                    >
                        删除
                    </Button>
                    <Button
                        onClick={() => {
                            setCurrentRole(record)
                            setMenuVisible(true)
                        }}
                    >
                        分配菜单
                    </Button>
                </Space>
            )
        }
    ]

    return (
        <Card>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                    setCurrentRole(null)
                    form.resetFields()
                    setVisible(true)
                }}
                style={{ marginBottom: 16 }}
            >
                新增角色
            </Button>

            <Table
                columns={columns}
                dataSource={rolesData?.roles}
                loading={rolesLoading}
                rowKey="uid"
                pagination={false}
            />

            <Modal
                title={currentRole ? "编辑角色" : "新增角色"}
                open={visible}
                onOk={form.submit}
                onCancel={() => setVisible(false)}
            >
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        name="name"
                        label="角色名称"
                        rules={[{ required: true, message: '请输入角色名称' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="分配菜单"
                open={menuVisible}
                onOk={handleAssignMenu}
                onCancel={() => setMenuVisible(false)}
                width={600}
            >
                <Tree
                    checkable
                    checkedKeys={selectedMenuKeys}
                    onCheck={(checked: any) => setSelectedMenuKeys(checked)}
                    treeData={menus}
                    fieldNames={{
                        title: 'name',
                        key: 'uid',
                    }}
                />
            </Modal>
        </Card>
    )
}

export default SystemRolePage