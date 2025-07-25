import SEO from '../app/components/SEO';
import Layout from './layout';
export default function Home() {
  return (
    <Layout>
      <SEO title="TeachConAI" description="Teaching con inteligencia artificial" />
      <h1 className="text-4xl font-bold">Welcome to TeachConAI</h1>
      <p className="mt-4">Explore AI tools and resources for bilingual educators.</p>
    </Layout>
  );
}