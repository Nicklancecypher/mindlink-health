"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MindLink</h1>
      <p className="text-gray-700 max-w-md mb-6">
        
        MindLink is a safe, anonymous space to share how you're really feeling.  
        No names, no judgment, no pressure.
        
      </p>
      <Link
        href="/checkin"
        className="bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition"
      >
        Start Check-In
      </Link>
      <p className="mt-6 text-gray-500 text-sm">
        
        Participation is voluntary. MindLink is not a therapist or crisis service.
      </p>
    </main>
  );
}
