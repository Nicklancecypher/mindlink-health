"use client";

import { useState } from "react";
import CheckInForm from "@/components/checkin/CheckInForm";

export default function CheckInPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Daily Check-In</h1>
      <CheckInForm />
    </main>
  );
}
