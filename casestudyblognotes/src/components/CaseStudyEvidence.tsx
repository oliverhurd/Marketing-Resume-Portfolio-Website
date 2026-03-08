import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
export function CaseStudyEvidence() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const evidenceCards = [
  {
    title: 'Gumroad — Revenue & Ratings',
    desc: '$41,310 · 272 sales · 97% five-star rating · top referrers: email & direct ($26,590) and Twitter ($8,408)',
    img: "/image.png"
  },
  {
    title: 'Newsletter Campaigns & Global Reach',
    desc: 'Consistent 35–39% open rates · 6,300+ recipients per send · audience across US, Sweden, UK, Canada, Italy',
    img: "/image-1.png"
  },
  {
    title: 'Twitter / X — Profile & Post Analytics',
    desc: '33.7K followers · 1,960 posts · verified · top post: 129K impressions · 10,121 link clicks',
    img: "/image-2.png"
  },
  {
    title: 'Email Performance Detail',
    desc: '39.6% open rate · 5.2% CTR · 13.7% clicks per unique open · consistent across multiple campaigns',
    img: "/image-3.png"
  }];

  const contentEngineCards = [
  {
    platform: 'YouTube',
    title: 'Market Structure Deep Dives',
    desc: 'Long-form, detailed, note-worthy. Built to be re-watched — not just consumed once. 398K views · 3,351K impressions · 18,298 subscribers gained.',
    img: "/pasted-image.jpg",
    color: 'text-red-500',
    bgAccent: 'bg-red-50'
  },
  {
    platform: 'Twitter / X',
    title: 'Organic Educational Posts',
    desc: 'Free value PDFs and threads distributed natively. Top posts hit 100K–292K impressions organically. 129K · 100K · 160K · 175K impressions per post.',
    img: "/pasted-image-1.jpg",
    color: 'text-blue-500',
    bgAccent: 'bg-blue-50'
  },
  {
    platform: 'Newsletter',
    title: 'Weekly Issues for Aspiring Traders',
    desc: 'Long, engaging reads written directly to an aspiring trader — routinised into weekly preparation habits. 39.6% open rate · 5.2% CTR · 6,288 recipients.',
    img: "/image-1.png",
    color: 'text-emerald-600',
    bgAccent: 'bg-emerald-50'
  }];

  const studentOutcomeCards = [
  {
    title: 'Community Activity & Results',
    desc: "Student wins, trade setups, and funded passes shared in the group — including Tan Tran Van's $20,000 Master Tier funded account pass.",
    img: "/pasted-image-2.jpg"
  },
  {
    title: 'Community Photos',
    desc: 'Members sharing trading setups, environments, and reflections — a driven community built on shared learning and trust.',
    img: "/pasted-image-3.jpg"
  }];

  return (
    <div className="space-y-24 py-16">
      {/* Proof & Evidence */}
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Proof & Evidence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Platform-native data from across the growth period. Click any image
            to view full size.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceCards.map((card, idx) =>
            <FadeIn key={idx} delay={idx * 0.08}>
                <div
                className="group cursor-pointer bg-[#f9fafb] border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                onClick={() => setSelectedImage(card.img)}>

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Content Engine */}
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Content Engine
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            The content that powered organic growth across the ecosystem. Click
            any image to expand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentEngineCards.map((card, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div
                className="group cursor-pointer bg-[#f9fafb] border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col"
                onClick={() => setSelectedImage(card.img)}>

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div
                    className={`text-[10px] font-bold uppercase tracking-widest ${card.color} mb-2`}>

                      {card.platform}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-[15px] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Student Outcomes */}
      <section className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Student Outcomes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Real results shared organically by community members — unsolicited.
            Students passed funded account challenges and withdrew real profits
            across FTMO, Fidelcrest, FXify, TopStep, Alpha Capital, and The
            Funded Trader. These outcomes fed directly back into the brand as
            the social proof that drove the next wave of growth.
          </p>

          {/* Community Activity & Community Photos — 2-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {studentOutcomeCards.map((card, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div
                className="group cursor-pointer bg-[#f9fafb] border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                onClick={() => setSelectedImage(card.img)}>

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Documented Student Payouts — full width */}
          <FadeIn delay={0.2}>
            <div
              className="group cursor-pointer bg-[#f9fafb] border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              onClick={() =>
              setSelectedImage("/pasted-image-4.jpg"

              )
              }>

              <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                <img
                  src="/pasted-image-4.jpg"
                  alt="Documented Student Payouts"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to expand
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Documented Student Payouts
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Arooj N. $44,450 from $1M Fidelcrest account · Arooj Noor
                  $27,499 + $26,777 (FXify) · Bhumipat $5,055 (FTMO) · Tan Tran
                  Van $5,001 + $4,138 · Masoud Aneis $10,994 (Alpha Capital) ·
                  Vitali $4,372 + $4,071 (TopStep) · and others
                </p>
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}>

            <motion.img
            initial={{
              scale: 0.92,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.92,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />

            <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase font-medium"
            onClick={() => setSelectedImage(null)}>

              ✕ Close
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}