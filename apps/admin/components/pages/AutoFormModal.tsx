import { Modal, Form, Input, InputNumber, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { FormField } from './AutoPage';
import { useEffect } from 'react';

interface AutoFormModalProps {
    visible: boolean;
    onCancel: () => void;
    onOk: (values: any) => void;
    title: string;
    fields: FormField[];
    initialValues?: any;
}

const AutoFormModal = ({
    visible,
    onCancel,
    onOk,
    title,
    fields,
    initialValues
}: AutoFormModalProps) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onOk(values);
        } catch (error) {
            // Form validation failed
        }
    };
    useEffect(() => {
        if (!visible) return;
        form.setFieldsValue(initialValues || fields.reduce((acc, k) => ({ ...acc, [k.name]: undefined }), {} as any))
    }, [visible, initialValues])

    const renderFormItem = (field: FormField) => {
        const { type, name, label, rest } = field;
        const commonProps = {
            name,
            label,
            ...rest
        };

        switch (type) {
            case 'input':
                return <Form.Item {...commonProps}><Input /></Form.Item>;
            case 'number':
                return <Form.Item {...commonProps}><InputNumber style={{ width: '100%' }} /></Form.Item>;
            case 'textarea':
                return <Form.Item {...commonProps}><Input.TextArea /></Form.Item>;
            case 'select':
                return <Form.Item {...commonProps}><Select options={rest?.options} /></Form.Item>;
            case 'date':
                return <Form.Item {...commonProps}><DatePicker style={{ width: '100%' }} /></Form.Item>;
            case 'switch':
                return <Form.Item {...commonProps} valuePropName="checked"><Switch /></Form.Item>;
            case 'treeSelect':
                return <Form.Item {...commonProps}><TreeSelect treeData={rest?.treeData} /></Form.Item>;
            case 'treeCheck':
                return <Form.Item {...commonProps}><TreeSelect treeData={rest?.treeData} treeCheckable /></Form.Item>;
            case 'treeRadio':
                return <Form.Item {...commonProps}><TreeSelect treeData={rest?.treeData} treeDefaultExpandAll /></Form.Item>;
            default:
                return null;
        }
    };

    return (
        <Modal
            title={title}
            open={visible}
            onOk={handleOk}
            onCancel={onCancel}
            destroyOnClose
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
            >
                {fields.map((field, index) => (
                    <div key={index}>
                        {renderFormItem(field)}
                    </div>
                ))}
            </Form>
        </Modal>
    );
};

export default AutoFormModal; 