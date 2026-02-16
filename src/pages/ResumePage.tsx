import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
function TimelineEntry({
  period,
  title,
  company,
  description,
  delay






}: {period: string;title: string;company: string;description: string;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    x: -20
  }} animate={isInView ? {
    opacity: 1,
    x: 0
  } : {
    opacity: 0,
    x: -20
  }} transition={{
    duration: 0.5,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }} className="relative pl-8 md:pl-10 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />

      <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-2">
        {period}
      </p>
      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-1">
        {title}
      </h3>
      <p className="text-sm font-medium text-primary-light mb-3">{company}</p>
      <p className="text-primary-light leading-relaxed max-w-2xl">
        {description}
      </p>
    </motion.div>;
}
export function ResumePage() {
  return <PageTransition>
      <main className="editorial-container pt-16 md:pt-24 pb-20">
        {/* Header */}
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
            Resume
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mb-16 md:mb-20">
            A decade of building brands, audiences, and businesses.
          </p>
        </motion.div>

        {/* Experience */}
        <section className="mb-20 md:mb-28">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Experience
          </p>

          {/* Timeline line */}
          <div className="relative border-l border-surface-border">
            <TimelineEntry period="2023 – Present" title="Founder & Lead Strategist" company="Braveheart Trading" description="Built an online trading education community from scratch. Grew to profitability through organic content strategy across YouTube, Twitter, and email. Managed all content production, community engagement, and business operations." delay={0} />
            <TimelineEntry period="2021 – 2023" title="Content Strategy Consultant" company="Independent" description="Helped early-stage founders develop content-led growth strategies. Clients across fintech, SaaS, and the creator economy. Focused on sustainable organic growth and audience-first positioning." delay={0.1} />
            <TimelineEntry period="2019 – 2021" title="Brand Strategist" company="Meridian Creative Agency" description="Led brand positioning and content strategy for B2B clients. Developed messaging frameworks and go-to-market narratives. Collaborated with design and product teams to align brand voice across all touchpoints." delay={0.2} />
            <TimelineEntry period="2017 – 2019" title="Content Marketing Manager" company="Elevate Digital" description="Managed content operations, editorial calendar, and distribution strategy. Grew organic traffic 3x in 18 months. Built and trained a team of freelance writers and editors." delay={0.3} />
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20 md:mb-28">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Skills & Expertise
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Content Strategy
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Brand Positioning
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Organic Growth
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Community Building
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Email Marketing
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              YouTube
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Twitter / X
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Copywriting
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Go-to-Market Strategy
            </span>
            <span className="px-4 py-2 bg-surface-alt text-[13px] font-medium text-primary">
              Editorial Planning
            </span>
          </div>
        </section>

        {/* Download */}
        <section>
          <div className="editorial-rule mb-12" />
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-surface text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary/85 transition-colors duration-200">
            <DownloadIcon className="w-4 h-4" />
            Download Full Resume
          </a>
        </section>
      </main>
    </PageTransition>;
}