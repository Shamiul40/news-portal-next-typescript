import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/public/assets/microsoft-copilot-7AoGuVvYO_w-unsplash.jpg";
import { NewsItem } from "@/types/news";

type CardProps = {
  news: NewsItem;
};

export default function Card({ news }: CardProps) {
  // console.log(news)
  return (
    <div className="bg-slate-200 my-2 border  rounded-md shadow-md">
      <div className="flex flex-col gap-2 px-4 py-2">
        {/* image */}
        <div>
          <Link href= {`news/${news._id}`}target="_blank">
            <Image
              height={500}
              width={500}
              className="rounded hover:scale-105 transition-all duration-200"
              src={news.imageUrl || heroImg}
              alt={news.title}
            />
          </Link>
        </div>
        {/* content */}
        <div>
          <h4 className="text-sm text-slate-600">{news.categories[0] || "news"}</h4>
          <h1 className="text-xl font-bold py-2">{news.title.substring(0,55)}..</h1>
          <p className="text-slate-500">{news.snippet.substring(0, 70)}..</p>
          <Button className="my-2 w-full">Read More...</Button>
        </div>
      </div>
    </div>
  );
}
