'use server';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mt-1">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}