import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Seaholm Investing Club was founded in 2019 with a clear mission: to provide students with the knowledge and tools needed to build financial literacy and investing skills that will serve them throughout their lives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our club members range from complete beginners to advanced students who have been managing their own investment portfolios. We welcome all skill levels and interests, providing a supportive environment where students can learn, practice, and grow their financial understanding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through weekly meetings, workshops, guest speakers, and hands-on activities, we aim to demystify the world of finance and equip Seaholm High School students with practical knowledge about saving, investing, and building wealth that they can apply immediately and carry with them into adulthood.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students in Seaholm Investing Club meeting"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: "400px" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;