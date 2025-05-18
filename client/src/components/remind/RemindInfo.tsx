import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const RemindInfo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-gray-50 rounded-xl p-8 shadow-md mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 flex justify-center">
            <Clock className="h-48 w-48 text-primary" />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Remind?</h3>
            <p className="text-gray-600 mb-4">
              Remind is a communication platform that helps our club stay connected. Teachers, students, and parents can send and receive messages via:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Text messages
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Email
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Mobile app notifications
              </li>
            </ul>
            <p className="text-gray-600">
              You'll receive important updates about meeting times, event changes, and opportunities directly to your preferred device.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white border border-gray-200 rounded-xl shadow-md mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Join Our Remind Class</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary font-bold text-xl mb-4">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Text our Class Code</h4>
              <p className="text-gray-600">
                Text <span className="font-medium text-primary">@investclub</span> to <span className="font-medium text-primary">81010</span>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary font-bold text-xl mb-4">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Use the Remind App</h4>
              <p className="text-gray-600">
                Download the Remind app and enter our class code: <span className="font-medium text-primary">@investclub</span>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary font-bold text-xl mb-4">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Via Email</h4>
              <p className="text-gray-600">
                Send an email to <span className="font-medium text-primary">investclub@mail.remind.com</span>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              <a href="https://www.remind.com/join/investclub" target="_blank" rel="noopener noreferrer">
                Join via Remind Website
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RemindInfo;
