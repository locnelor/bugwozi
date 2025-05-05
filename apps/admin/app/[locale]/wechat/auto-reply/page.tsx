"use client";

import React, { useEffect } from "react";
import {
  Card,
  Input,
  Switch,
  Button,
  Form,
  Space,
  Select,
  message,
  Divider,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { gql, useQuery, useMutation } from "@apollo/client";

const { TextArea } = Input;
const { Option } = Select;

// GraphQL Queries
const GET_WECHAT_CONFIG = gql`
  query GetWechatConfig {
    getWechatConfig
  }
`;

const SET_WECHAT_CONFIG = gql`
  mutation SetWechatConfig($config: String!) {
    setWechatConfig(config: $config)
  }
`;

const WechatAutoReplyPage = () => {
  const [form] = Form.useForm();

  // Apollo hooks
  const { data, loading, refetch } = useQuery(GET_WECHAT_CONFIG);
  const [setWechatConfigMutation, { loading: saving }] = useMutation(SET_WECHAT_CONFIG);

  useEffect(() => {
    if (data?.getWechatConfig) {
      try {
        const parsed = JSON.parse(data.getWechatConfig);
        form.setFieldsValue(parsed);
      } catch {
        message.error("配置解析失败");
      }
    }
  }, [data, form]);

  const onFinish = async (values: any) => {
    try {
      const res = await setWechatConfigMutation({
        variables: { config: JSON.stringify(values) },
      });
      if (res.data.setWechatConfig) {
        message.success("保存成功");
        refetch();
      }
    } catch (err) {
      console.error(err);
      message.error("保存失败");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card title="微信公众号自动回复配置" loading={loading || saving}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="启用自动回复"
            name={["autoReply", "enabled"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item label="默认回复内容" name={["autoReply", "defaultReply"]}>
            <TextArea rows={3} placeholder="请输入默认回复内容" />
          </Form.Item>

          <Divider>关键词回复规则</Divider>

          <Form.List name={["autoReply", "rules"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="start" className="flex w-full mb-4">
                    <Form.Item
                      {...restField}
                      name={[name, "keywords"]}
                      className="flex-1"
                      rules={[{ required: true, message: "请输入关键词" }]}
                    >
                      <Select
                        mode="tags"
                        style={{ width: "100%", minWidth: 200 }}
                        placeholder="多个关键词用回车分隔"
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "matchMode"]}
                      rules={[{ required: true }]}
                    >
                      <Select style={{ width: 120 }}>
                        <Option value="exact">完全匹配</Option>
                        <Option value="contains">包含匹配</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "content"]}
                      className="flex-1"
                      rules={[{ required: true, message: "请输入回复内容" }]}
                    >
                      <TextArea placeholder="请输入回复内容" />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="mt-2"
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加关键词回复
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Divider>关注后回复</Divider>

          <Form.Item
            label="启用关注后回复"
            name={["subscribeReply", "enabled"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="关注后回复内容"
            name={["subscribeReply", "content"]}
          >
            <TextArea rows={3} placeholder="请输入关注后回复内容" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={saving}>
              保存配置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default WechatAutoReplyPage;