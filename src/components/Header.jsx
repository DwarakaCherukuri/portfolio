import React, { useState, useEffect } from 'react';

const Header = () => {
  // State to track if the header should be sticky
  const [isSticky, setIsSticky] = useState(false);
  // State to track which section is currently in view
  const [activeSection, setActiveSection] = useState('home');
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handler function to check scroll position and determine if header should be sticky
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener when component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Create a function to determine which section is currently in view
    const determineActiveSection = () => {
      // Get all sections we want to track - UPDATED to include certifications and about
      const sections = ['home', 'skills', 'projects', 'research', 'certifications', 'about'];
      
      // Find which section is currently most visible in the viewport
      // We'll use the one with the top closest to the top of the viewport
      let currentSection = 'home'; // Default to home
      let minDistance = Infinity;
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Get the position relative to the viewport
          const rect = element.getBoundingClientRect();
          // Calculate distance from top (with a small offset to improve detection)
          const distance = Math.abs(rect.top - 100);
          
          // If this section is closer to the top of viewport than previous sections
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = sectionId;
          }
        }
      });
      
      // Update active section state if it's changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Call the function once to initialize
    determineActiveSection();
    
    // Add scroll event listener for determining active section
    window.addEventListener('scroll', determineActiveSection);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', determineActiveSection);
    };
  }, [activeSection]); // Dependency array includes activeSection to properly compare previous state

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Regular header (visible when not scrolled) */}
      {!isSticky && (
        <header className="py-8 px-4 md:px-8 lg:px-16 w-full">
          <nav className="flex justify-between items-center">
            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-12">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('research')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('certifications')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-black hover:text-gray-700 font-medium cursor-pointer"
              >
                About
              </button>
            </div>

            {/* Mobile menu button - only visible on mobile */}
            <button 
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <div className="relative group">
            <span className="font-medium" style={{ fontFamily: "'American Typewriter', 'Courier New', monospace", letterSpacing: "0.05em" }}>
              Dwaraka Mai Cherukuri
            </span>
              {/* Sparkle elements */}
              <span className="absolute -top-1 -left-2 text-[#E5A088] opacity-0 group-hover:opacity-100 transition-opacity duration-300">✦</span>
              <span className="absolute -top-1 -right-2 text-[#E5A088] opacity-0 group-hover:opacity-100 transition-opacity duration-500">✧</span>
              <span className="absolute -bottom-1 -left-1 text-[#E5A088] opacity-0 group-hover:opacity-100 transition-opacity duration-400">⋆</span>
              <span className="absolute -bottom-1 -right-1 text-[#E5A088] opacity-0 group-hover:opacity-100 transition-opacity duration-600">✦</span>
            </div>
          </nav>

          {/* Mobile menu dropdown - shown when menu is open */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-50">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('research')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Research
                </button>
                <button 
                  onClick={() => scrollToSection('certifications')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Certifications
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-black hover:text-gray-700 font-medium cursor-pointer text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  About
                </button>
              </div>
            </div>
          )}
        </header>
      )}

      {/* Sticky header - adapted for mobile */}
      <header 
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-auto py-3 px-4 md:px-8 
        bg-orange-200 rounded-full shadow-md z-50 
        transition-all duration-300 ease-in-out
        ${isSticky ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <nav>
          {/* Desktop menu buttons */}
          <div className="hidden md:flex space-x-6 md:space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'home' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'skills' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'projects' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('research')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'research' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('certifications')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'certifications' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`font-medium cursor-pointer transition-all duration-200 
                        ${activeSection === 'about' 
                          ? 'text-gray bg-white bg-opacity-30 px-4 py-1 rounded-full' 
                          : 'text-gray hover:text-gray-200'}`}
            >
              About
            </button>
          </div>

          {/* Mobile menu in sticky header */}
          <div className="md:hidden flex items-center justify-between">
            {/* Show current section name */}
            <span className="font-medium capitalize text-gray">
              {activeSection}
            </span>
            
            {/* Hamburger menu button */}
            <button 
              className="ml-4 text-gray focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown for sticky header */}
        {isSticky && isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-50">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'home' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'skills' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'projects' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('research')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'research' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('certifications')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'certifications' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`text-left px-2 py-1 rounded ${activeSection === 'about' ? 'bg-orange-100 font-medium' : 'hover:bg-gray-100'}`}
              >
                About
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;