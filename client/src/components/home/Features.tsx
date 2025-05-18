import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Users, TrendingUp, Puzzle, Briefcase } from "lucide-react";
import { Feature } from "@/lib/utils";

const features: Feature[] = [
  {
    id: 1,
    title: "Investment Basics",
    description: "Learn the fundamentals of investing, including stocks, bonds, and mutual funds in an engaging environment.",
    icon: <BarChart3 className="h-10 w-10" />,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Financial Literacy",
    description: "Develop essential money management skills including budgeting, saving, and understanding credit.",
    icon: <BookOpen className="h-10 w-10" />,
    color: "text-secondary"
  },
  {
    id: 3,
    title: "Guest Speakers",
    description: "Learn from industry professionals including financial advisors, entrepreneurs, and business leaders.",
    icon: <Users className="h-10 w-10" />,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Investment Competitions",
    description: "Participate in simulated stock market competitions to practice investment strategies risk-free.",
    icon: <TrendingUp className="h-10 w-10" />,
    color: "text-primary"
  },
  {
    id: 5,
    title: "Hands-on Workshops",
    description: "Engage in interactive sessions covering personal finance topics and practical investing techniques.",
    icon: <Puzzle className="h-10 w-10" />,
    color: "text-secondary"
  },
  {
    id: 6,
    title: "Career Exploration",
    description: "Explore career paths in finance, business, and economics through mentorship and guidance.",
    icon: <Briefcase className="h-10 w-10" />,
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.id}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn("mb-4", feature.color)}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
