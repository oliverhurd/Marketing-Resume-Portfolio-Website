import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, FileTextIcon, FolderIcon, FolderOpenIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
interface NoteFile {
  name: string;
  content: string;
}
interface NoteFolder {
  name: string;
  files: NoteFile[];
}
const folders: NoteFolder[] = [{
  name: 'Content Strategy',
  files: [{
    name: 'The Content Flywheel',
    content: "The content flywheel is the idea that each piece of content should feed the next. A tweet becomes a thread, a thread becomes a newsletter, a newsletter becomes a video, and a video generates new tweets. Nothing is wasted — everything compounds.\n\nThe key insight is that repurposing isn't lazy. It's strategic. Your audience doesn't live on one platform. The same idea, reframed for different contexts, reaches different people at different stages of awareness.\n\nThe flywheel only works if you start with a strong core idea. Weak ideas don't survive repurposing — they just become weak content in multiple formats."
  }, {
    name: 'Distribution > Creation',
    content: "Most creators spend 90% of their time creating and 10% distributing. The ratio should be closer to 50/50.\n\nA great piece of content that nobody sees is worth less than a good piece of content that reaches the right people. Distribution isn't an afterthought — it's half the work.\n\nPractical framework: For every hour spent creating, spend an equal hour on distribution. Share it, repurpose it, engage with people who interact with it, and plant seeds for the next piece."
  }, {
    name: 'Writing for Trust',
    content: 'Trust-building content has specific characteristics:\n\n1. It acknowledges complexity instead of oversimplifying\n2. It shares failures alongside successes\n3. It gives away genuinely useful information\n4. It doesn\'t hedge or use weasel words\n5. It has a clear point of view\n\nThe opposite of trust-building content is "content marketing" that reads like it was written by a committee. Safe, generic, and forgettable.'
  }]
}, {
  name: 'Brand Building',
  files: [{
    name: 'Positioning Principles',
    content: "Good positioning answers three questions:\n\n1. Who is this for? (Be specific — \"everyone\" is not an answer)\n2. What problem does it solve? (The real problem, not the surface one)\n3. Why should they believe you? (Proof, not promises)\n\nThe best positioning feels obvious in hindsight. It's not about being clever — it's about being clear. If you need to explain your positioning, it's not working yet."
  }, {
    name: 'Voice & Tone Guide',
    content: 'Brand voice is who you are. Tone is how you adapt to context.\n\nOliver Hurd brand voice:\n- Confident but not arrogant\n- Substantive — every sentence earns its place\n- Conversational without being casual\n- Direct — says what it means\n- Warm but professional\n\nTone shifts:\n- Twitter: More casual, punchy, opinionated\n- Newsletter: Thoughtful, analytical, generous\n- YouTube: Educational, patient, thorough\n- Website: Editorial, polished, intentional'
  }]
}, {
  name: 'Growth Notes',
  files: [{
    name: 'Organic vs Paid',
    content: "The case for organic:\n\n- Lower CAC over time (compounds instead of depleting)\n- Higher quality audience (they chose you, not an algorithm)\n- Builds brand equity as a byproduct\n- More defensible — can't be outbid\n\nThe case for paid:\n- Faster initial traction\n- More predictable scaling\n- Easier to test messaging\n\nMy take: Start organic. Build the foundation. Use paid to accelerate what's already working — never to replace what isn't."
  }, {
    name: 'Community Flywheel',
    content: "The community flywheel:\n\n1. Create valuable content → attracts the right people\n2. Engage authentically → builds relationships\n3. Relationships create advocates → they share your work\n4. New people discover you → cycle repeats\n\nThe flywheel is slow to start and fast once spinning. Most people quit in the slow phase. The ones who don't are the ones who win."
  }, {
    name: 'Newsletter Growth Tactics',
    content: "What actually worked to grow to 6,500+ subscribers:\n\n1. Twitter → Newsletter pipeline (best converting channel)\n2. YouTube end-screen CTAs (surprisingly effective)\n3. Lead magnets that are genuinely useful (not gated fluff)\n4. Consistent publishing schedule (weekly, never missed)\n5. Word of mouth from existing subscribers\n\nWhat didn't work:\n- Cross-promotions with unrelated newsletters\n- Giveaways (high unsub rate)\n- Buying ads on other newsletters"
  }]
}, {
  name: 'Reading Notes',
  files: [{
    name: 'Obviously Awesome — April Dunford',
    content: 'Key takeaways from Obviously Awesome:\n\n- Positioning is not messaging. Positioning is the context that makes your messaging make sense.\n- Start with your best customers, not your total addressable market.\n- Competitive alternatives aren\'t just direct competitors — they\'re whatever your customer would do if you didn\'t exist.\n- The "positioning canvas" framework: competitive alternatives → unique attributes → value → target customer → market category.\n\nMost useful insight: "Customers need to be able to easily understand what your product is, who it\'s for, and why they should care — in that order."'
  }, {
    name: 'Building a StoryBrand — Donald Miller',
    content: 'The StoryBrand framework in one sentence: Your customer is the hero, you are the guide.\n\nThe 7-part framework:\n1. A character (your customer)\n2. Has a problem (external, internal, philosophical)\n3. Meets a guide (you — with empathy and authority)\n4. Who gives them a plan\n5. And calls them to action\n6. That helps them avoid failure\n7. And ends in success\n\nMost brands make the mistake of positioning themselves as the hero. Nobody wants another hero — they want a guide who understands their journey.'
  }]
}];
export function NotesPage() {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['Content Strategy']));
  const [activeNote, setActiveNote] = useState<NoteFile>(folders[0].files[0]);
  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderName)) {
        next.delete(folderName);
      } else {
        next.add(folderName);
      }
      return next;
    });
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
      }} className="mb-12 md:mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Notes
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl">
            A working collection of ideas, frameworks, and thinking-in-progress.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[60vh]">
          {/* Sidebar */}
          <motion.aside initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1]
        }} className="w-full md:w-72 lg:w-80 flex-shrink-0">
            <div className="md:sticky md:top-8 bg-surface-alt p-4 md:p-5">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-muted mb-4 px-2">
                Folders
              </p>
              <nav aria-label="Notes navigation">
                {folders.map((folder) => {
                const isOpen = openFolders.has(folder.name);
                return <div key={folder.name} className="mb-1">
                      <button onClick={() => toggleFolder(folder.name)} className="w-full flex items-center gap-2 px-2 py-2 text-sm text-primary hover:opacity-70 transition-opacity duration-150" aria-expanded={isOpen}>
                        <ChevronRightIcon className={`w-3.5 h-3.5 text-primary-muted transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                        {isOpen ? <FolderOpenIcon className="w-4 h-4 text-primary" /> : <FolderIcon className="w-4 h-4 text-primary-light" />}
                        <span className="font-medium">{folder.name}</span>
                      </button>

                      <AnimatePresence>
                        {isOpen && <motion.ul initial={{
                      opacity: 0,
                      height: 0
                    }} animate={{
                      opacity: 1,
                      height: 'auto'
                    }} exit={{
                      opacity: 0,
                      height: 0
                    }} transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1]
                    }} className="overflow-hidden">
                            {folder.files.map((file) => {
                        const isActive = activeNote.name === file.name;
                        return <li key={file.name}>
                                  <button onClick={() => setActiveNote(file)} className={`w-full flex items-center gap-2 pl-9 pr-2 py-1.5 text-sm transition-colors duration-150 ${isActive ? 'text-primary bg-primary/[0.05] border-l-2 border-primary ml-[-2px]' : 'text-primary-light hover:text-primary'}`}>
                                    <FileTextIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span className="truncate text-left">
                                      {file.name}
                                    </span>
                                  </button>
                                </li>;
                      })}
                          </motion.ul>}
                      </AnimatePresence>
                    </div>;
              })}
              </nav>
            </div>
          </motion.aside>

          {/* Content area */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.article key={activeNote.name} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -10
            }} transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}>
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-8">
                  {activeNote.name}
                </h2>
                <div>
                  {activeNote.content.split('\n\n').map((paragraph, i) => <p key={i} className="text-primary-light leading-relaxed mb-5 whitespace-pre-line">
                      {paragraph}
                    </p>)}
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>;
}