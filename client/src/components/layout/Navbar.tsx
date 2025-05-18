import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
    { path: "/remind", label: "Remind" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      scrolled ? "bg-white shadow-sm" : "bg-white"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary">Invest</span>
                <span className="text-secondary">Ed</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link 
                key={route.path} 
                href={route.path}
                className={cn(
                  "nav-link font-medium transition-colors duration-150", 
                  location === route.path 
                    ? "text-gray-800 active" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {route.label}
              </Link>
            ))}
            <Button className="ml-4 bg-primary hover:bg-primary/90 text-white font-medium transition-transform hover:scale-105">
              Join Club
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "mobile-nav bg-white md:hidden absolute w-full shadow-md overflow-hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "open" : ""
        )}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
          {routes.map((route) => (
            <Link 
              key={route.path} 
              href={route.path}
              className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-200"
              onClick={closeMenu}
            >
              {route.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Join Club
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
