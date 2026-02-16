import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="mt-24 md:mt-32">
      <div className="editorial-container">
        <div className="editorial-rule" />
        <div className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-primary-muted">
            © 2026 Oliver Hurd · Bangkok, Thailand
          </p>
          <div className="flex items-center gap-6">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary-light hover:text-primary transition-colors duration-200">
              YouTube
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary-light hover:text-primary transition-colors duration-200">
              Twitter
            </a>
            <a href="mailto:oliver@oliverhurd.com" className="text-[13px] text-primary-light hover:text-primary transition-colors duration-200">
              Email
            </a>
            <Link to="/contact" className="text-[13px] text-primary-light hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}