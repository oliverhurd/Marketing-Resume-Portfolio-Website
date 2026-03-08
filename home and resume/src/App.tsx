import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { NotesPage } from './pages/NotesPage';
import { BlogPage } from './pages/BlogPage';
type Page = 'home' | 'resume' | 'case-studies' | 'blog' | 'notes' | 'contact';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setPage={setCurrentPage} />;
      case 'resume':
        return <ResumePage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'contact':
        return <ContactPage />;
      case 'notes':
        return <NotesPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-body selection:bg-navy-blue/20 selection:text-navy-dark">
      <Header currentPage={currentPage} setPage={setCurrentPage} />

      <div className="flex-grow">{renderPage()}</div>

      <Footer setPage={setCurrentPage} />
    </div>);

}