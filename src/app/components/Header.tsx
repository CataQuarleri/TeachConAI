import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold text-blue-700">TeachConAI</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/blog"><a className="text-gray-700 hover:text-blue-500">Blog</a></Link>
          <Link href="/tool"><a className="text-gray-700 hover:text-blue-500">Tool</a></Link>
          <Link href="/about"><a className="text-gray-700 hover:text-blue-500">About</a></Link>
        </nav>
      </div>
    </header>
  );
}