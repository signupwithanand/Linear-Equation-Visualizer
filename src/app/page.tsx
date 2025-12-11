import React from 'react';
import { LinearGraph } from '@/components/LinearGraph';
import { Info, Calculator } from 'lucide-react';
import { getEducationalContent } from './actions';

export default async function Home() {
  const content = await getEducationalContent();

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <header className="max-w-4xl w-full mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center justify-center sm:justify-start gap-3">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <span>{content.title}</span>
          </h1>
          <p className="mt-2 text-slate-500 text-sm max-w-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
          <Info className="w-4 h-4" />
          <span>{content.tag}</span>
        </div>
      </header>

      <main className="w-full max-w-4xl">
        <LinearGraph />
      </main>

      <footer className="mt-12 text-center text-slate-400 text-xs">
        <p>Powered by Next.js & Mafs</p>
      </footer>
    </div>
  );
}
