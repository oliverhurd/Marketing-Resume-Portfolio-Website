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

export function ShoppingDoneSmartDetailPage() {
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
            B2C E-com · Affiliate Marketing · Social Media
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.08]">
            Shopping Done Smart
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-primary-light italic max-w-2xl">
            Turning social media attention into consistent e-commerce revenue.
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
                B2C
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Direct to Consumer
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                Daily
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Revenue Generation
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                0→1
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Built From Scratch
              </p>
            </div>
            <div>
              <p
                className="font-inter text-3xl md:text-4xl font-bold text-primary tracking-[-0.02em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                Social
              </p>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
                Primary Traffic Source
              </p>
            </div>
          </div>
          <p className="text-primary-light leading-relaxed max-w-3xl">
            Built and operated a general e-commerce drop-shipping store generating 
            consistent daily revenue through social media traffic and affiliate 
            marketing strategies — without holding any inventory.
          </p>
          <div className="editorial-rule mt-12" />
        </Section>

        {/* The Challenge */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Challenge
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-6">
            Drop-shipping is a notoriously competitive space. Thin margins, 
            unreliable suppliers, and saturated product categories make it 
            difficult to build anything sustainable. Most drop-shipping operations 
            fail within the first six months.
          </p>
          <p className="text-lg text-primary-light leading-relaxed">
            The challenge was to build a profitable e-commerce operation without 
            the capital requirements of traditional retail — no warehouse, no 
            inventory risk, and no reliance on paid advertising to stay profitable.
          </p>
        </Section>

        {/* The Approach */}
        <Section className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-6">
            The Approach
          </p>
          <p className="text-lg text-primary-light leading-relaxed mb-10">
            Rather than competing on paid ads, the strategy leveraged organic 
            social media as the primary traffic driver combined with affiliate 
            marketing partnerships to reduce customer acquisition costs to near zero.
          </p>

          <div className="space-y-0">
            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Product Selection Strategy
              </h3>
              <p className="text-primary-light leading-relaxed">
                Focused on trending, problem-solving products with strong 
                social proof potential. Products that demonstrate visually 
                and solve a clear, relatable pain point — the backbone of 
                successful organic social content.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Social Media as Traffic Engine
              </h3>
              <p className="text-primary-light leading-relaxed">
                Built product-focused content for social platforms, leveraging 
                short-form video and user-generated content formats to drive 
                organic discovery. Product demonstrations, before-and-after 
                content, and social proof drove consistent traffic without 
                ad spend.
              </p>
            </div>

            <div className="py-6 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Affiliate Marketing Integration
              </h3>
              <p className="text-primary-light leading-relaxed">
                Supplemented organic traffic with affiliate partnerships — 
                turning the store into a revenue-generating asset for other 
                content creators while expanding reach without increasing 
                the direct marketing workload.
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
                Product-market fit is everything.
              </h3>
              <p className="text-primary-light leading-relaxed">
                The right product in the right market at the right moment 
                requires almost no convincing. The wrong product requires 
                enormous effort for minimal return.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Organic traffic compounds, paid traffic doesn't.
              </h3>
              <p className="text-primary-light leading-relaxed">
                Content built for organic discovery continues to drive 
                revenue long after it's published. Paid ads stop the moment 
                the budget runs out.
              </p>
            </div>
            <div className="py-5 border-t border-surface-border border-b">
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                Systems beat hustle.
              </h3>
              <p className="text-primary-light leading-relaxed">
                Building repeatable content and fulfilment systems was what 
                made daily revenue possible — not working harder, but 
                building smarter workflows.
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
