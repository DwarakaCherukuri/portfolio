import React from 'react';
import { FaJs, FaHtml5, FaCss3, FaNodeJs, FaPython, FaReact, FaVuejs, FaGit, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiNetlify, SiAdobexd, SiFramer, SiTailwindcss, SiAdobeillustrator } from 'react-icons/si';

const MyStack = () => {
  const stackData = [
    {
      category: 'Technology',
      items: [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3 className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      ],
      outlineColor: 'stack-1', // Custom orange
    },
    {
      category: 'Libraries/Frameworks',
      items: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      ],
      outlineColor: 'stack-2', // Custom green
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: <FaGit className="text-red-500" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-blue-400" /> },
        { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
        { name: 'AdobeXD', icon: <SiAdobexd className="text-pink-500" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: 'Framer', icon: <SiFramer className="text-black" /> },
      ],
      outlineColor: 'stack-3', // Custom yellow
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      ],
      outlineColor: 'stack-4', // Custom dark green
    },
  ];

  return (
    <section className="py-12 min-h-screen flex flex-col justify-center">
      <div className="w-full px-4 h-[80vh]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 text-center mb-8">
          My Stack
        </h2>

        {/* PC Layout: 4 Vertical Column Cards Placed Horizontally */}
        <div className="hidden lg:flex lg:space-x-6 lg:justify-center lg:items-stretch h-full">
          {stackData.map((stack, index) => (
            <div
              key={index}
              className={`w-1/4 p-6 rounded-lg shadow-lg border ${
                stack.outlineColor === 'stack-1'
                  ? 'border-stack-1'
                  : stack.outlineColor === 'stack-2'
                  ? 'border-stack-2'
                  : stack.outlineColor === 'stack-3'
                  ? 'border-stack-3'
                  : 'border-stack-4'
              }`}
            >
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {stack.category}
              </h3>
              <ul className="space-y-2 flex-grow">
                {stack.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tablet Layout: 4x4 Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-6">
          {stackData.map((stack, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border ${
                stack.outlineColor === 'stack-1'
                  ? 'border-stack-1'
                  : stack.outlineColor === 'stack-2'
                  ? 'border-stack-2'
                  : stack.outlineColor === 'stack-3'
                  ? 'border-stack-3'
                  : 'border-stack-4'
              }`}
            >
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phone Layout: Vertical Column */}
        <div className="flex flex-col space-y-6 sm:hidden">
          {stackData.map((stack, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border ${
                stack.outlineColor === 'stack-1'
                  ? 'border-stack-1'
                  : stack.outlineColor === 'stack-2'
                  ? 'border-stack-2'
                  : stack.outlineColor === 'stack-3'
                  ? 'border-stack-3'
                  : 'border-stack-4'
              }`}
            >
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Padding at the bottom */}
      <div className="pb-12"></div>
    </section>
  );
};

export default MyStack;