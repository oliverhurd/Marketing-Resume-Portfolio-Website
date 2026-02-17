import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';

function Section({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TookjaiReviewDetailPage() {
  return (
    <PageTransition>
      <main className="editorial-container pt-16 md:pt-24 pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-primary-light hover:text-primary transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            All Case Studies
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-4">
            Media Buying · FB Ads · AI Creative
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.08]">
            Tookjai Review
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-primary-light italic max-w-2xl">
            AI-powered creatives. Data-driven decisions. Performance at scale.
          </p>
        </motion.div>

        {/* Results */}
        <Section className="mb-16 md:mb-24">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 mb-8">
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                AI
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Generated Creatives
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                FB
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Media Buying
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                2x/mo
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Performance Reviews
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                CRO
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Landing Page Optimisation
              </p>
            </div>
          </div>
          <p className="text-primary-light leading-relaxed max-w-3xl">
            Developed AI-generated creatives and customer research-based targeted 
            landing pages for online performance-based affiliate marketing — 
            managed through Facebook media buying with rigorous bi-weekly 
            performance reviews.
          </p>
          <div className="editorial-rule mt-12" />
        </Section>

        {/* The Challenge */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Challenge
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-6">
            Performance affiliate marketing on Facebook is a precision game. 
            Creative fatigue, rising CPMs, and algorithm changes can turn a 
            profitable campaign unprofitable overnight. The cost of getting 
            targeting or creative wrong is immediate and measurable.
          </p>
          <p className="text-lg text-primary-light leading-relaxed">
            The challenge was to build a scalable creative and testing system 
            that could keep pace with platform changes — without the cost and 
            lead time of traditional creative production.
          </p>
        </Section>

        {/* The Approach */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Approach
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-10">
            The solution was a data-first, AI-assisted creative pipeline — 
            grounding every ad in real customer research, then using AI tools 
            to produce and iterate creatives at a speed traditional production 
            couldn't match.
          </p>

          <div className="space-y-0">
            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Customer Research Foundation
              </h3>
              <p className="text-primary-light leading-relaxed">
                Every campaign began with deep customer research — mining 
                reviews, forums, and social conversations to understand the 
                exact language, fears, and desires of the target audience. 
                This research directly informed ad copy and creative angles.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                AI-Powered Creative Production
              </h3>
              <p className="text-primary-light leading-relaxed">
                Used AI image and copy generation tools to produce high volumes 
                of creative variants rapidly — enabling proper A/B testing 
                across hooks, visuals, and offers without the cost of 
                traditional creative agencies.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Bi-Weekly Performance Reviews
              </h3>
              <p className="text-primary-light leading-relaxed">
                Implemented a structured bi-weekly review cadence — analysing 
                CPM, CTR, conversion rates, and ROAS across all active 
                campaigns. Losing campaigns were cut decisively. Winners 
                were scaled systematically.
              </p>
            </div>
          </div>
        </Section>

        {/* Lessons */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-8">
            Lessons Learned
          </p>
          <div className="space-y-0">
            <div className="py-5 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Creative is the targeting.
              </h3>
              <p className="text-primary-light leading-relaxed">
                In modern Facebook advertising, the creative itself does the 
                audience targeting. The right creative finds the right people. 
                Volume and variety of creative is the primary lever.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Data without action is noise.
              </h3>
              <p className="text-primary-light leading-relaxed">
                Collecting performance data only matters if there's a clear 
                system for acting on it. The bi-weekly review structure 
                turned data into decisions rather than reports.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                AI accelerates, but doesn't replace, strategy.
              </h3>
              <p className="text-primary-light leading-relaxed">
                AI tools dramatically reduced creative production time and cost. 
                But the strategic insight — knowing what angle to test, what 
                customer pain to address — still required human judgment.
              </p>
            </div>
          </div>
        </Section>

        {/* Back link */}
        <div className="editorial-rule mb-8" />
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-primary-light hover:text-primary transition-colors duration-200 group"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </main>
    </PageTransition>
  );
}
