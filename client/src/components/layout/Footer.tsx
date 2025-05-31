import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor:"#52090b" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Seaholm </span>
              <span className="text-white">Investing</span>
            </h3>
            <p className="text-gray-300">
              High school investing and finance club dedicated to financial education and smart investing for students.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/seaholm.investments/" className="text-gray-300 hover:text-white transition duration-150" aria-label="Instagram" target="_blank">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/seaholm-investing-club" className="text-gray-300 hover:text-white transition duration-150" aria-label="LinkedIn" target="_blank">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition duration-150">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition duration-150">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/remind" className="text-gray-300 hover:text-white transition duration-150">
                  Remind
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition duration-150">All Resources</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition duration-150">Websites</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition duration-150">Books</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition duration-150">YouTube and Media</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Seaholm Investing Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
