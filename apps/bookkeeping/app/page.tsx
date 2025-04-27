'use client';

import { useState } from 'react';
import { Button } from '#/components/ui/button';
import { Card } from '#/components/ui/card';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { toast } from 'sonner';

export default function BookkeepingPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('请选择文件');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/bookkeeping/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('上传失败');
      }

      const data = await response.json();
      setRecords(data.records);
      toast.success('识别成功');
    } catch (error) {
      toast.error('上传失败');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">记账AI</h1>

      <Card className="p-4 mb-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="photo">上传照片</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>
          <Button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full"
          >
            {loading ? '处理中...' : '开始识别'}
          </Button>
        </div>
      </Card>

      {records.length > 0 && (
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">识别结果</h2>
          <div className="space-y-4">
            {records.map((record, index) => (
              <div key={index} className="border p-4 rounded">
                <p>类型: {record.type === 'income' ? '收入' : '支出'}</p>
                <p>金额: ¥{record.amount}</p>
                <p>分类: {record.category}</p>
                {record.description && <p>描述: {record.description}</p>}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
