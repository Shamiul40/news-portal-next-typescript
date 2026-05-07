import Link from "next/link";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="space-x-3 py-8">
        <Link href="/news/sports">Sports</Link>
        <Link href="/news/health">Health</Link>
        <Link href="/news/tech">Technology</Link>
      </div>
      <div className="flex justify-between mx-auto">
        <div className="flex justify-center items-center w-8/12 h-48 bg-gray-300">
            {children}
        </div> 
        <div className="flex justify-center items-center w-4/12 h-48 bg-green-200">
            <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
}
