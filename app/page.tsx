"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      {/* Logo / Hero */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl">
          ML
        </div>
        <h1 className="text-4xl font-bold text-black text-center">
          MindLink
        </h1>
        <p className="max-w-xl text-center text-gray-700">
          Anonymous, pre-crisis support for students dealing with stress, burnout, or emotional overload.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col space-y-4 w-full max-w-sm">
        <Link
          href="/welcome"
          className="bg-black text-white py-3 rounded-xl text-center hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
        <Link
          href="/about"
          className="border border-black py-3 rounded-xl text-center hover:bg-black hover:text-white transition"
        >
          Learn More
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} MindLink — Privacy-first mental health support for students
      </footer>
    </main>
  );
}

