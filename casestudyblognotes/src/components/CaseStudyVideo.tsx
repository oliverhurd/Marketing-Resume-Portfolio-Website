import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyVideo() {
  return (
    <section className="py-16 border-t border-gray-100">
      <FadeIn>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          How the Growth System Worked
        </h2>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1a1a2e] mb-3">
            Watch the 8-minute walkthrough
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            In this video, I explain how Braveheart Trading grew to $100K+
            organically through a content-driven acquisition system across
            YouTube, Twitter, and email.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
          <div
            className="relative w-full"
            style={{
              padding: '56.25% 0 0 0'
            }}>

            <iframe
              src="https://www.loom.com/embed/857a5d9b9bc941a0b36d000b5b8b5281?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title="Braveheart Trading Growth System Walkthrough" />

          </div>
        </div>
      </FadeIn>
    </section>);

}