import { NextResponse } from 'next/server';
import { prisma } from '@pkg/database';

// GET 处理函数，获取所有状态为true的友情链接
export async function GET() {
  try {
    // 从数据库获取状态为true的友情链接
    const links = await prisma.blog_links.findMany({
      where: {
        status: true
      },
      orderBy: [
        { sort: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    // 返回数据
    return NextResponse.json({
      success: true,
      data: links
    });
  } catch (error) {
    // 记录错误并返回500状态
    console.error('Error fetching links:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: '获取友情链接失败' 
      },
      { status: 500 }
    );
  }
} 