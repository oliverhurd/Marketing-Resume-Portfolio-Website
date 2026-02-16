import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
function ArticleCard({
  title,
  date,
  readTime,
  excerpt,
  tag,
  delay







}: {title: string;date: string;readTime: string;excerpt: string;tag: string;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  return <motion.article ref={ref} initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 20
  }} transition={{
    duration: 0.5,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }} className="group cursor-pointer">
      <div className="pb-8 mb-8 border-b border-surface-border last:border-0">
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-3">
          {tag}
        </p>
        <h3 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-2 group-hover:opacity-60 transition-opacity duration-200">
          {title}
        </h3>
        <p className="text-primary-light leading-relaxed mb-3">{excerpt}</p>
        <p className="text-[13px] text-primary-muted">
          {date} · {readTime}
        </p>
      </div>
    </motion.article>;
}
export function BlogPage() {
  return <PageTransition>
      <main className="editorial-container pt-16 md:pt-24 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mb-16 md:mb-20">
            Thoughts on content, brand, and building in public.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            <ArticleCard title="Why Organic Growth Still Wins" date="Jan 15, 2026" readTime="8 min read" excerpt="Paid acquisition is getting more expensive every quarter. Meanwhile, the brands winning long-term are the ones investing in organic — here's why the math still works." tag="Growth" delay={0} />
            <ArticleCard title="The Trust Deficit in Online Education" date="Dec 28, 2025" readTime="12 min read" excerpt="The online education industry has a trust problem. Scam courses and empty promises have made buyers skeptical of everything — even the good stuff. How do you build in this environment?" tag="Industry" delay={0.1} />
            <ArticleCard title="Building a Brand from Bangkok" date="Nov 10, 2025" readTime="6 min read" excerpt="Running a global content business from Southeast Asia. The timezone advantages, the lifestyle design, and why Bangkok is quietly becoming a hub for digital creators." tag="Personal" delay={0.2} />
          </div>
          <div>
            <ArticleCard title="Content Strategy is Business Strategy" date="Oct 22, 2025" readTime="10 min read" excerpt="Too many companies treat content as a marketing tactic. But the best brands understand that content strategy and business strategy are the same thing — here's the framework." tag="Strategy" delay={0.05} />
            <ArticleCard title="The Newsletter Playbook" date="Sep 14, 2025" readTime="15 min read" excerpt="How I grew a newsletter to 6,500+ subscribers without paid ads. The signup strategy, the content format, and the one metric that matters more than open rate." tag="Playbook" delay={0.15} />
            <ArticleCard title="What YouTube Taught Me About Patience" date="Aug 3, 2025" readTime="7 min read" excerpt="My first 50 videos got almost no views. Then something shifted. The lesson wasn't about algorithms — it was about showing up long enough for compounding to kick in." tag="Lessons" delay={0.25} />
          </div>
        </div>
      </main>
    </PageTransition>;
}