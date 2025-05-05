"use client";

import { useEffect } from 'react';
import React from 'react';

export default function LinkClientJS(): React.ReactNode {
  // 处理链接点击事件，增加点击计数
  useEffect(() => {
    const handleLinkClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest('a[data-link-id]');
      
      if (linkElement) {
        const linkId = linkElement.getAttribute('data-link-id');
        if (linkId) {
          try {
            await fetch(`/api/links/${linkId}/click`, {
              method: 'POST',
              cache: 'no-store'
            });
          } catch (error) {
            console.error('Failed to update click count:', error);
          }
        }
      }
    };

    // 添加事件委托
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // 处理搜索表单
  useEffect(() => {
    // 保持分类参数当提交搜索表单时
    const searchForm = document.querySelector('form') as HTMLFormElement;
    if (searchForm) {
      // 从数据脚本中获取初始分类
      const dataScript = document.getElementById('links-data');
      if (dataScript) {
        try {
          const data = JSON.parse(dataScript.textContent || '{}');
          const { initialCategory } = data;
          
          if (initialCategory && initialCategory !== 'all') {
            // 创建隐藏的分类输入
            const categoryInput = document.createElement('input');
            categoryInput.type = 'hidden';
            categoryInput.name = 'category';
            categoryInput.value = initialCategory;
            searchForm.appendChild(categoryInput);
          }
        } catch (error) {
          console.error('Failed to parse links data:', error);
        }
      }
    }
  }, []);

  return null;
} 