
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Compass } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm dark:bg-gray-900/90 dark:border-gray-800" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-orange-500" />
            <span className="text-2xl font-bold text-gradient">ExploreEase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-bold transition-colors ${
                isActive("/") 
                  ? "text-orange-600" 
                  : "text-foreground/80 hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-bold transition-colors ${
                isActive("/dashboard") 
                  ? "text-orange-600" 
                  : "text-foreground/80 hover:text-orange-600"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/itinerary"
              className={`text-sm font-bold transition-colors ${
                isActive("/itinerary") 
                  ? "text-orange-600" 
                  : "text-foreground/80 hover:text-orange-600"
              }`}
            >
              Itinerary
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="text-orange-700 dark:text-orange-400 hover:text-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/30">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-orange-gradient hover:opacity-90">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-orange-600" />
              ) : (
                <Menu className="h-6 w-6 text-orange-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-orange-100 dark:border-gray-800 animate-fade-in shadow-lg">
          <nav className="container mx-auto p-4 flex flex-col gap-2">
            <Link
              to="/"
              className={`text-sm font-bold transition-colors p-2 rounded-md ${
                isActive("/") ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600" : "hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-bold transition-colors p-2 rounded-md ${
                isActive("/dashboard") ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600" : "hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/itinerary"
              className={`text-sm font-bold transition-colors p-2 rounded-md ${
                isActive("/itinerary") ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600" : "hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Itinerary
            </Link>
            <div className="flex flex-col gap-2 mt-2 border-t border-orange-100 dark:border-gray-800 pt-2">
              <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-orange-gradient hover:opacity-90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
