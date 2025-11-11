// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hotel Order System 🏨</h1>
      <Link
        href="/hotels"
        className="text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        View Hotels
      </Link>
    </div>
  );
}
