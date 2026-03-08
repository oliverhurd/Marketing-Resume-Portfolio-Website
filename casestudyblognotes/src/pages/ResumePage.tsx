import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import { Download } from 'lucide-react';
interface ResumePageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function ResumePage({ currentPage, setPage }: ResumePageProps) {
  const skillGroups = [
  {
    category: 'Strategy & Growth',
    skills: [
    'Content Strategy',
    'Organic Growth',
    'Brand Positioning',
    'Conversion Funnels']

  },
  {
    category: 'Channels & Distribution',
    skills: [
    'YouTube Strategy',
    'Twitter/X Growth',
    'Email Marketing',
    'Newsletter Systems',
    'SEO']

  },
  {
    category: 'Creation & Community',
    skills: ['Copywriting', 'Community Building', 'Audience Development']
  }];

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main>
        {/* HEADER */}
        <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-gray-100 pb-12">
              <div className="max-w-2xl">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#1a1a2e] tracking-tight">
                  Resume
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                  Content strategist and growth operator with 5+ years building
                  brands from zero to sustainable revenue.
                </p>
              </div>
              <button className="group flex items-center gap-3 border border-gray-300 text-[#1a1a2e] px-6 py-3.5 rounded-full font-semibold hover:bg-[#1a1a2e] hover:text-white hover:border-[#1a1a2e] transition-all duration-300 shrink-0">
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Download PDF
              </button>
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE */}
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-16">
              Experience
            </h2>

            <div className="space-y-20">
              {/* Role 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group">
                <div className="md:col-span-3 pt-1">
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-400">
                    2022 — 2024
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl font-bold text-[#1a1a2e] mb-2">
                    Founder & Lead Strategist
                  </h3>
                  <div className="text-blue-600 font-semibold text-lg mb-6">
                    Braveheart Trading
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
                    Built a trading education brand to $100K+ revenue through
                    organic content and community — zero paid advertising.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-bold tracking-wide">
                      $100K+ Revenue
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-bold tracking-wide">
                      17K+ YouTube
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-bold tracking-wide">
                      33K+ Twitter
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-bold tracking-wide">
                      39.6% Open Rate
                    </span>
                  </div>

                  <ul className="space-y-3 text-gray-600 list-none max-w-3xl">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                      Designed and executed cross-platform content strategy
                      across YouTube, Twitter, and Newsletter.
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                      Built a high-ticket conversion funnel driven entirely by
                      trust and organic inbound.
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                      Managed community engagement and student success programs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group">
                <div className="md:col-span-3 pt-1">
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-400">
                    2021 — 2022
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl font-bold text-[#1a1a2e] mb-2">
                    Content Strategy Consultant
                  </h3>
                  <div className="text-gray-500 font-semibold text-lg mb-6">
                    Freelance
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
                    Advised early-stage brands on content positioning, audience
                    development, and organic growth strategy.
                  </p>
                  <ul className="space-y-3 text-gray-600 list-none max-w-3xl">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Developed foundational brand messaging and content
                      playbooks for 5+ startups.
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Audited existing content ecosystems and implemented
                      high-ROI organic channels.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group">
                <div className="md:col-span-3 pt-1">
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-400">
                    2019 — 2021
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl font-bold text-[#1a1a2e] mb-2">
                    Brand Strategist
                  </h3>
                  <div className="text-gray-500 font-semibold text-lg mb-6">
                    Meridian Creative Agency
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
                    Led brand strategy for B2B and D2C clients, developing
                    positioning frameworks and content ecosystems.
                  </p>
                  <ul className="space-y-3 text-gray-600 list-none max-w-3xl">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Facilitated brand discovery workshops with executive
                      teams.
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Created comprehensive brand guidelines and go-to-market
                      content strategies.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 4 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group">
                <div className="md:col-span-3 pt-1">
                  <div className="text-sm font-bold tracking-widest uppercase text-gray-400">
                    2017 — 2019
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl font-bold text-[#1a1a2e] mb-2">
                    Content Marketing Manager
                  </h3>
                  <div className="text-gray-500 font-semibold text-lg mb-6">
                    Elevate Digital
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
                    Managed content operations for a portfolio of SaaS and
                    e-commerce clients.
                  </p>
                  <ul className="space-y-3 text-gray-600 list-none max-w-3xl">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Oversaw editorial calendars and managed a team of
                      freelance writers.
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                      Optimized long-form content for SEO, driving 40% YoY
                      organic traffic growth across accounts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section className="border-t border-gray-200 py-20 px-6 max-w-5xl mx-auto mb-12">
          <FadeIn>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-12">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {skillGroups.map((group, idx) =>
              <div key={idx}>
                  <h3 className="font-serif text-xl font-bold text-[#1a1a2e] mb-6">
                    {group.category}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, skillIdx) =>
                  <div
                    key={skillIdx}
                    className="text-gray-600 font-medium flex items-center gap-3">

                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        {skill}
                      </div>
                  )}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer setPage={setPage} />
    </div>);

}