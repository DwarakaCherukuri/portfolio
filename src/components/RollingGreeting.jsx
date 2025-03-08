import React, { useState, useEffect } from 'react';

const RollingGreeting = () => {
  const greetings = [
    "Hello,",
    "Hola,",
    "Namaste,",
    "Bonjour,",
    "Ciao,",
    "Konnichiwa,",
    "Annyeong,",
    "Salaam,",
    "Zdravstvuyte,"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    let index = 0;
    
    const intervalId = setInterval(() => {
      index = (index + 1) % greetings.length;
      setCurrentGreeting(greetings[index]);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h3 className="text-2xl font-semibold mb-4">
      <span className="inline-block min-w-[120px]">{currentGreeting}</span> I'm Dwaraka Mai
    </h3>
  );
};

export default RollingGreeting;