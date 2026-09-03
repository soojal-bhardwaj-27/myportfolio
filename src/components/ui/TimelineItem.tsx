import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  dark?: boolean;
  link?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, dark = false, link }) => {
  const textColor = dark ? 'text-black' : 'text-cream';
  const descColor = dark ? 'text-black/80' : 'text-cream/80';

  return (
    <div className="grid grid-cols-[20px_80px_1fr] gap-4 mb-6 group relative">
      <div className="text-orange text-xl pt-0.5 leading-none transition-transform group-hover:scale-125">✦</div>
      <div className={`font-sans font-medium ${textColor} leading-tight`}>{year}</div>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-sans font-bold ${textColor} mb-1 leading-tight hover:text-orange transition-colors`}>
            {title}
            <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-orange">↗</span>
          </a>
        ) : (
          <h4 className={`font-sans font-bold ${textColor} mb-1 leading-tight`}>{title}</h4>
        )}
        <p className={`font-sans ${descColor} text-sm whitespace-pre-line leading-relaxed`}>{description}</p>
      </div>
    </div>
  );
};
export default TimelineItem;
