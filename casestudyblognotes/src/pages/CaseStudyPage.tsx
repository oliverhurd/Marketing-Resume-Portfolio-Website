import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyVideo } from '../components/CaseStudyVideo';
import { CaseStudyMetrics } from '../components/CaseStudyMetrics';
import { CaseStudyContent } from '../components/CaseStudyContent';
import { CaseStudyGrowth } from '../components/CaseStudyGrowth';
import { CaseStudyEvidence } from '../components/CaseStudyEvidence';
import { CaseStudyLessons } from '../components/CaseStudyLessons';
interface CaseStudyPageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function CaseStudyPage({ currentPage, setPage }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <CaseStudyHero />
        <CaseStudyVideo />
        <CaseStudyMetrics />
        <CaseStudyContent />
        <CaseStudyGrowth />
        <CaseStudyEvidence />
        <CaseStudyLessons />
      </main>

      <Footer setPage={setPage} />
    </div>);

}