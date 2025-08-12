import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          TeachConAI
        </Link>
        <nav className="space-x-4">
          <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
          <Link href="/tool" className="text-gray-700 hover:text-blue-500">Tool</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        </nav>
      </div>
    </header>
  );
}