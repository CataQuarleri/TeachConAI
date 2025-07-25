export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TeachConAI. All rights reserved.</p>
      <p className="text-xs text-gray-400">Teaching con inteligencia artificial</p>
    </footer>
  );
}