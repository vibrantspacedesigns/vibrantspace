import React from 'react';
import { Home, Building, PenTool, Landmark, Hammer } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Creating beautiful, functional homes tailored to your lifestyle and preferences.',
    icon: Home
  },
  {
    id: 2,
    title: 'Commercial Architecture',
    description: 'Designing innovative workspaces that enhance productivity and reflect your brand identity.',
    icon: Building
  },
  {
    id: 3,
    title: 'Interior Design',
    description: 'Crafting stunning interiors that balance aesthetics, functionality, and comfort.',
    icon: PenTool
  },
  {
    id: 4,
    title: 'Urban Planning',
    description: 'Developing sustainable urban solutions that create vibrant, livable communities.',
    icon: Landmark
  },
  {
    id: 5,
    title: 'Renovation & Restoration',
    description: 'Breathing new life into existing structures while preserving their historical significance.',
    icon: Hammer
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of architectural services to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;