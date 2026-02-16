import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
function Section({
  children,
  className



}: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 24
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 24
  }} transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }} className={className}>
      {children}
    </motion.div>;
}
export function CaseStudyDetailPage() {
  return <PageTransition>
      <main className="editorial-container pt-16 md:pt-24 pb-20">
        {/* Back link */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.4
      }} className="mb-12">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-primary-light hover:text-primary transition-colors duration-200 group">
            <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            All Case Studies
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }} className="mb-16 md:mb-24">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-4">
            Community · Organic Growth · Education
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.08]">
            Braveheart Trading
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-primary-light italic max-w-2xl">
            Building trust in a trustless market.
          </p>
        </motion.div>

        {/* Results — placed prominently */}
        <Section className="mb-16 md:mb-24">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 mb-8">
            <div>
              <p className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]" style={{
              fontVariantNumeric: 'tabular-nums'
            }}>
                17K+
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                YouTube Subscribers
              </p>
            </div>
            <div>
              <p className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]" style={{
              fontVariantNumeric: 'tabular-nums'
            }}>
                33K+
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Twitter Followers
              </p>
            </div>
            <div>
              <p className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]" style={{
              fontVariantNumeric: 'tabular-nums'
            }}>
                6.5K+
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Newsletter Subscribers
              </p>
            </div>
            <div>
              <p className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]" style={{
              fontVariantNumeric: 'tabular-nums'
            }}>
                $100K+
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Organic Revenue
              </p>
            </div>
          </div>
          <p className="text-primary-light leading-relaxed max-w-3xl">
            All growth was entirely organic. Zero dollars spent on paid
            advertising. Every subscriber, follower, and customer came through
            content — through value delivered before value was ever asked for.
          </p>
          <div className="editorial-rule mt-12" />
        </Section>

        {/* The Challenge */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Challenge
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-6">
            The online trading education space is one of the internet's most
            oversaturated — and most distrusted — markets. It's flooded with
            get-rich-quick promises, rented Lamborghinis, and courses that sell
            dreams but deliver nothing. Scam culture isn't just common; it's the
            default expectation.
          </p>
          <p className="text-lg text-primary-light leading-relaxed">
            The challenge wasn't just building a trading education brand. It was
            building one that people could actually believe in — in a market
            where belief had been systematically destroyed.
          </p>
        </Section>

        {/* The Approach */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Approach
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-10">
            We adopted a content-first strategy built on a simple premise: give
            away so much value that paying becomes a choice, not a gamble. No
            paid ads. No hype. No shortcuts. Just organic content across three
            channels, each serving a distinct purpose.
          </p>

          <div className="space-y-0">
            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                YouTube — Long-Form Education
              </h3>
              <p className="text-primary-light leading-relaxed">
                In-depth market analysis, trading psychology, and educational
                content. No clickbait thumbnails or "I made $10K in a day"
                titles. Just honest, substantive content that demonstrated real
                expertise and built credibility over time.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Twitter — Daily Insights & Community
              </h3>
              <p className="text-primary-light leading-relaxed">
                Real-time market commentary, trading ideas, and transparent
                sharing of both wins and losses. Twitter became the front door —
                where people discovered the brand and started to trust the voice
                behind it.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Newsletter — Deeper Analysis & Trust
              </h3>
              <p className="text-primary-light leading-relaxed">
                Weekly deep dives into market structure, strategy breakdowns,
                and the kind of nuanced analysis that doesn't fit in a tweet or
                video. The newsletter became the trust engine — where casual
                followers became committed community members.
              </p>
            </div>
          </div>
        </Section>

        {/* The Community Story */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Community
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-6">
            What made Braveheart different wasn't the content itself — it was
            the relationship the content created. By being transparent about
            losses, honest about the difficulty of trading, and generous with
            knowledge, we attracted people who valued substance over hype.
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-6">
            These weren't passive consumers. They became advocates. They shared
            content, defended the brand in comment sections, and brought their
            friends. The community became self-reinforcing — a flywheel powered
            by trust.
          </p>
          <p className="text-lg text-primary-light leading-relaxed">
            When we eventually launched paid products, the conversion wasn't a
            hard sell. It was a natural next step for people who had already
            received months of free value and wanted to go deeper.
          </p>
        </Section>

        {/* Lessons */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Lessons Learned
          </p>
          <div className="space-y-0">
            <div className="py-5 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Trust is the ultimate moat.
              </h3>
              <p className="text-primary-light leading-relaxed">
                In low-trust markets, authenticity isn't just a nice-to-have —
                it's the entire competitive advantage. You can't fake it, and
                you can't shortcut it.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Organic growth compounds.
              </h3>
              <p className="text-primary-light leading-relaxed">
                The first six months felt slow. But organic audiences are
                fundamentally different from paid ones — they're invested, they
                stick around, and they bring others.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Give before you ask.
              </h3>
              <p className="text-primary-light leading-relaxed">
                The ratio matters. Months of free value before any ask. When the
                ask finally came, it didn't feel like selling — it felt like an
                invitation.
              </p>
            </div>
          </div>
        </Section>

        {/* Back link */}
        <div className="editorial-rule mb-8" />
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-primary-light hover:text-primary transition-colors duration-200 group">
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </main>
    </PageTransition>;
}