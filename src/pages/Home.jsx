import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import ShootingStars from '../components/ShootingStars';
import profileImage from '../components/images/IMG_7613.jpg';
import proj1image from '../components/images/resumatch icon.png';
import proj2image from '../components/images/portfolio.png';
import proj3image from '../components/images/redditbot.png';
import proj4image from '../components/images/dataviz.png';
import research1 from '../components/images/research1.jpg';
import research2 from '../components/images/research2.jpg';
import RollingGreeting from '../components/RollingGreeting';
import { FaLinkedin, FaGithub, FaJs, FaHtml5, FaCss3, FaNodeJs, FaPython, FaReact, FaVuejs, FaGit, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiNetlify, SiAdobexd, SiFramer, SiTailwindcss, SiAdobeillustrator } from 'react-icons/si';


const Home = () => {
  <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#20B2AA_100%)]]"></div>
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
        { name: 'Material UI', icon: <span className="text-blue-500">MUI</span> },
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
    <div className="flex flex-col relative">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFDAB9_100%)]"></div>
      <ShootingStars />
      <Header />
      
      {/* Home Section - Set to 100vh to fill the screen, but keep original positioning */}
      <section id="home" className="h-screen flex items-center">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFDAB9_100%)]"></div>      <div class="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#20B2AA_100%)]"></div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left content section - moved higher with more space below */}
            <div className="flex flex-col justify-start pt-24 md:pt-32 pb-32">
              <p className="text-lg mb-4">Hello!</p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 md:text-nowrap">
                I'm Dwaraka Mai.
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-8 md: text-nowrap">
                A Developer with a Designer's Eye.
              </h2>
              
              <p className="text-lg mb-12 max-w-md md:text-nowrap">
                I create functional and beautiful web experiences to enhance user interactions.
              </p>
              
              <div className="mb-8 flex flex-row space-x-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-black"
              >
                <FaLinkedin size={28} />
              </a>
              <a 
                href="https://github.com/DwarakaCherukuri" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub size={28} />
              </a>
            </div>
              
              <div className="flex space-x-4">
                <a href="mailto:dwarakacherukuri@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Email Me</Button>
                </a>
                <a href="https://drive.google.com/file/d/1j20DS-mgly2mCAjq-SXB-gYq7UF4ENZ2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">Resume</Button>
                </a>
              </div>
            </div>
       {/* <div className="hidden md:flex items-start justify-end relative h-full w-full" 
            style={{  */}
              {/* overflow: 'visible', 
              paddingRight: '30px',  // Add padding to prevent right edge cutting
              paddingBottom: '30px', // Add padding to prevent bottom edge cutting
              position: 'relative',
              zIndex: 10,
              minHeight: '500px'
            }}> */}
        {/* <div className="w-full h-full" style={{ 
            overflow: 'visible',
            transform: 'scale(0.95)', // Slightly scale down to ensure edges are visible */}
            {/* transformOrigin: 'center center'
            }}> */}
          {/* <SplineRobot
            height="100%" 
            width="100%" 
            customStyle={{ 
              transform: 'translateY(5%) translateX(30%)', // Y moves up down, X moves left right
              marginTop: '120px',
              overflow: 'visible',
              position: 'relative',
              zIndex: 10
            }} 
          /> */}
          
    
        {/* </div> */}
      {/* </div> */}
        </div>
        </div>
      </section>
      
      {/* Skills Section - Full height screen with updated layouts */}
      <section id="skills" className="h-screen flex items-center">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFDAB9_100%)]"></div>        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 flex flex-col h-full py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 text-left mb-8">
            My Stack
          </h2>

          <div className="flex-1 flex flex-col pb-16">
            {/* PC Layout: 4 Vertical Column Cards Placed Horizontally */}
            <div className="hidden lg:flex lg:space-x-6 lg:justify-between h-5/6">
              {stackData.map((stack, index) => (
                <div
                  key={index}
                  className={`w-1/4 p-6 rounded-lg border ${
                    stack.outlineColor === 'stack-1'
                      ? 'border-stack-1'
                      : stack.outlineColor === 'stack-2'
                      ? 'border-stack-2'
                      : stack.outlineColor === 'stack-3'
                      ? 'border-stack-3'
                      : 'border-stack-4'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-navy-900 mb-6 text-center">
                    {stack.category}
                  </h3>
                  <ul className="space-y-3">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tablet Layout: 2x2 Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-6 h-5/6">
              {stackData.map((stack, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border ${
                    stack.outlineColor === 'stack-1'
                      ? 'border-stack-1'
                      : stack.outlineColor === 'stack-2'
                      ? 'border-stack-2'
                      : stack.outlineColor === 'stack-3'
                      ? 'border-stack-3'
                      : 'border-stack-4'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-navy-900 mb-5 text-center">
                    {stack.category}
                  </h3>
                  <ul className="space-y-3">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Phone Layout: Vertical Column */}
            <div className="flex flex-col space-y-6 sm:hidden h-5/6 overflow-y-auto">
              {stackData.map((stack, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border ${
                    stack.outlineColor === 'stack-1'
                      ? 'border-stack-1'
                      : stack.outlineColor === 'stack-2'
                      ? 'border-stack-2'
                      : stack.outlineColor === 'stack-3'
                      ? 'border-stack-3'
                      : 'border-stack-4'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-navy-900 mb-4 text-center">
                    {stack.category}
                  </h3>
                  <ul className="space-y-3">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 flex flex-col py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 text-right mb-12">
            Selected Projects
          </h2>

          <div className="flex flex-col space-y-12">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Resume Analyzer</h3>
                  
                  <a href="https://youtu.be/Ko1eqSEKURQ" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
                  <button className="bg-[#FFDAB9] text-[#C25B3D] px-5 py-2 rounded-md font-medium border border-[#E9967A] hover:bg-[#FFE6D1] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    See it in Action
                  </button>
                  </a>
                  
                  <p className="text-gray-700 mb-6">Interactive web application that leverages NLP to match resumes with job descriptions, identifying skill gaps and providing personalized recommendations to improve job-seeking success.</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500">Python</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">FastAPI</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">NLP</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">JavaScript</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Bootstrap</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">MongoDB</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">CSS Animations</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href="https://github.com/DwarakaCherukuri/Resume_Analyzer" className="text-gray-700 hover:text-black" aria-label="GitHub">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    {/* <a href="#" className="text-gray-700 hover:text-black" aria-label="External Link">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <img 
                      src={proj1image} 
                      alt="Project screenshot" 
                      className="rounded-md shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Portfolio Website</h3>
                  
                  <a href="#" className="inline-block mb-6">
                    <button className="bg-[#FFDAB9] text-[#C25B3D] px-5 py-2 rounded-md font-medium border border-[#E9967A] hover:bg-[#FFE6D1] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
  See it in Action
</button>
                  </a>
                  
                  <p className="text-gray-700 mb-6">This website serves as both my portfolio showcase and a demonstration of my web development skills. Built from the ground up, it features responsive design, intuitive navigation, and seamless project display</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500">react</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">next.js</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Tailwind css</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">javascript</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href="https://youtu.be/-Cdiu8dzm_g" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black" aria-label="GitHub">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://www.reddit.com/user/Pretend_Homework_543/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black" aria-label="External Link">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <img 
                      src={proj2image}
                      alt="Project screenshot" 
                      className="rounded-md shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Reddit Bot</h3>
                  
                  <a href="https://youtu.be/qLy70EWYeSA" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
                  <button className="bg-[#FFDAB9] text-[#C25B3D] px-5 py-2 rounded-md font-medium border border-[#E9967A] hover:bg-[#FFE6D1] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    See it in Action
                  </button>
                  </a>
                  
                  <p className="text-gray-700 mb-6">A Python-based Reddit bot that automatically monitors programming subreddits and engages with users by providing contextual responses to relevant posts. 
</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500">Python</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Reddit API</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">PRAW</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">OAuth Authentication</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href="https://github.com/DwarakaCherukuri/RedditBot" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black" aria-label="GitHub">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black" aria-label="External Link">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <img 
                      src={proj3image}
                      alt="Project screenshot" 
                      className="rounded-md shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 4 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">Olympics Data Vizualization</h3>
                  
                  <a href="https://public.tableau.com/app/profile/dwaraka.mai.cherukuri/viz/Group3-OlympicsDataVisualization/FinalStory" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
                  <button className="bg-[#FFDAB9] text-[#C25B3D] px-5 py-2 rounded-md font-medium border border-[#E9967A] hover:bg-[#FFE6D1] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    See it in Action
                  </button>
                  </a>
                  
                  <p className="text-gray-700 mb-6">An interactive Tableau visualization exploring Olympic Games history, revealing gender participation evolution, age demographics, and medal distribution patterns across nations. The project highlights data-driven insights about global sports culture development and the Olympics' role in promoting diversity and excellence in athletics.</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500">Dashboard Design</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Tableau</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Excel</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    {/* <a href="#" className="text-gray-700 hover:text-black" aria-label="GitHub">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a> */}
                    <a href="https://public.tableau.com/app/profile/dwaraka.mai.cherukuri/viz/Group3-OlympicsDataVisualization/FinalStory" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black" aria-label="External Link">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <img 
                      src={proj4image} 
                      alt="Project screenshot" 
                      className="rounded-md shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section id="research">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFDAB9_100%)]"></div>        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-12">
            Research Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Publication 1 */}
            <div onClick={() => window.open('https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fycHquIAAAAJ&citation_for_view=fycHquIAAAAJ:u-x6o8ySG0sC', '_blank')}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-md transition-transform"
              >
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative w-full h-40">
                <img 
                  src={research1}
                  alt="Research publication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium mb-2">
                  Smart Analytics and AI for Managing Modern Performance Management Systems
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                <span className="inline-flex items-center mr-2">
                  <span className="mr-1">📅</span>
                    2023
                  </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Publication 2 */}
            <div onClick={() => window.open('https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fycHquIAAAAJ&citation_for_view=fycHquIAAAAJ:u5HHmVD_uO8C', '_blank')}
  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-md transition-transform"
>
            
              <div className="relative w-full h-40">
                <img 
                  src={research2}
                  alt="Research publication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium mb-2">
                  AR and VR in Manufacturing
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                <span className="inline-flex items-center mr-2">
                  <span className="mr-1">📅</span>
                    2023
                  </span>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex flex-col">
  <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FFDAB9_100%)]"></div>
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 flex-1 flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-12">
      Certifications
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Oracle Cloud Certification */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">Oracle Cloud Infrastructure</h3>
        <p className="text-sm text-gray-600 text-center mb-3">Generative AI Professional 2024</p>
        <div className="flex justify-center">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            Oracle
          </span>
        </div>
      </div>
      
      {/* Google UX Design Certificate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9a7 7 0 1 0 14 0A7 7 0 0 0 2 9z" />
            <path d="M16 9h6" />
            <path d="M19 6v6" />
            <path d="M9 16a5 5 0 0 1 5 5v1H4v-1a5 5 0 0 1 5-5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">UX Design Certificate</h3>
        <p className="text-sm text-gray-600 text-center mb-3">Professional UX Design Training</p>
        <div className="flex justify-center">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            Google
          </span>
        </div>
      </div>
      
      {/* Python Certificate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">Python</h3>
        <p className="text-sm text-gray-600 text-center mb-3">Programming & Development</p>
        <div className="flex justify-center">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            GUVI, Udemy
          </span>
        </div>
      </div>
      
      {/* Django Certificate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">Django</h3>
        <p className="text-sm text-gray-600 text-center mb-3">Web Framework & Development</p>
        <div className="flex justify-center">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            Udemy
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* About Section - Completely redesigned with creative elements */}
      <section id="about">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left column - Photo */}
            <div className="lg:col-span-2 flex justify-center">
  <div className="relative group" style={{ width: "90%", maxWidth: "400px" }}>
    {/* Background Polaroids (only visible on hover) */}
    <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {/* Second Polaroid in stack */}
      <div className="absolute top-2 left-2 w-full h-full bg-white p-4 shadow-md transform rotate-6 z-10">
      </div>
      {/* Third Polaroid in stack */}
      <div className="absolute top-4 left-1 w-full h-full bg-white p-4 shadow-md transform rotate-1 z-0">
      </div>
    </div>
    
    {/* Main Polaroid */}
    <div className="relative transform rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:translate-y-[-8px] z-20 bg-white p-4 shadow-xl">
      {/* Polaroid image container */}
      <div className="overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "min(70vh, 500px)" }}>
        <img 
          src={profileImage} 
          alt="Dwaraka Mai" 
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
    {/* Classic Polaroid white bottom space */}
    <div className="h-14 flex items-center justify-center">
      <p className="text-center text-gray-700 italic text-sm">
        New York City
      </p>
    </div>
                
                {/* Creative floating elements */}
                {/* <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-full shadow-md">
                  <div className="flex items-center space-x-2"> */}
                    {/* <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"> */}
                    {/* <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm font-medium"> New York City</span>
                  </div>
                </div> */}
                </div>
                
                {/* <div className="absolute -top-4 -left-4 bg-white py-2 px-4 rounded-full shadow-md">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm font-medium">Remote / New York</span>
                  </div>
                </div> */}
                
                {/* <div className="absolute top-1/2 -translate-y-1/2 -right-8 transform rotate-90 origin-left">
                  <div className="bg-gray-800 text-white py-1 px-4 rounded-full text-sm font-medium tracking-wide">
                    Developer & Designer
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Right column - Bio */}
            <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-semibold mb-4 greeting"> Hey! I'm Dwaraka</h3>            
            <p className="text-lg text-gray-700 leading-relaxed">
              - a digital explorer with a creative spirit and a knack for connecting with people! Born and raised in the vibrant city of Chennai, India, I packed my dreams (and way too many snacks) and moved to the US three years ago. It’s been an adventure ever since!
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              By day, I dive into the world of tech, but outside of that, you’ll probably find me sketching away on Procreate, turning ideas into colorful digital art. Animation is my favorite—it’s magical to see static drawings come to life, moving, breathing, and telling stories.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey has had some fun detours too! I once won an area-level Toastmasters contest (not quite a champion, but hey, still counts!), I’ve run workshops to help people conquer their fear of public speaking, and I even tried my hand at YouTube vlogging—just for fun.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m all about exploring new places, geeking out over cultural quirks, and reimagining digital experiences. Blending my Indian roots with my US adventures, I bring a unique twist to everything I create!
            </p>
              
            <div className="pt-6 flex space-x-4">
  {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
    </svg>
  </a> */}
  <a href="https://www.youtube.com/@_dwazzle_" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
  <a href="https://dribbble.com/dwazzle" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm10 12c0 .32-.02.645-.05.955a15.993 15.993 0 0 0-.32-1.79c-.134-.56-.325-1.092-.589-1.592.11.22.17.458.17.717 0 .86-.7 1.56-1.56 1.56a1.56 1.56 0 0 1-1.56-1.56 1.56 1.56 0 0 1 1.648-1.56c-.533-.192-1.115-.273-1.709-.19-.909.13-1.71.687-2.17 1.515-.735-.257-1.44-.636-2.04-1.16-.144-.254-.32-.49-.522-.698-.728.965-1.075 2.248-.635 3.54.08.237.194.46.327.67-.665.45-1.288.95-1.866 1.494-.662.626-1.25 1.323-1.724 2.093-.144.233-.27.471-.38.722H8.08a6.678 6.678 0 0 0 2.425-1.77C10.124 14.38 9.98 13.9 9.98 13.38c0-1.974 1.605-3.58 3.58-3.58 1.974 0 3.58 1.606 3.58 3.58a3.591 3.591 0 0 1-.801 2.277A6.686 6.686 0 0 0 18.828 14H20c0 .646-.082 1.275-.236 1.876.157-.172.3-.354.426-.552.545-.857.83-1.87.83-2.893-.002-2.785-2.133-5.055-4.744-5.35a8.04 8.04 0 0 0-2.306.097c-1.303.27-2.438.887-3.295 1.77.05-.024.103-.042.155-.042.397 0 .72.322.72.72a.718.718 0 0 1-.72.72.718.718 0 0 1-.72-.72c0-.2.082-.38.214-.512-.318.328-.604.687-.856 1.066-.44.668-.733 1.414-.864 2.21.194-.292.49-.472.813-.472.55 0 1 .448 1 1s-.45 1-1 1c-.512 0-.937-.384-.993-.892-.03.24-.047.486-.047.734 0 .776.156 1.52.457 2.212.172-.14.375-.222.617-.222.535 0 .97.435.97.97s-.435.97-.97.97a.973.973 0 0 1-.934-.71c.842 1.75 2.27 3.088 4.03 3.74-.07-.136-.11-.29-.11-.45 0-.55.448-1 1-1s1 .45 1 1-.448 1-1 1c-.122 0-.238-.026-.344-.07 1.562.503 3.198.503 4.75.01a.973.973 0 0 1-.406.09.968.968 0 0 1-.97-.97c0-.535.436-.97.97-.97s.97.435.97.97c0 .143-.03.28-.085.405 1.892-1.085 3.118-3.14 3.118-5.435 0-3.46-2.8-6.27-6.27-6.27-3.44 0-6.27 2.82-6.27 6.27 0 .51.06 1.02.18 1.5-.88 1.17-1.427 2.44-1.584 3.38-1.217-1.28-1.966-3.016-1.966-4.91C2 6.486 6.486 2 12 2s10 4.486 10 10z" clipRule="evenodd" />
    </svg>
  </a>
</div>
            </div>
          </div>
          
          {/* Quote section */}
          <div className="mt-16 border-t border-gray-200 pt-10 text-center">
            <blockquote className="text-lg italic text-gray-600">
            "Good design is obvious. Great design is transparent."
            </blockquote>
            <p className="mt-2 text-gray-500">— Joe Sparano</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      {/* Footer */}
<footer className="bg-[#E5A088] text-white py-8">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Dwaraka Mai. All rights reserved.
      </p>
    </div>
    
    <div className="flex space-x-6">
      <a href="mailto:dwarakacherukuri@gmail.com" className="text-white hover:text-gray-200">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/dwaraka-cherukuri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;