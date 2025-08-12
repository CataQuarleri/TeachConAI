import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TeachConAI',
  description: 'Teaching con inteligencia artificial',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}