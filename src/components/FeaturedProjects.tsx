import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const FeaturedProjects: React.FC = () => {
  // Get the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-lg text-gray-600">Explore our most innovative architectural designs</p>
          </div>
          <Link 
            to="/projects" 
            className="hidden sm:flex items-center text-amber-700 hover:text-amber-800 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;