import { Helmet } from "react-helmet";
import { Mail, User, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Seaholm Investing Club</title>
        <meta 
          name="description" 
          content="Get in touch with Seaholm Investing Club. Contact us for questions about membership, meetings, or financial literacy programs." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about joining our club or want to learn more about our programs? 
              Reach out to us directly!
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Student Contact</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a 
                        href="mailto:student@seaholminvesting.club" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        student@seaholminvesting.club
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Faculty Advisor</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a 
                        href="mailto:advisor@seaholminvesting.club" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        advisor@seaholminvesting.club
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Involved</h3>
                <p className="text-gray-600 mb-6">
                  Ready to start your investing journey? Join us for our weekly meetings and discover 
                  the world of finance and investing with fellow Seaholm students.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/remind" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Join Our Club
                  </a>
                  <a 
                    href="/resources" 
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Resources
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
