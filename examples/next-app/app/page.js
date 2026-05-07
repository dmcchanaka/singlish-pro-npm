'use client';

import { useSinglish } from '../hooks/useSinglish';

export default function Home() {
  useSinglish();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24">
      <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Singlish Pro + Next.js</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a React/Next.js implementation using a custom hook. 
          The Singlish engine automatically detects the textarea below.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject (Single Line)</label>
          <input 
            type="text"
            className="w-full p-4 mb-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Subject..."
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Message (Press Ctrl+Shift+S to toggle)</label>
          <textarea 
            className="w-full h-48 p-4 text-xl border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="e.g. kohomada? hodaida?"
          />
        </div>

        <div className="mt-8 text-sm text-gray-400">
          The floating UI should appear at the bottom-right of the screen.
        </div>
      </div>
    </div>
  );
}
