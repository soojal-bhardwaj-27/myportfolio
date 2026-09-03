import React from 'react';
import TimelineItem from './ui/TimelineItem';
import { motion } from 'framer-motion';

const BottomInfo: React.FC = () => {
  return (
    <section id="work" className="bg-cream text-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Languages */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl mb-12 text-burnt-orange">Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-black/10 pt-8">
            <div>
              <h4 className="font-sans font-bold text-xl">English</h4>
              <p className="font-sans text-black/70 mt-2">Fluent / Professional</p>
            </div>
            <div>
              <h4 className="font-sans font-bold text-xl">Hindi</h4>
              <p className="font-sans text-black/70 mt-2">Native / Bilingual</p>
            </div>
            <div>
              <h4 className="font-sans font-bold text-xl">French</h4>
              <p className="font-sans text-black/70 mt-2">Beginner</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl mb-12 text-burnt-orange">Projects</h2>
            <TimelineItem 
              year="AI" 
              title="Jarvis AI" 
              description="Built an AI-powered desktop assistant without depending on external APIs."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
            <TimelineItem 
              year="ML" 
              title="Custom LLM" 
              description="Explored and built a language-model system (training, inference, tokenization)."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
            <TimelineItem 
              year="SaaS" 
              title="Admission CRM" 
              description="Designed a full-stack CRM platform for managing college admission workflows."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
            <TimelineItem 
              year="B2B" 
              title="Homeopathy CRM" 
              description="Developed a specialized CRM for managing operational workflows and patient records."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
            <TimelineItem 
              year="Client" 
              title="Freelance Projects" 
              description="Built diverse client applications ranging from SaaS platforms to custom web tools."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
            <TimelineItem 
              year="Web" 
              title="UI / Frontend Projects" 
              description="Crafted interactive UI experiences using React, TypeScript, and GSAP."
              link="https://github.com/soojal-bhardwaj-27"
              dark
            />
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl mb-12 text-burnt-orange">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="text-orange text-3xl leading-none">○</div>
                <div>
                  <h4 className="font-sans font-bold text-lg">Gaming</h4>
                  <p className="font-sans text-black/70 text-sm mt-1">Strategy & Action</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange text-3xl leading-none">○</div>
                <div>
                  <h4 className="font-sans font-bold text-lg">Art & Design</h4>
                  <p className="font-sans text-black/70 text-sm mt-1">Digital Illustrations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange text-3xl leading-none">○</div>
                <div>
                  <h4 className="font-sans font-bold text-lg">Tech Reading</h4>
                  <p className="font-sans text-black/70 text-sm mt-1">New Frameworks</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange text-3xl leading-none">○</div>
                <div>
                  <h4 className="font-sans font-bold text-lg">Music</h4>
                  <p className="font-sans text-black/70 text-sm mt-1">Lo-Fi & Synthwave</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default BottomInfo;
