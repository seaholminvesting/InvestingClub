import { Testimonial } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "This club completely changed my perspective on money. I've started investing with my allowance and already see results!",
    author: "Davis Nieman",
    position: "Senior",
    rating: 5
  },
  {
    id: 2,
    content: "The stock market competition was so fun and educational. I learned more about investing here than I ever did in regular classes.",
    author: "Leo Ballini",
    position: "Junior",
    rating: 5
  },
  {
    id: 3,
    content: "Meeting investment professionals and hearing their stories inspired me to consider a career in finance. This club has been invaluable.",
    author: "John Hofley",
    position: "Sophomore",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Members Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="text-accent-500 ml-1 first:ml-0">
                    <Star className="h-5 w-5 fill-current" style={{ color: "#FFB700", fill: "#FFB700" }}/>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="font-medium text-gray-900">{testimonial.author}, {testimonial.position}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
