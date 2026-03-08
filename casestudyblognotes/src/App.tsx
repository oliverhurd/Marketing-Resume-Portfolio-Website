import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { CaseStudiesIndexPage } from './pages/CaseStudiesIndexPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { BlogPage } from './pages/BlogPage';
import { NotesPage } from './pages/NotesPage';
import { ContactPage } from './pages/ContactPage';
export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage currentPage={currentPage} setPage={setCurrentPage} />;
      case 'resume':
        return <ResumePage currentPage={currentPage} setPage={setCurrentPage} />;
      case 'case-studies':
        return (
          <CaseStudiesIndexPage
            currentPage={currentPage}
            setPage={setCurrentPage} />);


      case 'case-study-braveheart':
        return (
          <CaseStudyPage currentPage={currentPage} setPage={setCurrentPage} />);

      case 'blog':
        return <BlogPage currentPage={currentPage} setPage={setCurrentPage} />;
      case 'notes':
        return <NotesPage currentPage={currentPage} setPage={setCurrentPage} />;
      case 'contact':
        return (
          <ContactPage currentPage={currentPage} setPage={setCurrentPage} />);

      default:
        return <HomePage currentPage={currentPage} setPage={setCurrentPage} />;
    }
  };
  return <>{renderPage()}</>;
}