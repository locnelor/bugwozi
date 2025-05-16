"use client";

import {
  Card,
  Typography,
  Row,
  Col,
  List,
  Empty,
} from "antd";
import {
  FolderOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { blog_categories } from "@pkg/database";
import BlogLink from "#/components/BlogLink";
import { getCategoriesCover } from "@pkg/hooks";
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;

interface Props {
  categories: blog_categories[];
  postsCount: number;
}

const Categories = ({ categories, postsCount }: Props) => {
  const t = useTranslations("Categories");

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <Title level={2} className="flex items-center mb-2">
        <FolderOutlined className="mr-2" /> {t("title")}
      </Title>
      <Paragraph className="text-gray-600">
        {t("description")}
      </Paragraph>

      <Row gutter={24} className="mt-6 mb-8">
        <Col span={12} md={4}>
          <Card className="text-center h-full">
            <div className="text-gray-500">{t("stat.categories")}</div>
            <div className="text-xl font-bold">{categories.length}</div>
          </Card>
        </Col>
        <Col span={12} md={4}>
          <Card className="text-center h-full">
            <div className="text-gray-500">{t("stat.articles")}</div>
            <div className="text-xl font-bold">{postsCount}</div>
          </Card>
        </Col>
      </Row>

      {categories.length > 0 ? (
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
          dataSource={categories}
          renderItem={(category) => (
            <List.Item>
              <Card
                hoverable
                className="h-full"
                title={
                  <BlogLink
                    href={`/categories/${category.uid}`}
                    className="text-lg font-semibold hover:text-blue-600"
                  >
                    {category.name}
                  </BlogLink>
                }
                actions={[
                  <BlogLink key="view" href={`/categories/${category.uid}`}>
                    <ReadOutlined /> {t("viewArticles")}
                  </BlogLink>,
                ]}
              >
                <img
                  src={getCategoriesCover(category.uid)}
                  alt="cover"
                  className="w-full h-40 object-cover rounded mb-4 shadow-sm"
                />
                <Paragraph
                  ellipsis={{ rows: 2 }}
                  className="text-gray-600 min-h-[48px]"
                >
                  {category.description || t("noDescription")}
                </Paragraph>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <Empty
          description={t("empty")}
          image={<FolderOutlined style={{ fontSize: 48, color: "#d9d9d9" }} />}
          className="py-12"
        />
      )}
    </div>
  );
};

export default Categories;