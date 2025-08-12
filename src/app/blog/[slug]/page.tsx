import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(blogDir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), 'src/content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) return {};

  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data } = matter(fileContents);
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);

  if (!fs.existsSync(postPath)) return notFound();

  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data } = matter(fileContents);

  const MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-10">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(data.date).toLocaleDateString()} • {data.lang === 'es' ? 'Español' : 'English'}
      </p>
      <MDXContent />
    </article>
  );
}
