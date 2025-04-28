"use client";

import { Card, List, Breadcrumb, Tag, Timeline, Button, Typography, Alert } from "antd";
import { 
  NotificationOutlined, 
  HomeOutlined, 
  CalendarOutlined,
  SoundOutlined,
  BellOutlined,
  WarningOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const { Title, Paragraph } = Typography;

interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  type: "info" | "warning" | "success" | "general";
  isNew?: boolean;
}

export default function AnnouncementsPage() {
  // Mock announcements
  const announcements: Announcement[] = [
    { 
      id: "1", 
      title: "Blog Redesign Completed", 
      date: "2023-09-01", 
      content: "We're excited to announce that our blog redesign has been completed! The new design provides a better reading experience and improved navigation. Let us know what you think about the changes!",
      type: "success",
      isNew: true
    },
    { 
      id: "2", 
      title: "Site Maintenance", 
      date: "2023-08-05", 
      content: "The blog will be under maintenance on August 10th from 2-4pm UTC. During this time, the site may be intermittently unavailable. We apologize for any inconvenience this may cause.",
      type: "warning"
    },
    { 
      id: "3", 
      title: "New Comment System", 
      date: "2023-07-25", 
      content: "We've added a new comment system with improved functionality. You can now format your comments using markdown, upload images, and receive notifications when someone replies to your comment.",
      type: "info"
    },
    { 
      id: "4", 
      title: "Monthly Writing Contest", 
      date: "2023-07-10", 
      content: "We're launching a monthly writing contest! Each month, we'll select a theme, and you can submit articles related to that theme. The winning article will be featured on our homepage, and the author will receive a $100 gift card.",
      type: "general"
    },
    { 
      id: "5", 
      title: "Newsletter Launch", 
      date: "2023-06-15", 
      content: "We're launching a weekly newsletter that will include the best articles from our blog, industry news, and exclusive content. Sign up now to receive our first issue!",
      type: "info"
    },
  ];
  
  const [filter, setFilter] = useState<string | null>(null);
  
  // Filter announcements by type if filter is set
  const filteredAnnouncements = filter 
    ? announcements.filter(a => a.type === filter) 
    : announcements;
    
  // Icon mapping for announcement types
  const typeIcons = {
    info: <SoundOutlined />,
    warning: <WarningOutlined />,
    success: <CheckCircleOutlined />,
    general: <BellOutlined />
  };
  
  // Color mapping for announcement types
  const typeColors = {
    info: "blue",
    warning: "orange",
    success: "green",
    general: "purple"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "Announcements" }
          ]}
        />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <Title level={2} style={{ margin: 0 }}>
            <NotificationOutlined className="mr-2" />
            Announcements
          </Title>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              type={filter === null ? "primary" : "default"} 
              onClick={() => setFilter(null)}
            >
              All
            </Button>
            <Button 
              type={filter === "info" ? "primary" : "default"} 
              icon={<SoundOutlined />}
              onClick={() => setFilter("info")}
            >
              Info
            </Button>
            <Button 
              type={filter === "warning" ? "primary" : "default"} 
              icon={<WarningOutlined />}
              onClick={() => setFilter("warning")}
            >
              Warnings
            </Button>
            <Button 
              type={filter === "success" ? "primary" : "default"} 
              icon={<CheckCircleOutlined />}
              onClick={() => setFilter("success")}
            >
              Updates
            </Button>
            <Button 
              type={filter === "general" ? "primary" : "default"} 
              icon={<BellOutlined />}
              onClick={() => setFilter("general")}
            >
              General
            </Button>
          </div>
        </div>
        
        {filteredAnnouncements.length > 0 ? (
          <div className="space-y-6">
            <List
              itemLayout="vertical"
              dataSource={filteredAnnouncements}
              renderItem={(announcement) => {
                // Select the appropriate Alert type based on announcement type
                const alertType = 
                  announcement.type === "warning" ? "warning" :
                  announcement.type === "success" ? "success" :
                  announcement.type === "info" ? "info" : 
                  "info";
                
                return (
                  <List.Item>
                    <Alert
                      type={alertType}
                      showIcon
                      message={
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">{announcement.title}</span>
                            {announcement.isNew && (
                              <Tag color="red">NEW</Tag>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            <CalendarOutlined className="mr-1" /> 
                            {announcement.date}
                          </div>
                        </div>
                      }
                      description={
                        <div className="mt-2">
                          <Paragraph>{announcement.content}</Paragraph>
                        </div>
                      }
                      className="w-full mb-4"
                    />
                  </List.Item>
                );
              }}
            />
            
            <div className="mt-8">
              <Title level={4}>Timeline</Title>
              <Timeline
                mode="left"
                items={filteredAnnouncements.map(announcement => ({
                  label: announcement.date,
                  dot: typeIcons[announcement.type],
                  color: typeColors[announcement.type],
                  children: (
                    <div>
                      <div className="font-semibold">
                        {announcement.title}
                        {announcement.isNew && (
                          <Tag color="red" className="ml-2">NEW</Tag>
                        )}
                      </div>
                      <div className="text-gray-700 mt-1">{announcement.content}</div>
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <NotificationOutlined style={{ fontSize: 48 }} className="text-gray-300" />
            <p className="mt-4 text-gray-500">No announcements found matching the selected filter.</p>
            <Button 
              type="primary" 
              onClick={() => setFilter(null)}
              className="mt-4"
            >
              Show all announcements
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 