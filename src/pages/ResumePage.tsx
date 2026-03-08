import React from 'react';
import { DownloadIcon } from 'lucide-react';

type Page = 'home' | 'resume' | 'case-studies' | 'case-study-braveheart' | 'blog' | 'notes' | 'contact';

interface ResumePageProps {
  setPage: (page: Page) => void;
}

export function ResumePage({ setPage }: ResumePageProps) {
  const skillGroups = [
    {
      category: 'Strategy & Growth',
      skills: [
        'Content Strategy',
        'Organic Growth',
        'Brand Positioning',
        'Conversion Funnels',
        'Go-to-Market'
      ]
    },
    {
      category: 'Channels & Distribution',
      skills: [
        'YouTube Strategy',
        'Twitter/X Growth',
        'Email Marketing',
        'Newsletter Systems',
        'SEO'
      ]
    },
    {
      category: 'Creation & Community',
      skills: [
        'Copywriting',
        'Long-form Content',
        'Community Building',
        'Audience Development',
        'Discord Management'
      ]
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-serif font-bold text-navy-dark mb-2">
            Resume
          </h1>
          <p className="text-lg text-gray-body leading-relaxed">
            Content strategist and growth operator with 5+ years building
            brands from zero to sustainable revenue.
          </p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 border border-gray-divider rounded-full text-sm font-medium text-navy-dark hover:bg-gray-50 transition-colors shrink-0">
          <DownloadIcon className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>

      <hr className="border-gray-divider mb-10" />

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          EXPERIENCE
        </h2>

        <div className="space-y-6">
          {/* Entry 1 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">
                Founder & Lead Strategist
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2022 — 2024
              </span>
            </div>
            <div className="text-sm text-navy-blue font-medium mb-3">
              Braveheart Trading
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                $100K+ Revenue
              </span>
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                17K+ YouTube
              </span>
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                33K+ Twitter
              </span>
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                39.6% Email Open Rate
              </span>
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Designed and executed cross-platform content strategy across
                YouTube, Twitter/X, and email newsletter, growing a combined
                audience of 50K+ from zero.
              </li>
              <li>
                Built a high-ticket conversion funnel driven entirely by trust
                and organic inbound — zero paid advertising.
              </li>
              <li>
                Managed community engagement, student success programs, and
                retention systems across Discord and private channels.
              </li>
              <li>
                Created and maintained a weekly long-form newsletter with a
                consistent 39.6% open rate across 6,500+ subscribers.
              </li>
            </ul>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 2 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">
                Content Strategy Consultant
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2021 — 2022
              </span>
            </div>
            <div className="text-sm text-gray-body font-medium mb-3">
              Freelance
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Advised early-stage brands on content positioning, audience
                development, and organic growth strategy.
              </li>
              <li>
                Developed foundational brand messaging and content
                playbooks for 5+ startups.
              </li>
              <li>
                Audited existing content ecosystems and implemented
                high-ROI organic channels.
              </li>
            </ul>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 3 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">
                Brand Strategist
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2019 — 2021
              </span>
            </div>
            <div className="text-sm text-gray-body font-medium mb-3">
              Meridian Creative Agency
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Led brand strategy for B2B and D2C clients, developing
                positioning frameworks and content ecosystems.
              </li>
              <li>
                Facilitated brand discovery workshops with executive
                teams.
              </li>
              <li>
                Created comprehensive brand guidelines and go-to-market
                content strategies.
              </li>
            </ul>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 4 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">
                Content Marketing Manager
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2017 — 2019
              </span>
            </div>
            <div className="text-sm text-gray-body font-medium mb-3">
              Elevate Digital
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Managed content operations for a portfolio of SaaS and
                e-commerce clients.
              </li>
              <li>
                Oversaw editorial calendars and managed a team of
                freelance writers.
              </li>
              <li>
                Optimized long-form content for SEO, driving 40% YoY
                organic traffic growth across accounts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-divider mb-10" />

      {/* Skills Section */}
      <section>
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          SKILLS & EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-xl font-bold text-navy-dark mb-6">
                {group.category}
              </h3>
              <div className="flex flex-col gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="text-gray-body font-medium flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
