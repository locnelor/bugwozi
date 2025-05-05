import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@pkg/database';

// POST 处理函数，更新特定链接的点击次数
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  // 验证参数
  if (!id) {
    return NextResponse.json(
      { 
        success: false, 
        message: '链接ID不能为空' 
      },
      { status: 400 }
    );
  }

  try {
    // 更新链接点击次数
    const link = await prisma.blog_links.update({
      where: {
        uid: id
      },
      data: {
        clicks: {
          increment: 1
        }
      }
    });

    // 返回更新结果，添加缓存控制头以防止缓存
    return NextResponse.json({ 
      success: true, 
      message: '点击次数更新成功',
      clicks: link.clicks 
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    // 记录错误并返回500状态
    console.error(`Error updating click count for link ${id}:`, error);
    return NextResponse.json(
      { 
        success: false, 
        message: '更新点击次数失败' 
      },
      { status: 500 }
    );
  }
} 