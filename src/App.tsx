import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { ShoppingDoneSmartDetailPage } from './pages/ShoppingDoneSmartDetailPage';
import { TookjaiReviewDetailPage } from './pages/TookjaiReviewDetailPage';
import { BlogPage } from './pages/BlogPage';
import { NotesPage } from './pages/NotesPage';
import { ContactPage } from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/braveheart-trading" element={<CaseStudyDetailPage />} />
        <Route path="/case-studies/shopping-done-smart" element={<ShoppingDoneSmartDetailPage />} />
        <Route path="/case-studies/tookjai-review" element={<TookjaiReviewDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
