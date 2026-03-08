import React from 'react';
import { MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy-dark mb-6">
            Let's talk.
          </h1>
          <p className="text-xl text-gray-body leading-relaxed mb-16 max-w-md">
            Have a project in mind or want to discuss organic growth strategy?
            I'd love to hear from you.
          </p>

          <div className="space-y-10">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-6 shrink-0 border border-gray-divider">
                <MailIcon className="w-5 h-5 text-gray-light" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-1">
                  EMAIL
                </div>
                <div className="text-lg font-bold text-navy-dark">
                  oliver@oliverhurd.com
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-6 shrink-0 border border-gray-divider">
                <MapPinIcon className="w-5 h-5 text-gray-light" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-1">
                  LOCATION
                </div>
                <div className="text-lg font-bold text-navy-dark mb-1">
                  Bangkok, Thailand
                </div>
                <div className="text-sm text-gray-body">
                  Available for remote work worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div>
          <div className="bg-white border border-gray-divider rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-navy-dark mb-8">
              Send a message
            </h2>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-gray-light tracking-wider uppercase mb-2">

                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-0 border-b border-gray-divider pb-2 px-0 text-navy-dark placeholder:text-gray-300 focus:ring-0 focus:border-navy-dark transition-colors" />

                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-gray-light tracking-wider uppercase mb-2">

                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full bg-transparent border-0 border-b border-gray-divider pb-2 px-0 text-navy-dark placeholder:text-gray-300 focus:ring-0 focus:border-navy-dark transition-colors" />

                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-gray-light tracking-wider uppercase mb-2">

                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help?"
                  className="w-full bg-transparent border-0 border-b border-gray-divider pb-2 px-0 text-navy-dark placeholder:text-gray-300 focus:ring-0 focus:border-navy-dark transition-colors" />

              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-gray-light tracking-wider uppercase mb-2">

                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-0 border-b border-gray-divider pb-2 px-0 text-navy-dark placeholder:text-gray-300 focus:ring-0 focus:border-navy-dark transition-colors resize-none">
                </textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-navy-dark text-white rounded-full font-medium hover:bg-navy-dark/90 transition-colors">

                  Send Message <SendIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>);

}