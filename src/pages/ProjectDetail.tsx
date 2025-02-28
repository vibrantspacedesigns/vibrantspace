import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, MapPin, Calendar, User, CheckCircle } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative h-[60vh]">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-white hover:text-amber-300 font-medium mb-4"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-xl text-gray-200">{project.category}</p>
          </div>
        </div>
      </div>
      
      {/* Project details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {project.description}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.images.map((image, index) => (
                <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Year Completed</p>
                    <p className="text-gray-900 font-medium">{project.year}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="text-gray-900 font-medium">{project.client}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Interested in a similar project?</h3>
                <p className="text-gray-700 mb-4">
                  Contact us to discuss how we can bring your vision to life.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full px-4 py-2 bg-amber-600 text-white text-center font-medium rounded-md hover:bg-amber-700 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;