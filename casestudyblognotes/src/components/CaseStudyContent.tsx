import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyContent() {
  return (
    <div className="space-y-24 py-16">
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Market Context
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              The retail trading education industry is one of the internet's
              most crowded markets — and one of the least trusted. The space is
              saturated with lifestyle marketing, exaggerated profit claims, and
              short-term hype. This environment has trained audiences to be
              deeply skeptical of every new educator who appears.
            </p>
            <p>
              The challenge wasn't simply launching another trading brand. The
              real challenge was{' '}
              <span className="font-semibold text-gray-900">
                building credibility in a market where credibility had been
                systematically eroded
              </span>{' '}
              by others before me.
            </p>
            <p>
              Braveheart Trading was designed around a different premise: trust
              would be the primary growth strategy — not promotion, not paid
              reach, not urgency. Trust built slowly through consistent, genuine
              value.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Strategic Positioning
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
            <p>
              The brand adopted a content-first approach built on one principle:{' '}
              <span className="italic font-serif text-gray-900">
                give away so much real value that the audience stops seeing the
                brand as marketing.
              </span>
            </p>
            <p>
              Each channel served a distinct role — not just as a distribution
              point, but as a specific layer of the trust-building system.
              Together they formed an interconnected ecosystem where each
              platform fed the next.
            </p>
          </div>

          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <h3 className="text-lg mb-4">
                <span className="text-amber-600 font-semibold">YouTube</span>
                <span className="text-gray-400 mx-2">—</span>
                <span className="font-serif italic text-gray-700">
                  Long Form Education & Self Development
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                YouTube was the depth layer. Videos were long, detailed, and
                genuinely educational — covering market structure, trading
                psychology, and self-development for aspiring traders. They were
                built to be the kind of content people took notes on,
                re-watched, and saved. That level of active engagement —
                learning rather than passive consuming — built lasting
                credibility and an audience base that kept returning. The
                quality of the content did the selling that marketing never
                needed to.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-lg mb-4">
                <span className="text-blue-500 font-semibold">Twitter / X</span>
                <span className="text-gray-400 mx-2">—</span>
                <span className="font-serif italic text-gray-700">
                  Audience Building & Free Value at Scale
                </span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Twitter was the primary audience-building platform. The
                  strategy began with giving away free value at scale — detailed
                  documented PDFs, study notes, and educational threads that
                  people could read, save, and share natively on the platform.
                  This consistently rewarded the account in the algorithm and
                  generated early momentum from zero.
                </p>
                <p>
                  Over time, the positioning sharpened around a clear identity:{' '}
                  <span className="italic font-serif">
                    basics and simplicity
                  </span>
                  . This made it easy to identify and attract a specific
                  audience — aspiring traders overwhelmed by noise who needed
                  clarity, not more complexity. Twitter then became the
                  connector — linking out to YouTube, the newsletter, and
                  Instagram, acting as the central node of a cross-platform
                  content ecosystem. The backend infrastructure (email capture,
                  nurture sequences, membership) handled incoming traffic
                  automatically. The system compounded without constant manual
                  intervention.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-lg mb-4">
                <span className="text-emerald-600 font-semibold">
                  Newsletter
                </span>
                <span className="text-gray-400 mx-2">—</span>
                <span className="font-serif italic text-gray-700">
                  Long Form Written Content & Routine Building
                </span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The newsletter was the most effective written format in the
                  ecosystem. Each issue was a long, engaging read written
                  directly to an aspiring trader — delivering a framework, a
                  perspective, or a mindset push to carry into the week ahead.
                  It was never a marketing email. It was a weekly ritual.
                </p>
                <p>
                  This is why open rates stayed consistently strong at 35–39%.
                  Readers began incorporating the newsletter into their own
                  trading routines — reading it became part of how they prepared
                  each week. That habitual engagement transformed casual
                  followers into committed community members, and eventually
                  into paying students.
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>
    </div>);

}