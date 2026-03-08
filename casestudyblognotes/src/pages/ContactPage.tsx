import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import { Mail, MapPin, Send } from 'lucide-react';
interface ContactPageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function ContactPage({ currentPage, setPage }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT COLUMN: INFO */}
            <FadeIn delay={0.1}>
              <div className="lg:sticky lg:top-40">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#1a1a2e] tracking-tight">
                  Let's talk.
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-md">
                  Have a project in mind or want to discuss organic growth
                  strategy? I'd love to hear from you.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:oliver@oliverhurd.com"
                        className="text-lg font-semibold text-[#1a1a2e] hover:text-blue-600 transition-colors">

                        oliver@oliverhurd.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                      <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Location
                      </div>
                      <div className="text-lg font-semibold text-[#1a1a2e]">
                        Bangkok, Thailand
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Available for remote work worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT COLUMN: FORM */}
            <FadeIn delay={0.2}>
              <div className="bg-[#fafafa] p-8 md:p-12 rounded-3xl border border-gray-100">
                <h2 className="font-serif text-2xl font-bold mb-8 text-[#1a1a2e]">
                  Send a message
                </h2>

                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">

                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors text-[#1a1a2e] placeholder-gray-300"
                        placeholder="Jane Doe" />

                    </div>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">

                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors text-[#1a1a2e] placeholder-gray-300"
                        placeholder="jane@example.com" />

                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">

                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors text-[#1a1a2e] placeholder-gray-300"
                      placeholder="How can I help?" />

                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">

                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full border-b-2 border-gray-200 py-2 bg-transparent focus:border-blue-600 focus:outline-none transition-colors text-[#1a1a2e] placeholder-gray-300 resize-none"
                      placeholder="Tell me about your project...">
                    </textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1a1a2e] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors mt-4">

                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer setPage={setPage} />
    </div>);

}