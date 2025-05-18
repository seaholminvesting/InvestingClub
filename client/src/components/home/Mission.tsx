import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
          <p className="text-xl text-gray-600 mt-6">
            To empower high school students with financial knowledge and investing skills that will serve them throughout their lives, creating a foundation for financial independence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
