import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Spaces That Inspire</h2>
              <p className="text-lg text-gray-600 mb-6">
                At VibrantSpaceDesigns, we believe that architecture is more than just buildings—it's about creating spaces that enhance lives, inspire creativity, and stand the test of time.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, our award-winning studio brings together a diverse team of architects, designers, and planners who share a passion for innovative, sustainable design. We approach each project with fresh eyes, collaborating closely with our clients to transform their vision into reality.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From residential homes to commercial complexes, urban planning to interior design, we bring the same level of dedication, creativity, and attention to detail to every project we undertake.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Modern architecture" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Interior design" 
                className="rounded-lg h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProjects />
      <Services />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Let's collaborate to create a design that reflects your vision, meets your needs, and exceeds your expectations.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-white text-amber-700 font-medium rounded-md hover:bg-amber-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;