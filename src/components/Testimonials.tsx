import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "VibrantSpaceDesigns transformed our vision into reality. Their attention to detail and innovative approach resulted in a home that exceeds our expectations.",
    author: "Sarah Johnson",
    position: "Residential Client"
  },
  {
    id: 2,
    content: "Working with the team at VibrantSpaceDesigns was a seamless experience. They understood our brand and created an office space that perfectly represents our company culture.",
    author: "Michael Chen",
    position: "CEO, TechInnovate"
  },
  {
    id: 3,
    content: "The renovation of our historical building was handled with exceptional care and expertise. VibrantSpaceDesigns preserved its character while adding modern functionality.",
    author: "Emma Rodriguez",
    position: "Heritage Foundation Director"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who have experienced our architectural services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <Quote className="h-8 w-8 text-amber-500 mb-4" />
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;