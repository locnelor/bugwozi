import { Card, Typography, Avatar, Row, Col, Divider, Space, Timeline, Breadcrumb } from "antd";
import { 
  TeamOutlined, 
  HomeOutlined, 
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
import Link from "next/link";
import { prisma } from "@pkg/database";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const { Title, Paragraph, Text } = Typography;

// Client-side component for the contact form
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

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

// Server-side function to fetch team members from database (if available)
async function getTeamMembers() {
  // In a real app, you would fetch this from the database
  // For now, we're using mock data
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
  
  return teamMembers;
}

// Server-side function to fetch blog history
async function getBlogHistory() {
  // In a real app, this could be stored in the database
  return [
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
}

// Server-side function to fetch blog statistics
async function getBlogStats() {
  try {
    // Get article count
    const articleCount = await prisma.blog_posts.count({
      where: {
        published: true
      }
    });
    
    // Get comment count
    const commentCount = await prisma.blog_comments.count({
      where: {
        status: true
      }
    });
    
    // Get category count
    const categoryCount = await prisma.blog_categories.count();
    
    // Get tag count
    const tagCount = await prisma.blog_tag.count();
    
    return {
      articles: articleCount,
      comments: commentCount,
      categories: categoryCount,
      tags: tagCount
    };
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return {
      articles: 200, // Fallback values if DB query fails
      comments: 1500,
      categories: 12,
      tags: 45
    };
  }
}

export default async function AboutPage() {
  // Fetch data
  const [teamMembers, blogHistory, blogStats] = await Promise.all([
    getTeamMembers(),
    getBlogHistory(),
    getBlogStats()
  ]);

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
        
        {/* Team Section */}
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
        
        {/* History Section */}
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
        
        {/* Contact Section */}
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