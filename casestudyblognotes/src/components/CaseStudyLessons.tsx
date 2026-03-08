import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyLessons() {
  const lessons = [
  {
    title:
    'Trust and genuine value are the foundation of every relationship.',
    desc: 'In a saturated, skeptical market, the only sustainable competitive advantage is to genuinely serve people before asking for anything. Giving away real value — consistently, without conditions — was the single most effective growth strategy deployed across the entire business. Every sale was a byproduct of that trust.'
  },
  {
    title: 'Organic growth compounds on AI-controlled platforms.',
    desc: 'Social media algorithms reward genuine, high-signal engagement. Content that earned real saves, shares, and comments outperformed anything optimised purely for reach. Understanding and calibrating to platform behaviour — rather than fighting it — was how organic growth became self-sustaining without ongoing investment.'
  },
  {
    title: 'Systems scale better than individuals.',
    desc: 'Running the entire business solo revealed clearly that effort has a ceiling. As the customer base grew, delivery demands increased while available content and marketing time decreased. The constraint was never motivation — it was the absence of systems and specialisation. That lesson directly shapes how I approach team-based work: build the system first, operate efficiently within it.'
  },
  {
    title: 'Specialisation drives output quality and efficiency.',
    desc: "Operating across content, marketing, community, support, and delivery simultaneously meant that quality in every area competed against the demands of every other. Generalism has a ceiling. Specialised roles produce better output, faster — and that's the environment I'm designed to contribute to."
  },
  {
    title: 'Standards and consistency define the brand.',
    desc: 'In content creation, marketing, and service delivery, the standard you hold yourself to over time becomes what the brand stands for. Consistency in tone, quality, and responsiveness — even when no one was watching — was what made the community feel credible, trustworthy, and worth being part of.'
  },
  {
    title: 'The customer is the flywheel.',
    desc: "Every student result, every community post, every organic testimonial fed back into the brand as compounding social proof. Satisfied customers became the most efficient marketing asset — reducing skepticism in cold audiences and shortening the trust-building cycle for the next wave of incoming traders. Prioritising customer experience wasn't a service decision. It was a growth decision."
  },
  {
    title: 'Community creates accountability, momentum, and retention.',
    desc: "The community gave students a reason to stay engaged, share progress, and push forward. People who participated became more consistent, more results-oriented, and more likely to succeed — which produced the student outcomes that made the brand credible to new audiences. Community wasn't a product feature. It was the engine."
  },
  {
    title: 'Brand presence is the cost of entry in skeptical markets.',
    desc: 'Before a new visitor read a single piece of content, they were already making a trust judgment based on profile quality, visual consistency, and perceived authority. In an oversaturated industry, a weak brand signals risk. A strong, consistent brand signals legitimacy — and reduces the friction that stops cold audiences from converting into followers.'
  }];

  const skills = [
  'Content Strategy',
  'Organic Growth Systems',
  'Community Building',
  'YouTube Strategy',
  'Twitter / X Growth',
  'Email Marketing',
  'Newsletter Development',
  'Brand Positioning',
  'Copywriting',
  'Audience Development',
  'Conversion Funnel Design'];

  return (
    <div className="space-y-24 py-16">
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">
            Operational Lessons
          </h2>

          <div className="space-y-12">
            {lessons.map((lesson, idx) =>
            <FadeIn
              key={idx}
              delay={0.1}
              className={`pb-12 ${idx !== lessons.length - 1 ? 'border-b border-gray-100' : ''}`}>

                <h3 className="font-serif italic text-xl md:text-2xl text-gray-900 font-semibold mb-4 leading-snug">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {lesson.desc}
                </p>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-gray-100 pt-16 pb-24">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Skills Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) =>
            <FadeIn key={idx} delay={idx * 0.05}>
                <span className="inline-block bg-[#f9fafb] border border-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-default">
                  {skill}
                </span>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </section>
    </div>);

}