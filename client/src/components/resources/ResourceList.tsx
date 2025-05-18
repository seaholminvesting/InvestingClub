import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Resource } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

const resources: Resource[] = [
  {
    id: 1,
    title: "Introduction to Stock Market Investing",
    description: "Learn the basics of the stock market, how to evaluate companies, and make your first investment.",
    image: "https://pixabay.com/get/g2ad5f1e7c1d4b3f82ba18076a48ccb9a87cac87afaa08f2a9d6edb25d2e56900266eaf5531ce230aa43fe4ca69e4d7b94d920134f8be6ef065fe31d44940064f_1280.jpg",
    category: "beginner",
    readTime: "5 min read",
    link: "#"
  },
  {
    id: 2,
    title: "Creating Your First Budget",
    description: "Master the art of budgeting with our step-by-step guide designed for students and young adults.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "beginner",
    readTime: "7 min read",
    link: "#"
  },
  {
    id: 3,
    title: "Best Investing Apps for Beginners",
    description: "Compare the top investing platforms and apps that are perfect for young investors just starting out.",
    image: "https://pixabay.com/get/gf7d1e40156cbd4b76ec27cf0c4dd37b619caa247077c6e3ebfdfd276de89849a605bf6ac5387477a02d75ecb1c4e584fce9c598503853aa1efdeb61c4932f777_1280.jpg",
    category: "intermediate",
    readTime: "10 min read",
    link: "#"
  },
  {
    id: 4,
    title: "Understanding Index Funds",
    description: "Watch our comprehensive guide to index funds and why they're often recommended for new investors.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "video",
    readTime: "15 min video",
    link: "#"
  },
  {
    id: 5,
    title: "Building an Emergency Fund",
    description: "Learn why having an emergency fund is critical and how to start building one even with limited income.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "beginner",
    readTime: "6 min read",
    link: "#"
  },
  {
    id: 6,
    title: "The Power of Compound Interest",
    description: "Discover how starting to invest early can lead to significant wealth growth over time through compounding.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "intermediate",
    readTime: "8 min read",
    link: "#"
  }
];

const ResourceList = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredResources = activeTab === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Financial Education Resources</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Access our curated collection of resources to enhance your financial knowledge and investing skills.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
        <div className="bg-gray-50 py-4 rounded-t-lg px-4">
          <TabsList className="flex flex-wrap justify-center mx-auto max-w-3xl border-b border-gray-200 w-full">
            <TabsTrigger value="all" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              All Resources
            </TabsTrigger>
            <TabsTrigger value="beginner" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              Investing Basics
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              Personal Finance
            </TabsTrigger>
            <TabsTrigger value="video" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              Videos & Podcasts
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value={activeTab} className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge 
                      variant="outline" 
                      className={`px-2.5 py-0.5 rounded-full ${
                        resource.category === 'beginner' 
                          ? 'bg-primary-50 text-primary border-primary-100' 
                          : resource.category === 'intermediate' 
                          ? 'bg-secondary-50 text-secondary border-secondary-100' 
                          : 'bg-accent-50 text-accent border-accent-100'
                      }`}
                    >
                      {resource.category === 'beginner' ? 'Beginner' : 
                       resource.category === 'intermediate' ? 'Intermediate' : 'Video'}
                    </Badge>
                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link} 
                    className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                  >
                    {resource.category === 'video' ? (
                      <>
                        Watch Video
                        <Play className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Terms Glossary</h3>
            <p className="text-gray-600">
              Download our comprehensive glossary of investment terms to help you navigate financial jargon with confidence.
            </p>
          </div>
          <Button className="flex-shrink-0 bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
