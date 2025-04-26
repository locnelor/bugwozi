"use client"
import { BaseUFields } from "#/libs/fields"
import { gql, useQuery, useMutation, useLazyQuery, DocumentType } from "@apollo/client"
import { FindAllMenuQuery } from "../menu/page"
import { Button, Card, Form, Input, message, Modal, Space, Table, Tree } from "antd"
import { useEffect, useMemo, useState } from "react"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { array2tree } from "#/libs/utils"
import gqlError from "#/libs/gqlError"
import Page from "#/components/pages/Page"
import TablePage from "#/components/pages/TablePage"
import { useColumns, useDataSource } from "#/hooks/useTable"
import AutoPage, { TableBaseButton } from "#/components/pages/AutoPage"

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
    const { data: menuData } = useQuery(FindAllMenuQuery);
    const { data: rolesData, loading, refetch } = useQuery(RolesQuery);
    const [createRole] = useMutation(CreateRoleMutation);
    const [updateRole] = useMutation(UpdateRoleMutation);
    const [removeRole] = useMutation(DeleteRoleMutation);

    const dataSource = useDataSource(rolesData?.roles);
    const columns = useColumns([{
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
    }]);

    const handleCreate = async (variables: any) => {
        try {
            await createRole({
                variables: {
                    data: {
                        name: variables.name
                    }
                }
            });
            refetch();
            return true;
        } catch (error) {
            gqlError(error);
            return false;
        }
    };

    const handleUpdate = async (variables: any) => {
        try {
            await updateRole({
                variables: {
                    data: {
                        uid: variables.uid,
                        name: variables.name
                    }
                }
            });
            refetch();
            return true;
        } catch (error) {
            gqlError(error);
            return false;
        }
    };

    const handleDelete = async (variables: any) => {
        try {
            await removeRole({
                variables: {
                    uid: variables.uid
                }
            });
            refetch();
            return true;
        } catch (error) {
            gqlError(error);
            return false;
        }
    };

    const menus = useMemo(() => {
        return array2tree(menuData?.menus || [], {
            parentNodeName: "parentId",
            nodeName: "uid",
            defaultParentId: null
        })
    }, [menuData])
    const [currentRole, setCurrentRole] = useState<any>(null)
    const [menuVisible, setMenuVisible] = useState(false)
    const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>([])
    const [refetchMenuOnRole] = useLazyQuery(FindMenuOnRolesQuery, {
        fetchPolicy: "no-cache"
    })
    const [assignRole] = useMutation(AssignRoleMutation)
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
    return (
        <AutoPage
            dataSource={dataSource}
            columns={columns}
            loading={loading}
            create={{
                onSubmit: handleCreate,
                name: "创建角色",
                fields: [
                    {
                        type: "input",
                        name: "name",
                        label: "角色名称",
                        rest: {
                            rules: [{ required: true, message: '请输入角色名称' }]
                        }
                    }
                ]
            }}
            operation={(record: any) => {
                return (
                    <TableBaseButton
                        onClick={() => {
                            setCurrentRole(record)
                            setMenuVisible(true)
                        }}
                    >
                        分配菜单
                    </TableBaseButton>
                )
            }}
            update={{
                onSubmit: handleUpdate,
                name: "编辑角色",
                fields: [
                    {
                        type: "input",
                        name: "name",
                        label: "角色名称",
                        rest: {
                            rules: [{ required: true, message: '请输入角色名称' }]
                        }
                    }
                ]
            }}
            remove={{
                onSubmit: handleDelete,
                name: "删除角色"
            }}
        >
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
        </AutoPage>
    );
}

export default SystemRolePage