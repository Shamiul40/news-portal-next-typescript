import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { NewsItem } from '@/types/news';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const filePath = path.join(process.cwd(), 'public', 'db.json');
  const data = await fs.readFile(filePath, 'utf-8');
  let news: NewsItem[] = JSON.parse(data);

  // Filter by id
  if (id) {
    const item = news.find((n) => n._id === id);
    return NextResponse.json(item ? item : { error: 'Not found' }, { status: item ? 200 : 404 });
  }

  // Filter by category
  if (category) {
    news = news.filter((n) => n.categories && n.categories.includes(category));
  }

  // Filter by search (title, description, snippet)
  if (search) {
    const q = search.toLowerCase();
    news = news.filter((n) =>
      n.title?.toLowerCase().includes(q) ||
      n.description?.toLowerCase().includes(q) ||
      n.snippet?.toLowerCase().includes(q)
    );
  }

  return NextResponse.json(news);
}
