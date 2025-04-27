import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const filename = `${uuidv4()}-${file.name}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);

    // Save file
    await writeFile(path, buffer);

    // TODO: Call AI service to analyze the image
    // For now, return mock data
    const mockRecords = [
      {
        type: 'expense',
        amount: 25.50,
        category: '餐饮',
        description: '午餐'
      },
      {
        type: 'income',
        amount: 1000.00,
        category: '工资',
        description: '月薪'
      }
    ];

    return NextResponse.json({ records: mockRecords });
  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json(
      { error: 'Error processing upload' },
      { status: 500 }
    );
  }
} 