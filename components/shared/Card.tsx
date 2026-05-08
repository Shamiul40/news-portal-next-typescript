import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/public/assets/microsoft-copilot-7AoGuVvYO_w-unsplash.jpg";

export default function Card() {
  return (
    <div className="bg-slate-200 my-12 border  rounded-md shadow-md">
      <div className="flex flex-col gap-2 px-4 py-2">
        {/* image */}
        <div>
          <Link href="/news/image">
            <Image
              height={500}
              width={500}
              className=" rounded  hover:scale-104 transition-all  duration-200"
              src={heroImg}
              alt="banner Image"
            />
          </Link>
        </div>
        {/* content */}
        <div>
          <h4 className="text-sm text-slate-600">Editorial</h4>
          <h1 className="text-2xl  font-bold py-2">
            Address learning gaps at primary level
          </h1>
          <p>
            study on ​democracy published on Friday showed, as US President
            Donald Trumps policies continue ‌to severely strain the NATO
            alliance. Global perceptions of the US have deteriorated for a
            second
          </p>
          <Button className="my-2 w-full">Read More...</Button>
        </div>
      </div>
    </div>
  );
}
