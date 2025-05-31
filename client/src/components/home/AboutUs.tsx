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
                The Seaholm Investing Club is an official 501(c)(3) nonprofit organization. We help students learn about investing, finance, and business through interactive presentations, engaging games, and guest speakers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We’re excited to partner with both Comerica and Huntington Banks to develop and manage our own investing portfolio. Throughout the course of the year, the Seaholm Investing Club will manage a portfolio of $350, taking input from members each meeting. At the conclusion of the year, we will partner with a charity to donate the appreciated sum. 
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