import React from 'react';
export function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy-dark mb-6">
        Blog
      </h1>
      <p className="text-xl text-gray-body leading-relaxed max-w-2xl">
        Thoughts on content strategy, organic growth, and building trust at
        scale.
      </p>
      <div className="mt-12 p-8 border border-gray-divider border-dashed rounded-xl bg-gray-50 w-full max-w-2xl">
        <p className="text-gray-light font-medium">Articles coming soon.</p>
      </div>
    </main>);

}