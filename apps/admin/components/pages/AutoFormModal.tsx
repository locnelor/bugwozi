import { Modal, Form, Input, InputNumber, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { FormField } from './AutoPage';
import { useEffect } from 'react';
import FormItem from 'antd/es/form/FormItem';
import Base64Field from './Base64Field';

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
        const { type, name, label, rest, ...itemProps } = field;
        const commonProps = {
            name,
            label,
            ...itemProps
        };

        switch (type) {
            case 'input':
                return <Form.Item {...commonProps}><Input  {...rest} /></Form.Item>;
            case 'number':
                return <Form.Item {...commonProps}><InputNumber {...rest} style={{ width: '100%' }} /></Form.Item>;
            case 'textarea':
                return <Form.Item {...commonProps}><Input.TextArea {...rest} /></Form.Item>;
            case 'select':
                return <Form.Item {...commonProps}><Select {...rest} /></Form.Item>;
            case 'date':
                return <Form.Item {...commonProps}><DatePicker {...rest} style={{ width: '100%' }} /></Form.Item>;
            case 'switch':
                return <Form.Item {...commonProps} valuePropName="checked"><Switch {...rest} /></Form.Item>;
            case 'treeSelect':
                return <Form.Item {...commonProps}><TreeSelect  {...rest} /></Form.Item>;
            case 'treeCheck':
                return <Form.Item {...commonProps}><TreeSelect  {...rest} treeCheckable /></Form.Item>;
            case 'treeRadio':
                return <Form.Item {...commonProps}><TreeSelect  {...rest} treeDefaultExpandAll /></Form.Item>;
            case 'base64':
                return <FormItem {...commonProps}><Base64Field {...rest} /></FormItem>
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