import React from 'react';
import { ProjectItem } from '../../utils/homeData';
import { Link } from 'react-router-dom';

interface ProjectShowcaseSectionProps {
  title: string;
  items: ProjectItem[];
}

const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({ title, items }) => (
  <section id="past-projects" className="bg-[#0f172a] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {items.map((project, index) => (
          <Link
            to={project.path}
            key={index}
            className="block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-full" 
          >
            <div 
              className={`${project.bgColor} h-48 flex items-center justify-center`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </div>
            
            <div className="bg-[#1f2937] p-6 flex-1 flex flex-col"> 
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2 text-left">{project.title}</h3>
                <p className="text-gray-200 text-base text-left">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectShowcaseSection;