import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Newsletter() {
  return (
    <section className="bg-slate-900 text-white rounded-md py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>

      <p className="text-sm text-slate-300 mb-6">
        Subscribe to our newsletter and get the latest updates directly in your
        inbox.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-slate-800 border-slate-600 text-white"
        />

        <Button variant="default">Subscribe</Button>
      </div>
    </section>
  )
}