import Link from "next/link";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="space-x-3">
        <Link href="/news/sports">Sports</Link>
        <Link href="/news/health">Health</Link>
      </div>
      {children}
    </div>
  );
}
