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
import AutoPage from "#/components/pages/AutoPage"

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
                    uid: variables.id
                }
            });
            refetch();
            return true;
        } catch (error) {
            gqlError(error);
            return false;
        }
    };

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
        />
    );
}

export default SystemRolePage