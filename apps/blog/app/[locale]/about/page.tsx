"use client";

import { Card, Typography, Avatar, Row, Col, Divider, Space, Timeline, Breadcrumb, Form, Input, Button, message } from "antd";
import { 
  TeamOutlined, 
  HomeOutlined, 
  MailOutlined, 
  GithubOutlined, 
  TwitterOutlined,
  LinkedinOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MessageOutlined,
  UserOutlined,
  SendOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface TeamMember {
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

export default function AboutPage() {
  const [contactForm] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  
  // Mock team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      bio: "Alex has over 10 years of experience in web development and is passionate about sharing knowledge through writing. He specializes in React and Next.js.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=1",
      socialLinks: {
        github: "https://github.com/alexjohnson",
        twitter: "https://twitter.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson"
      }
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer & Writer",
      bio: "Sarah brings creative design solutions to complex problems. With a background in both design and development, she writes about CSS, design systems, and user experience.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=2",
      socialLinks: {
        github: "https://github.com/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
        linkedin: "https://linkedin.com/in/sarahwilliams"
      }
    },
    {
      name: "David Kim",
      role: "Technical Editor",
      bio: "David ensures all technical content is accurate and up-to-date. His specialties include TypeScript, backend development, and performance optimization.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=3",
      socialLinks: {
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim"
      }
    },
    {
      name: "Emily Chen",
      role: "Content Strategist",
      bio: "Emily oversees the content roadmap and ensures our articles meet the needs of our audience. She has a background in technical writing and marketing.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=4",
      socialLinks: {
        twitter: "https://twitter.com/emilychen",
        linkedin: "https://linkedin.com/in/emilychen"
      }
    }
  ];
  
  // Blog milestones/history
  const blogHistory = [
    {
      date: "June 2021",
      title: "Blog Launch",
      description: "We launched with just 5 articles and a focus on React development."
    },
    {
      date: "December 2021",
      title: "Reached 10,000 Monthly Readers",
      description: "Our audience grew as we expanded into more frontend topics."
    },
    {
      date: "March 2022",
      title: "Added Comment System",
      description: "Implemented a new comment system to foster community engagement."
    },
    {
      date: "August 2022",
      title: "Expanded to Backend Topics",
      description: "Started covering Node.js, databases, and API design."
    },
    {
      date: "January 2023",
      title: "Redesigned Blog",
      description: "Launched a new responsive design with improved navigation and readability."
    },
    {
      date: "April 2023",
      title: "Started Weekly Newsletter",
      description: "Began delivering curated content directly to subscribers' inboxes."
    },
    {
      date: "Present",
      title: "Growing Community",
      description: "Continuing to expand our content library and community features."
    }
  ];
  
  // Handle contact form submission
  const handleContactSubmit = (values: any) => {
    setSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      message.success('Your message has been sent. We\'ll get back to you soon!');
      contactForm.resetFields();
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "About Us" }
          ]}
        />
        
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
                    <UserOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Team Members:</strong> {teamMembers.length}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Articles:</strong> 200+
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Contact:</strong><br />
                      contact@techblog.com<br />
                      +1 (555) 123-4567
                    </div>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
        
        <Divider />
        
        {/* Team Section */}
        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            <TeamOutlined className="mr-2" /> Meet Our Team
          </Title>
          
          <Row gutter={[24, 24]}>
            {teamMembers.map(member => (
              <Col xs={24} sm={12} lg={6} key={member.name}>
                <Card 
                  hoverable 
                  className="text-center h-full"
                  cover={
                    <div className="pt-6 pb-2 flex justify-center">
                      <Avatar 
                        src={member.avatar} 
                        size={100} 
                        icon={<UserOutlined />}
                      />
                    </div>
                  }
                >
                  <Title level={4}>{member.name}</Title>
                  <div className="text-blue-500 font-medium mb-3">{member.role}</div>
                  <Paragraph ellipsis={{ rows: 3 }} className="mb-4">
                    {member.bio}
                  </Paragraph>
                  
                  <Space>
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
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        
        <Divider />
        
        {/* History Section */}
        <div className="mb-12">
          <Title level={2} className="flex items-center mb-6">
            <CalendarOutlined className="mr-2" /> Our Journey
          </Title>
          
          <Timeline
            mode="alternate"
            items={blogHistory.map(item => ({
              children: (
                <div>
                  <Title level={5}>{item.title}</Title>
                  <Text type="secondary">{item.date}</Text>
                  <Paragraph className="mt-2">{item.description}</Paragraph>
                </div>
              )
            }))}
          />
        </div>
        
        <Divider />
        
        {/* Contact Section */}
        <div>
          <Title level={2} className="flex items-center mb-6">
            <MailOutlined className="mr-2" /> Get In Touch
          </Title>
          
          <Row gutter={24}>
            <Col xs={24} lg={12}>
              <Paragraph className="mb-4">
                Have a question, suggestion, or want to contribute to our blog? 
                We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
              </Paragraph>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <Title level={4}>Contact Information</Title>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start">
                    <MailOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Email:</strong><br />
                      contact@techblog.com
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Phone:</strong><br />
                      +1 (555) 123-4567
                    </div>
                  </li>
                  <li className="flex items-start">
                    <HomeOutlined className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <strong>Address:</strong><br />
                      123 Tech Street<br />
                      San Francisco, CA 94107
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <Title level={4}>Follow Us</Title>
                <Space size="large" className="mt-4">
                  <a href="https://github.com/techblog" target="_blank" rel="noopener noreferrer">
                    <GithubOutlined className="text-2xl hover:text-blue-500 transition-colors" />
                  </a>
                  <a href="https://twitter.com/techblog" target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined className="text-2xl hover:text-blue-500 transition-colors" />
                  </a>
                  <a href="https://linkedin.com/company/techblog" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined className="text-2xl hover:text-blue-500 transition-colors" />
                  </a>
                </Space>
              </div>
            </Col>
            
            <Col xs={24} lg={12}>
              <Card title="Contact Form">
                <Form 
                  form={contactForm} 
                  layout="vertical" 
                  onFinish={handleContactSubmit}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item 
                        label="Name" 
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input placeholder="Your name" prefix={<UserOutlined />} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item 
                        label="Email" 
                        name="email"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' }
                        ]}
                      >
                        <Input placeholder="Your email" prefix={<MailOutlined />} />
                      </Form.Item>
                    </Col>
                  </Row>
                  
                  <Form.Item 
                    label="Subject" 
                    name="subject"
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input placeholder="What is this regarding?" />
                  </Form.Item>
                  
                  <Form.Item 
                    label="Message" 
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea 
                      rows={6} 
                      placeholder="Write your message here..." 
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SendOutlined />}
                      loading={submitting}
                      size="large"
                      block
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
} 