import React, { useState, useEffect } from 'react';

const MultiLanguageGreeting = ({ delay = 100, typingDelay = 100, pauseDelay = 1000, className = "" }) => {
  const greetings = [
    "Hello!",      // English
    "Namaste!",    // Hindi
    "Hola!",       // Spanish
    "Bonjour!",    // French
    "Ciao!",       // Italian
    "Konnichiwa!", // Japanese
    "Annyeong!",   // Korean
    "Ni hao!",     // Chinese
    "Vanakkam!",   // Tamil
  ];
  
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    let timeout;
    
    // If typing
    if (!isDeleting && currentIndex < greetings[currentGreeting].length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + greetings[currentGreeting][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingDelay);
    } 
    // If finished typing, pause before deleting
    else if (!isDeleting && currentIndex === greetings[currentGreeting].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setCurrentIndex(greetings[currentGreeting].length - 1);
      }, pauseDelay);
    } 
    // If deleting
    else if (isDeleting && currentIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, typingDelay / 2); // Delete faster than typing
    } 
    // If finished deleting, switch to next greeting
    else if (isDeleting && currentIndex < 0) {
      setIsDeleting(false);
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
      setCurrentIndex(0);
      setDisplayText("");
    }
    
    return () => clearTimeout(timeout);
  }, [currentGreeting, currentIndex, isDeleting, typingDelay, pauseDelay]);
  
  return (
    <span className={`typewriter-font ${className}`}>
      {displayText}
      <span className="inline-block w-1 h-full bg-navy-900 animate-pulse ml-1">|</span>
    </span>
  );
};

export default MultiLanguageGreeting;