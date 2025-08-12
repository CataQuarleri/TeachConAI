'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-sm text-gray-500">
        &copy; {year && `${year} `}TeachConAI. All rights reserved.
      </p>
      <p className="text-xs text-gray-400">Teaching con inteligencia artificial</p>
    </footer>
  );
}
