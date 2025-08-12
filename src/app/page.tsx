'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">
          TeachConAI
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Teaching con inteligencia artificial · Bilingual AI resources for educators
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Read the Blog
          </Link>
          <Link
            href="/resources/prompts"
            className="bg-gray-100 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Explore Prompts
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          What you’ll find on TeachConAI
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🧠 AI Blog</h3>
            <p className="text-gray-600">Read guides, reflections, and stories on using AI in bilingual classrooms.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📚 Prompt Library</h3>
            <p className="text-gray-600">Find ready-to-use prompts for lesson planning, rubrics, and more—English and Español.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🤖 Tools Coming Soon</h3>
            <p className="text-gray-600">Try upcoming AI-powered planners and classroom tools designed for multilingual educators.</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to teach con AI?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our bilingual journey and empower your classroom with AI tools.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Start Learning
        </Link>
      </section>
    </main>
  );
}
