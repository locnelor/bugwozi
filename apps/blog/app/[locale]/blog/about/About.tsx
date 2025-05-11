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
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { TeamMember } from "./about";
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {/* About Section */}
        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            About Our Blog
          </Title>

          <Row gutter={24}>
            <Col xs={24} md={16}>
              <Paragraph className="text-lg leading-relaxed">
                Welcome to our tech blog! We're dedicated to sharing knowledge, insights, and tutorials
                on web development, programming, and design. Our goal is to help developers of all skill
                levels stay up-to-date with the latest technologies and best practices.
              </Paragraph>

              <Paragraph className="text-lg leading-relaxed mt-4">
                Whether you're looking to master React, dive into TypeScript, or explore the latest
                in CSS techniques, our team of experienced writers creates content that is both
                informative and practical. We believe in learning by doing, which is why our
                tutorials are hands-on and include real-world examples.
              </Paragraph>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <Title level={4}>Our Mission</Title>
                <Paragraph>
                  To empower developers with high-quality, accessible content that helps them
                  build better applications and advance their careers.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <Card className="h-full">
                <Title level={4}>Quick Facts</Title>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start">
                    <CalendarOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Founded:</strong> June 2021
                    </div>
                  </li>
                  <li className="flex items-start">
                    <TeamOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Team Members:</strong> {teamMembers.length}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileTextOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Articles:</strong> {blogStats.articles}+
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CommentOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Comments:</strong> {blogStats.comments}+
                    </div>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            <TeamOutlined className="mr-2" /> Our Team
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

                  <Paragraph className="mt-4 text-gray-600">
                    {member.bio}
                  </Paragraph>

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
            <HistoryOutlined className="mr-2" /> Our Journey
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
            <MailOutlined className="mr-2" /> Contact Us
          </Title>

          <Row gutter={24}>
            <Col xs={24} md={10}>
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <Title level={4}>Get in Touch</Title>
                <Paragraph>
                  Have a question, suggestion, or want to contribute to our blog?
                  Reach out to us using the contact form or through any of the following channels:
                </Paragraph>

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

            <Col xs={24} md={14}>
              <Card title="Send Us a Message" className="h-full">
                <Suspense fallback={<div>Loading contact form...</div>}>
                  <ContactForm />
                </Suspense>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default About