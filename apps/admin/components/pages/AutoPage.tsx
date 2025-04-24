import { DocumentType } from "@apollo/client";
import Page from "./Page";
import PageCard from "./PageCard";
import TablePage from "./TablePage";
import { ReactNode, useState } from "react";
import { useColumns } from "#/hooks/useTable";
import { Button, Space, message, Form, Input, InputNumber, Select, DatePicker, Switch, TreeSelect } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AutoFormModal from "./AutoFormModal";

export type FieldType = "input" | "number" | "textarea" | "select" | "date" | "switch" | "treeSelect" | "treeCheck" | "treeRadio"
export interface FormField {
    type: FieldType;
    name: string;
    label: string;
    rest?: any
}

interface AutoPageProps {
    dataSource: any[];
    columns: any[];
    loading: boolean;
    search?: {
        onSubmit: (variables: any) => any;
        fields: FormField[]
    },
    create?: {
        onSubmit: (variables: any) => any;
        name: string;
        fields: FormField[]
        variables?: any
    };
    update?: {
        onSubmit: (variables: any) => any;
        name: string;
        fields: FormField[]
        variables?: any
    };
    remove?: {
        onSubmit: (variables: any) => any;
        name: string;
        variables?: any
    };
    pagination?: ReactNode,
    operation?: (record: any) => ReactNode,
    sider?: ReactNode
}

const AutoPage = ({
    dataSource,
    columns,
    loading,
    create,
    update,
    remove,
    search,
    pagination,
    operation,
    sider
}: AutoPageProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [searchForm] = Form.useForm();

    const handleCreate = () => {
        setEditingRecord(null);
        setIsModalVisible(true);
    };

    const handleEdit = (record: any) => {
        setEditingRecord(record);
        setIsModalVisible(true);
    };

    const handleDelete = async (record: any) => {
        try {
            if (remove) {
                await remove.onSubmit({ ...remove.variables, id: record.id });
                message.success('删除成功');
            }
        } catch (error) {
            message.error('删除失败');
        }
    };

    const handleModalOk = async (values: any) => {
        try {
            if (editingRecord && update) {
                await update.onSubmit({ ...editingRecord, ...update.variables, ...values });
                message.success('更新成功');
            } else if (create) {
                await create.onSubmit({ ...create.variables, ...values });
                message.success('创建成功');
            }
            setIsModalVisible(false);
        } catch (error) {
            message.error('操作失败');
        }
    };

    const handleSearch = async (values: any) => {
        try {
            if (search) {
                await search.onSubmit(values);
            }
        } catch (error) {
            message.error('搜索失败');
        }
    };

    const col = useColumns([
        ...columns,
        {
            title: "操作",
            render: (_, record) => {
                return (
                    <Space>
                        {!!operation && operation(record)}
                        {update && (
                            <Button
                                type="link"
                                icon={<EditOutlined />}
                                onClick={() => handleEdit(record)}
                            >
                                编辑
                            </Button>
                        )}
                        {remove && (
                            <Button
                                type="link"
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => handleDelete(record)}
                            >
                                删除
                            </Button>
                        )}
                    </Space>
                )
            }
        }
    ]);

    const header = search && (
        <PageCard>
            <Form
                form={searchForm}
                layout="vertical"
                onFinish={handleSearch}
            >
                {search.fields.map((field) => (
                    <Form.Item
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        {...field.rest}
                    >
                        {field.type === 'input' && <Input />}
                        {field.type === 'number' && <InputNumber style={{ width: '100%' }} />}
                        {field.type === 'textarea' && <Input.TextArea />}
                        {field.type === 'select' && <Select options={field.rest?.options} />}
                        {field.type === 'date' && <DatePicker style={{ width: '100%' }} />}
                        {field.type === 'switch' && <Switch />}
                        {field.type === 'treeSelect' && <TreeSelect treeData={field.rest?.treeData} />}
                        {field.type === 'treeCheck' && <TreeSelect treeData={field.rest?.treeData} treeCheckable />}
                        {field.type === 'treeRadio' && <TreeSelect treeData={field.rest?.treeData} treeDefaultExpandAll />}
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        搜索
                    </Button>
                </Form.Item>
            </Form>
        </PageCard>
    )
    return (
        <Page
            header={header}
        >
            <div className="flex flex-col gap-2 h-full">
                <div className="flex gap-2 flex-1">
                    {sider}
                    <PageCard className="flex-1">
                        <div className="flex justify-end">
                            {create && (
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={handleCreate}
                                    className="mb-4"
                                >
                                    新增
                                </Button>
                            )}
                        </div>
                        <TablePage
                            dataSource={dataSource}
                            columns={col}
                            loading={loading}
                            pagination={pagination}
                        />
                    </PageCard>
                </div>
            </div>
            {(create || update) && (
                <AutoFormModal
                    visible={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    onOk={handleModalOk}
                    title={editingRecord ? '编辑' : '新增'}
                    fields={editingRecord ? (update?.fields || []) : (create?.fields || [])}
                    initialValues={editingRecord}
                />
            )}
        </Page>
    );
};

export default AutoPage;
