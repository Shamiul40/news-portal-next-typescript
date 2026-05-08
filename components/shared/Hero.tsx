
import Card from './Card'
import { NewsItem } from '@/types/news'

export default async function Hero() {
  const data = await fetch("http://localhost:3000/api/news")
  const news: NewsItem[] = await data.json()

  return (
    <div className='my-6'>
      <h1 className='text-2xl flex justify-center font-black'>Latest News</h1>
      <div className='grid grid-cols-4 gap-4'>
        {news.map((item) => (
          <Card key={item._id} news={item} />
        ))}
      </div>
    </div>
  )
}
