import React from 'react';
import TimelineItem from './ui/TimelineItem';
import Tag from './ui/Tag';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="bg-dark-green text-cream py-24 px-6 md:px-12 border-t-[10px] border-orange">
      <div className="max-w-6xl mx-auto mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <h2 className="font-display text-5xl md:text-7xl text-cream">My Resume</h2>
        <a href="/Soojal_bhardwaj_resume.pdf" download target="_blank" className="bg-orange text-black px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-cream hover:text-dark-green transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download PDF
        </a>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Education & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Education */}
          <div className="mb-20">
            <h2 className="font-display text-5xl mb-12 text-orange">Education</h2>
            <TimelineItem 
              year="2021–2025" 
              title="Bachelor of Technology" 
              description="Computer Science Engineering\nUniversity/Institute Name" 
            />
            <TimelineItem 
              year="2019–2021" 
              title="Higher Secondary" 
              description="Science (PCM)\nHigh School Name" 
            />
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-display text-5xl mb-8 text-orange">Experience</h2>
            <div className="bg-orange text-black p-8 md:p-10 shadow-2xl relative">
              <TimelineItem 
                year="2024" 
                title="AI Engineer & Full-Stack" 
                description="Built AI assistants, custom LLMs, and intelligent automation systems using Python and modern web frameworks." 
                dark
              />
              <TimelineItem 
                year="2023" 
                title="Business CRM Developer" 
                description="Designed and developed production-ready CRM platforms for education and healthcare sectors with Next.js and PostgreSQL." 
                dark
              />
              
              <div className="mt-12 flex flex-wrap gap-2">
                <Tag>#AI_Engineering</Tag>
                <Tag>#LLMs</Tag>
                <Tag>#Automation</Tag>
                <Tag>#CRMs</Tag>
                <Tag>#SaaS</Tag>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl mb-12 lg:mb-[7.5rem] hidden lg:block invisible">Skills</h2>
          
          <div className="mb-16">
            <h3 className="font-sans font-bold text-lg mb-6 tracking-widest uppercase text-cream/70 border-b border-cream/20 pb-4">Software & AI Tools</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">CANVA</div>
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">FIGMA</div>
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">N8N</div>
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">OPAL</div>
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">ANTIGRAVITY</div>
              <div className="px-4 py-3 bg-cream/10 font-bold text-sm md:text-base font-sans rounded text-orange shadow-inner">STITCH</div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-sans font-bold text-lg mb-6 tracking-widest uppercase text-cream/70 border-b border-cream/20 pb-4">Engineering Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans font-medium">
              <div>
                <div className="text-orange mb-2 text-sm uppercase tracking-wider">AI / ML</div>
                <div className="text-cream/90 leading-relaxed text-sm">
                  Python<br/>
                  LLMs<br/>
                  AI Agents<br/>
                  NLP<br/>
                  Local AI
                </div>
              </div>
              <div>
                <div className="text-orange mb-2 text-sm uppercase tracking-wider">Frontend & UI</div>
                <div className="text-cream/90 leading-relaxed text-sm">
                  ReactJS / Next.js<br/>
                  TypeScript<br/>
                  SvelteJS<br/>
                  GSAP<br/>
                  React Query
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-orange mb-2 text-sm uppercase tracking-wider">Backend & Data</div>
                <div className="text-cream/90 leading-relaxed text-sm">
                  NodeJS / APIs<br/>
                  PostgreSQL / Database Design<br/>
                  Auth / Business Logic<br/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-12">
            <span className="bg-black text-cream px-5 py-2 font-sans text-sm rounded-full shadow-lg">AI Engineering</span>
            <span className="bg-black text-cream px-5 py-2 font-sans text-sm rounded-full shadow-lg">Full-Stack Web</span>
            <span className="bg-black text-cream px-5 py-2 font-sans text-sm rounded-full shadow-lg">UI / Frontend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Resume;
