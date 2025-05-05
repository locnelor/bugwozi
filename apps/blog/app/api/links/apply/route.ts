import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@pkg/database';

// POST 处理函数，处理友链申请表单提交
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 验证必要字段
    const requiredFields = ['siteName', 'siteUrl', 'siteDescription'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false,
          message: `缺少必填字段: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }
    
    // 验证URL格式
    try {
      new URL(data.siteUrl);
    } catch (e) {
      return NextResponse.json(
        { 
          success: false,
          message: '网站URL格式不正确' 
        },
        { status: 400 }
      );
    }
    
    // 创建友链申请记录
    const link = await prisma.blog_links.create({
      data: {
        name: data.siteName,
        url: data.siteUrl,
        description: `[${data.siteCategory || 'blog'}] ${data.siteDescription}`,
        logo: data.siteLogo || null,
        status: false, // 设置为待审核状态
        sort: 0, // 默认排序值
        clicks: 0
      }
    });
    
    // 可以在这里发送邮件通知管理员审核新的友链申请
    // sendAdminNotification(link.uid, data);
    
    return NextResponse.json({
      success: true,
      message: '友链申请已提交，等待审核。我们会尽快处理您的申请，请耐心等待。'
    });
  } catch (error) {
    console.error('Error submitting link application:', error);
    return NextResponse.json(
      { 
        success: false,
        message: '提交申请失败，请稍后再试' 
      },
      { status: 500 }
    );
  }
} 