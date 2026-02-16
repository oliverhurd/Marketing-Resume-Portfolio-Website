import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, CheckCircleIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return <PageTransition>
      <main className="editorial-container pt-16 md:pt-24 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mb-4">
            Have a project in mind, or just want to say hello? I'd love to hear
            from you.
          </p>
          <a href="mailto:oliver@oliverhurd.com" className="text-primary hover:opacity-60 transition-opacity duration-200 text-lg">
            oliver@oliverhurd.com
          </a>
        </motion.div>

        <div className="mt-16 md:mt-20 max-w-2xl">
          {submitted ? <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }} className="border border-surface-border p-8 md:p-12 text-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-2">
                Message sent.
              </h2>
              <p className="text-primary-light">
                Thanks for reaching out. I'll get back to you within a day or
                two.
              </p>
            </motion.div> : <motion.form initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        }} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-3">
                  Name
                </label>
                <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border-b border-surface-border py-3 text-primary placeholder:text-primary-muted focus:border-primary focus:outline-none transition-colors duration-200" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-3">
                  Email
                </label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-surface-border py-3 text-primary placeholder:text-primary-muted focus:border-primary focus:outline-none transition-colors duration-200" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-3">
                  Message
                </label>
                <textarea id="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-transparent border-b border-surface-border py-3 text-primary placeholder:text-primary-muted focus:border-primary focus:outline-none transition-colors duration-200 resize-none" placeholder="Tell me about your project..." />
              </div>

              <button type="submit" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-surface text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-primary/85 transition-colors duration-200">
                <SendIcon className="w-4 h-4" />
                Send Message
              </button>
            </motion.form>}
        </div>

        {/* Additional info */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="mt-20 md:mt-28">
          <div className="editorial-rule mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-2">
                Location
              </p>
              <p className="text-primary-light">Bangkok, Thailand</p>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-2">
                Email
              </p>
              <a href="mailto:oliver@oliverhurd.com" className="text-primary-light hover:text-primary transition-colors duration-200">
                oliver@oliverhurd.com
              </a>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-2">
                Social
              </p>
              <div className="flex gap-4">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary transition-colors duration-200">
                  YouTube
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary transition-colors duration-200">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </PageTransition>;
}