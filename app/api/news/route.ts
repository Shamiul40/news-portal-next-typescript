import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'db.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const news = JSON.parse(data);
  return NextResponse.json(news);
}
