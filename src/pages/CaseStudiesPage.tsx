import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
function CaseStudyCard({
  title,
  description,
  tag,
  href,
  comingSoon,
  delay







}: {title: string;description: string;tag: string;href?: string;comingSoon?: boolean;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  const content = <motion.article ref={ref} initial={{
    opacity: 0,
    y: 24
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 24
  }} transition={{
    duration: 0.5,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }} className={`border border-surface-border p-8 md:p-10 ${!comingSoon ? 'group hover:border-primary/20 transition-colors duration-300' : ''}`}>
      <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-4">
        {tag}
      </p>
      <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-primary-light leading-relaxed mb-6">{description}</p>
      {comingSoon ? <span className="text-[13px] text-primary-muted italic">
          Coming Soon
        </span> : <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:opacity-60 transition-opacity duration-200">
          Read Case Study
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>}
    </motion.article>;
  if (href && !comingSoon) {
    return <Link to={href}>{content}</Link>;
  }
  return content;
}
export function CaseStudiesPage() {
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
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mb-16 md:mb-20">
            Deep dives into the strategy, execution, and results behind the
            work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CaseStudyCard title="Braveheart Trading" description="Building an online trading education community from zero to profitability — entirely through organic content in one of the internet's most oversaturated markets." tag="Community · Organic Growth" href="/case-studies/braveheart-trading" delay={0} />
          <CaseStudyCard title="SaaS Content Engine" description="Designing a content-led acquisition strategy for an early-stage B2B SaaS company — from zero blog traffic to 50K monthly organic visits." tag="B2B SaaS · Content Strategy" comingSoon delay={0.1} />
          <CaseStudyCard title="Creator Brand Launch" description="Helping a creator transition from freelance work to a personal brand with a productized service — positioning, messaging, and launch strategy." tag="Personal Brand · Launch" comingSoon delay={0.2} />
        </div>
      </main>
    </PageTransition>;
}