import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Seaholm</span>
              <span className="text-secondary">Investing</span>
            </h3>
            <p className="text-gray-400">
              High School Investing & Finance Club dedicated to financial education and smart investing for students.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition duration-150">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition duration-150">Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-150">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/remind">
                  <a className="text-gray-400 hover:text-white transition duration-150">Remind</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Investment Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Financial Calculators</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Educational Videos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Club Documents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for monthly investing tips.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none border-r-0 text-gray-900 focus:ring-primary" 
              />
              <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                →
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} High School Investing & Finance Club. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
