"use client"
import { Card, Typography, Avatar, Row, Col, Timeline } from "antd";
import {
  TeamOutlined,
  MailOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  CalendarOutlined,
  PhoneOutlined,
  FileTextOutlined,
  CommentOutlined,
  HistoryOutlined
} from "@ant-design/icons";
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

import React from "react";
import { useTranslations } from "next-intl";
const { Title, Paragraph } = Typography;

const About = ({
  data: [teamMembers, blogHistory, blogStats]
}: {
  data: [TeamMember[], {
    date: string;
    title: string;
    description: string;
  }[], {
    articles: number;
    comments: number;
    categories: number;
    tags: number;
  }]
}) => {
  const t = useTranslations("About");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            {t("aboutTitle")}
          </Title>

          <Row gutter={24}>
            <Col xs={24} md={16}>
              <Paragraph className="text-lg leading-relaxed">
                {t("aboutParagraph1")}
              </Paragraph>

              <Paragraph className="text-lg leading-relaxed mt-4">
                {t("aboutParagraph2")}
              </Paragraph>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <Title level={4}>{t("missionTitle")}</Title>
                <Paragraph>
                  {t("missionContent")}
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <Card className="h-full">
                <Title level={4}>{t("quickFacts")}</Title>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start">
                    <CalendarOutlined className="mt-1 mr-3 text-blue-500" />
                    <div><strong>{t("founded")}</strong>: June 2021</div>
                  </li>
                  <li className="flex items-start">
                    <TeamOutlined className="mt-1 mr-3 text-blue-500" />
                    <div><strong>{t("teamMembers")}</strong>: {teamMembers.length}</div>
                  </li>
                  <li className="flex items-start">
                    <FileTextOutlined className="mt-1 mr-3 text-blue-500" />
                    <div><strong>{t("articles")}</strong>: {blogStats.articles}+</div>
                  </li>
                  <li className="flex items-start">
                    <CommentOutlined className="mt-1 mr-3 text-blue-500" />
                    <div><strong>{t("comments")}</strong>: {blogStats.comments}+</div>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            <TeamOutlined className="mr-2" /> {t("ourTeam")}
          </Title>

          <Row gutter={[24, 24]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card
                  hoverable
                  className="text-center h-full flex flex-col"
                  cover={
                    <div className="pt-6 pb-2 flex justify-center">
                      <Avatar size={100} src={member.avatar} alt={member.name} />
                    </div>
                  }
                >
                  <Card.Meta
                    title={<span className="text-lg">{member.name}</span>}
                    description={<div className="text-blue-500">{member.role}</div>}
                  />
                  <Paragraph className="mt-4 text-gray-600">{member.bio}</Paragraph>
                  <div className="mt-auto pt-4 flex justify-center space-x-3">
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <GithubOutlined className="text-xl hover:text-blue-500 transition-colors" />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined className="text-xl hover:text-blue-500 transition-colors" />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined className="text-xl hover:text-blue-500 transition-colors" />
                      </a>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            <HistoryOutlined className="mr-2" /> {t("ourJourney")}
          </Title>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Timeline
              mode="alternate"
              items={blogHistory.map(item => ({
                children: (
                  <div>
                    <Title level={5}>{item.title}</Title>
                    <p className="text-gray-500">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                )
              }))}
            />
          </div>
        </div>
        <div>
          <Title level={2} className="flex items-center mb-6">
            <MailOutlined className="mr-2" /> {t("contactUs")}
          </Title>

          <Row gutter={24}>
            <Col xs={24} md={10}>
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <Title level={4}>{t("getInTouch")}</Title>
                <Paragraph>{t("contactIntro")}</Paragraph>

                <ul className="space-y-4 mt-6">
                  <li className="flex items-center">
                    <MailOutlined className="mr-4 text-xl text-blue-500" />
                    <a href="mailto:contact@techblog.com" className="text-blue-600 hover:text-blue-800">
                      contact@techblog.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <PhoneOutlined className="mr-4 text-xl text-blue-500" />
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-center">
                    <GithubOutlined className="mr-4 text-xl text-blue-500" />
                    <a href="https://github.com/techblog" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      github.com/techblog
                    </a>
                  </li>
                  <li className="flex items-center">
                    <TwitterOutlined className="mr-4 text-xl text-blue-500" />
                    <a href="https://twitter.com/techblog" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      @techblog
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;