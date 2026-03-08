import React from 'react';
import { DownloadIcon } from 'lucide-react';
export function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-serif font-bold text-navy-dark mb-2">
            Resume
          </h1>
          <p className="text-lg text-gray-body leading-relaxed">
            Growth strategist specializing in organic audience and building
            revenue systems.
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
                Founder &amp; Lead Strategist
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2020 — 2024
              </span>
            </div>
            <div className="text-sm text-navy-blue font-medium mb-3">
              Braveheart Trading
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                $200K+ Revenue
              </span>
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                17K+ YouTube
              </span>
              <span className="px-2 py-0.5 bg-gray-badge border border-gray-divider rounded-full text-[11px] font-medium text-navy-dark">
                33K+ Twitter/X
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
                Founder
              </h3>
              <span className="text-sm text-gray-light font-medium">
                2016 — 2017
              </span>
            </div>
            <div className="text-sm text-gray-light font-medium mb-3">
              Ecommerce Dropshipping Store
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Built and operated a B2C dropshipping store selling wholesale
                products through social media and paid traffic channels.
              </li>
              <li>
                Managed end-to-end operations including supplier sourcing,
                product listing, customer service, and fulfillment logistics.
              </li>
              <li>
                Ran Facebook and Instagram ad campaigns, testing creatives and
                audiences to optimize cost-per-acquisition.
              </li>
              <li>
                Gained foundational experience in e-commerce unit economics,
                margin management, and digital advertising.
              </li>
            </ul>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 3 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">
                Marketing Intern
              </h3>
              <span className="text-sm text-gray-light font-medium">2018</span>
            </div>
            <div className="text-sm text-gray-light font-medium mb-3">
              Bitkub
            </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Supported the marketing team during the early growth phase of
                Thailand's leading cryptocurrency exchange.
              </li>
              <li>
                Assisted with social media content creation, community
                management, and campaign coordination.
              </li>
              <li>
                Contributed to market research and competitive analysis for
                product positioning in the Thai crypto market.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          EDUCATION
        </h2>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
            <h3 className="text-lg font-serif font-bold text-navy-dark">
              Kasetsart University
            </h3>
            <span className="text-sm text-gray-light font-medium">
              Late 2017 — 2018
            </span>
          </div>
          <div className="text-sm text-gray-light font-medium">
            BBA Marketing · Incomplete
          </div>
        </div>
      </section>

      <hr className="border-gray-divider mb-10" />

      {/* Skills Section */}
      <section>
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          SKILLS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-2">
              Strategy &amp; Growth
            </h3>
            <ul className="space-y-1 text-xs text-gray-body">
              <li>Content Strategy</li>
              <li>Organic Growth</li>
              <li>Brand Positioning</li>
              <li>Conversion Funnels</li>
              <li>Go-to-Market</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-2">
              Distribution
            </h3>
            <ul className="space-y-1 text-xs text-gray-body">
              <li>YouTube</li>
              <li>Twitter/X</li>
              <li>Email Marketing</li>
              <li>Newsletter Systems</li>
              <li>SEO</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-2">
              Creation
            </h3>
            <ul className="space-y-1 text-xs text-gray-body">
              <li>Copywriting</li>
              <li>Long-form Content</li>
              <li>Short-form Video</li>
              <li>Visual Assets</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-2">
              Community
            </h3>
            <ul className="space-y-1 text-xs text-gray-body">
              <li>Community Building</li>
              <li>Audience Development</li>
              <li>Discord Management</li>
              <li>Student Success</li>
              <li>Retention Systems</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-2">
              Sales
            </h3>
            <ul className="space-y-1 text-xs text-gray-body">
              <li>High-ticket Funnels</li>
              <li>Organic Inbound</li>
              <li>Trust-based Selling</li>
              <li>Conversion Optimization</li>
              <li>Revenue Systems</li>
            </ul>
          </div>
        </div>
      </section>
    </main>);

}