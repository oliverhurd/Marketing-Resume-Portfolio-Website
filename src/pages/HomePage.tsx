import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
function StaggerReveal({
  children,
  className



}: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {
        opacity: 0,
        y: 30
      }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>

      {children}
    </motion.div>);

}
function StatItem({
  number,
  label,
  delay




}: {number: string;label: string;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 16
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {
        opacity: 0,
        y: 16
      }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative">

      <p
        className="font-inter text-4xl md:text-5xl font-700 text-primary tracking-[-0.02em] tabular-nums"
        style={{
          fontVariantNumeric: 'tabular-nums'
        }}>

        {number}
      </p>
      <p className="mt-2 text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted">
        {label}
      </p>
    </motion.div>);

}
export function HomePage() {
  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section className="editorial-container pt-16 md:pt-28 pb-20 md:pb-32">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.05] tracking-tight">

            I build brands
            <br />
            <span className="italic font-medium text-primary-light">
              people trust.
            </span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-8 md:mt-10 max-w-2xl text-lg md:text-xl text-primary-light leading-relaxed">

            I'm Oliver Hurd, a content and brand strategist based in Bangkok. I
            help founders and creators grow audiences organically — turning
            attention into trust, and trust into revenue.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-10 flex flex-wrap items-center gap-4">

            <Link
              to="/resume"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-surface text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary/85 transition-colors duration-200">

              View Resume
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary hover:text-surface transition-colors duration-200 group">

              Get in Touch
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>

        {/* Featured Case Study */}
        <section className="editorial-container pb-20 md:pb-28">
          <StaggerReveal>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-4">
              Featured Work
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Braveheart Trading
            </h2>
          </StaggerReveal>
          <StaggerReveal>
            <div className="border border-surface-border p-8 md:p-12 lg:p-16">
              <p className="text-lg md:text-xl text-primary-light leading-relaxed max-w-3xl">
                Building an online trading education community from zero to
                profitability — entirely through organic content in one of the
                internet's most oversaturated markets.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://bravehearttrading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-surface text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary/85 transition-colors duration-200 group">

                  <ExternalLinkIcon className="w-4 h-4" />
                  View Website
                </a>
                <Link
                  to="/case-studies/braveheart-trading"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary hover:text-surface transition-colors duration-200 group">

                  Read Case Study
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </StaggerReveal>
        </section>

        {/* Closing Section */}
        <section className="editorial-container pb-28 md:pb-36">
          <StaggerReveal>
            <div className="editorial-rule mb-14 md:mb-20" />
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1] tracking-tight mb-6">
              Let's build something
              <br />
              <span className="italic font-medium text-primary-light">
                together.
              </span>
            </h2>
            <p className="text-primary-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              I'm always open to interesting projects — whether it's brand
              strategy, content systems, or building an audience from scratch.
              If you've got something in mind, let's talk.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-surface text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary/85 transition-colors duration-200 group">

                Get in Touch
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary hover:text-surface transition-colors duration-200">

                View Resume
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:oliver@oliverhurd.com"
                className="text-primary-light hover:text-primary transition-colors duration-200 text-[15px]">

                oliver@oliverhurd.com
              </a>
              <p className="text-[13px] text-primary-muted tracking-wide">
                Currently based in Bangkok, Thailand
              </p>
            </div>
          </StaggerReveal>
        </section>
      </main>
    </PageTransition>);

}