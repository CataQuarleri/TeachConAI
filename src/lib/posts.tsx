import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title,
      date: data.date,
      description: data.description,
      slug: data.slug,
    };
  });
}
