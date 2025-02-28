import React from 'react';
import { Users, Award, Clock, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, label: 'Years of Experience', value: '15+', icon: Clock },
    { id: 2, label: 'Completed Projects', value: '200+', icon: Lightbulb },
    { id: 3, label: 'Design Awards', value: '25', icon: Award },
    { id: 4, label: 'Team Members', value: '30', icon: Users }
  ];
  
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Principal Architect & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      bio: 'With over 20 years of experience, Sarah leads our team with a passion for sustainable design and innovative solutions.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      bio: 'Michael specializes in commercial architecture and has led some of our most complex and high-profile projects.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Interior Design Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      bio: 'Emma brings spaces to life with her keen eye for detail and ability to create harmonious, functional interiors.'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Urban Planning Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      bio: 'David expertise in urban design helps create sustainable, community-focused developments that stand the test of time.'
    }
  ];
  
  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1545079968-1feb95494244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Architecture studio" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate architects and designers dedicated to creating spaces that inspire and endure.
          </p>
        </div>
      </div>
      
      {/* Our story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010 by Sarah Johnson, VibrantSpaceDesigns began as a small studio with a big vision: to create architecture that positively impacts people's lives and the environment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've grown into a diverse team of architects, designers, and planners united by our commitment to innovative, sustainable design. We've completed projects across residential, commercial, healthcare, and public sectors, earning recognition for our thoughtful approach and attention to detail.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to push boundaries and explore new possibilities in architecture, always with the goal of creating spaces that are not just beautiful, but meaningful, functional, and sustainable.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Our studio" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.id} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-amber-700" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide our approach to every project we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace creative thinking and new technologies to push the boundaries of what's possible in architecture and design.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We design with the future in mind, creating environmentally responsible buildings that minimize resource use and maximize efficiency.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We believe the best results come from working closely with our clients, listening to their needs, and incorporating their vision into every aspect of the design.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented architects and designers behind our award-winning projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-amber-700 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;