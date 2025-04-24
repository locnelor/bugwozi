"use client"
import { BaseUFields } from "#/libs/fields"
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client"
import { FindAllMenuQuery } from "../menu/page"
import { Button, Card, Form, Input, message, Modal, Space, Table, Tree } from "antd"
import { useEffect, useMemo, useState } from "react"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { array2tree } from "#/libs/utils"
import gqlError from "#/libs/gqlError"
import Page from "#/components/pages/Page"
import TablePage from "#/components/pages/TablePage"
import { useColumns, useDataSource } from "#/hooks/useTable"

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
    const { data: rolesData, loading } = useQuery(RolesQuery);


    const dataSource = useDataSource(rolesData?.roles);
    const columns = useColumns([{
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
    },])
    return (
        <Page>
            <TablePage
                dataSource={dataSource}
                columns={columns}
                loading={loading}
            ></TablePage>
        </Page>
    )
}

export default SystemRolePage