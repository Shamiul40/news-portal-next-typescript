
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import bannerImg from "@/public/assets/roman-kraft-_Zua2hyvTBk-unsplash.jpg"

export default function Banner() {
  return (
    <div className="bg-slate-200 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-2">
        {/* image */}
        <div>
          <Image src={bannerImg} alt="banner Image" />
        </div>
        {/* content */}
        <div>
          <h4 className="text-sm text-slate-600">Abroad</h4>
          <h1 className="text-2xl  font-bold py-2">
            Global perceptions of US fall below Russia under Trump, survey finds
          </h1>
          <p>
            Global perceptions of the US have deteriorated for a second
            consecutive year and are now worse than views of Russia, an annual
            study on ​democracy published on Friday showed, as US President
            Donald Trumps policies continue ‌to severely strain the NATO
            alliance. Global perceptions of the US have deteriorated for a second
            consecutive year and are now worse than views of Russia, an annual
            study on ​democracy published on Friday showed, as US President
            Donald Trumps policies continue ‌to severely strain the NATO
            alliance.
          </p>
          <Button className="my-2">Read More...</Button>
        </div>
      </div>
    </div>
  )
}
