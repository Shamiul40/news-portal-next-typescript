import Link from "next/link"

import { Button } from "../ui/button"
import { Astroid } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-100 mt-6 px-6 py-8 rounded-md">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* left */}
        <div>
          <h2 className="text-2xl font-bold">Daily News</h2>
          <p className="text-sm text-slate-500 mt-2">
            Building a better digital experience for everyone.
          </p>
        </div>

        {/* middle */}
        <div className="flex gap-6 text-sm text-slate-600">
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Privacy Policy</Link>
        </div>

        {/* right */}
        <div className="flex items-center gap-4">
          <Astroid size={18} />
          <Astroid size={18} />
          <Astroid size={18} />
          
        </div>
      </div>

      <div className="border-t mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © 2024 YourCompany. All rights reserved.
        </p>

        <Button size="sm">Subscribe</Button>
      </div>
    </footer>
  )
}