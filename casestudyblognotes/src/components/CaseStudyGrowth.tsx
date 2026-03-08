import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyGrowth() {
  const steps = [
  {
    num: '01',
    title: 'Market Insight',
    color: 'text-amber-600',
    desc: 'Aspiring traders struggling with inconsistency in an oversaturated, low-trust education market.'
  },
  {
    num: '02',
    title: 'Authority Content',
    color: 'text-amber-600',
    desc: 'High-signal educational posts across trading psychology, strategy, and real market commentary — substance over hype.'
  },
  {
    num: '03',
    title: 'Platform Distribution',
    color: 'text-blue-500',
    desc: 'Content distributed natively across Twitter, YouTube, Instagram, and Newsletter — each platform feeding the next.'
  },
  {
    num: '04',
    title: 'Audience Capture',
    color: 'text-blue-500',
    desc: 'Cold readers converted into followers and newsletter subscribers through consistent free value.'
  },
  {
    num: '05',
    title: 'Community Trust',
    color: 'text-emerald-600',
    desc: 'Transparency, ongoing learning, and peer interaction built long-term habitual engagement — not just passive consumption.'
  },
  {
    num: '06',
    title: 'Product Conversion',
    color: 'text-emerald-600',
    desc: 'Audience converts into course students and premium subscribers — driven by trust earned over time, not sales pressure.'
  },
  {
    num: '07',
    title: 'Social Proof Loop',
    color: 'text-purple-500',
    desc: 'Student results and testimonials attract new traders and reinforce authority — restarting the entire cycle organically.'
  }];

  return (
    <div className="space-y-24 py-16">
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Growth System
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            A 7-step organic loop that turned content into community and
            community into revenue. Each stage built trust on the one before it
            — and fed proof back into the top of the cycle.
          </p>

          <div className="space-y-8 mb-12">
            {steps.map((step, index) =>
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="flex gap-6 items-start">

                <div className="text-gray-300 font-mono text-sm pt-1">
                  {step.num}
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${step.color}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            )}
          </div>

          <div className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase">
            ✦ Cycle Repeats ✦
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Growth Engine
          </h2>
          <p className="text-gray-600 leading-relaxed mb-16">
            Each channel moved the audience one step deeper into the
            relationship. Growth was intentionally slow and relationship-driven
            — which is precisely why it compounded.
          </p>

          <div className="max-w-md mx-auto mb-20">
            <div className="flex flex-col items-center">
              <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-center font-medium shadow-sm">
                YouTube / Twitter
              </div>

              <div className="py-4 flex flex-col items-center text-gray-400">
                <span className="text-xs uppercase tracking-widest mb-2">
                  Awareness & authority
                </span>
                <span>↓</span>
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-center font-medium shadow-sm">
                Newsletter
              </div>

              <div className="py-4 flex flex-col items-center text-gray-400">
                <span className="text-xs uppercase tracking-widest mb-2">
                  Trust & relationship building
                </span>
                <span>↓</span>
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-center font-medium shadow-sm">
                Email Sequence
              </div>

              <div className="py-4 flex flex-col items-center text-gray-400">
                <span className="text-xs uppercase tracking-widest mb-2">
                  Conversion into paid membership
                </span>
                <span>↓</span>
              </div>

              <div className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-center font-medium shadow-sm">
                Subscription / High-Ticket
              </div>

              <div className="pt-4 flex flex-col items-center text-gray-400">
                <span className="text-xs uppercase tracking-widest">
                  Revenue & deep community engagement
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Content</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Attracts attention, demonstrates expertise over time
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Newsletter</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nurtures trust, builds habitual engagement
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Email sequences
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Converts readers into paying members
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivers ongoing value, reinforces loyalty
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Monetisation Model
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The business ran a two-phase offer structure. Each phase was only
            possible because of the trust built in the one before it.
          </p>

          <div className="space-y-8 mb-8">
            <div>
              <h3 className="font-serif italic text-lg text-gray-900 mb-3">
                Phase 1 — Subscription Community (2022–2023)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A quarterly subscription at $149 giving members deeper
                educational material, structured learning resources, strategy
                discussions, and direct community access. This phase validated
                strong, sustained demand for structured guidance and established
                the student base and social proof that Phase 2 was built on.
              </p>
            </div>
            <div>
              <h3 className="font-serif italic text-lg text-gray-900 mb-3">
                Phase 2 — High-Ticket Mentorship (2023–2024)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A $3,000 high-ticket offer providing hands-on, personalised
                guidance and deeper mentorship. Because students had consumed
                months of free value and community experience before purchasing,
                conversion was driven entirely by trust — not urgency,
                discounting, or hard selling.
              </p>
            </div>
          </div>

          <p className="text-gray-900 font-semibold">
            Across both phases:{' '}
            <span className="text-emerald-600">
              $100K+ organic revenue · ~300 customers served.
            </span>
          </p>
        </FadeIn>
      </section>
    </div>);

}