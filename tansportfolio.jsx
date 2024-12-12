import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Linkedin, 
  Youtube, 
  Code, 
  FileText, 
  Home, 
  User, 
  Mail 
} from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const startPortfolio = () => {
    setIsWelcomePage(false);
  };

  const socialLinks = {
    linkedin: 'https://linkedin.com/in/tans',
    youtube: 'https://youtube.com/@tans'
  };

  const themeColors = {
    primary: '#6939E3',
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    cardBackground: isDarkMode ? '#1E1E1E' : '#F4F4F4'
  };

  // React Logo as an inline SVG component
  const ReactLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 hover:scale-110 transition-transform">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );

  // Express Logo as an inline SVG component
  const ExpressLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-16 h-16 hover:scale-110 transition-transform">
      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-5.719 6a.505.505 0 00-.28.125.443.443 0 00-.032.468C11.398 14.203 13.652 17 16 17s4.602-2.797 6.031-5.406a.443.443 0 00-.031-.469.505.505 0 00-.282-.125h-1.687c-.625 0-1.157.344-1.532.844-.969 1.297-2.211 1.156-2.48 0-.188-.625-.907-1.844-1.532-1.844H10.28z" fill="#000"/>
    </svg>
  );

  if (isWelcomePage) {
    return (
      <div 
        className="flex items-center justify-center h-screen" 
        style={{ 
          backgroundColor: themeColors.background, 
          color: themeColors.text 
        }}
      >
        <div className="text-center">
          <h1 
            className="text-5xl font-bold mb-6 animate-pulse"
            style={{ color: themeColors.primary }}
          >
            Tans Portfolio
          </h1>
          <button 
            onClick={startPortfolio}
            className="px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: themeColors.primary,
              color: 'white',
              boxShadow: `0 0 20px ${themeColors.primary}`,
            }}
          >
            Enter Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen p-8 transition-all duration-300" 
      style={{ 
        backgroundColor: themeColors.background, 
        color: themeColors.text 
      }}
    >
      {/* Theme Toggle */}
      <button 
        onClick={toggleMode} 
        className="fixed top-4 right-4 z-50 p-2 rounded-full transition-all hover:scale-110"
        style={{
          backgroundColor: themeColors.primary,
          color: 'white',
          boxShadow: `0 0 15px ${themeColors.primary}`
        }}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </button>

      {/* Header */}
      <header className="mb-16 text-center">
        <h1 
          className="text-6xl font-bold mb-4"
          style={{ color: themeColors.primary }}
        >
          Tans
        </h1>
        <p className="text-xl">Web Development Portfolio</p>
      </header>

      {/* About Section */}
      <section 
        className="mb-16 p-8 rounded-2xl shadow-lg"
        style={{ 
          backgroundColor: themeColors.cardBackground 
        }}
      >
        <h2 
          className="text-3xl mb-6"
          style={{ color: themeColors.primary }}
        >
          About Me
        </h2>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-4">
            <ReactLogo />
            <ExpressLogo />
          </div>
          <p>
            Passionate web developer specializing in React.JS and Express.JS, 
            creating dynamic and responsive web applications.
          </p>
        </div>
      </section>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-16">
        {Object.entries(socialLinks).map(([platform, link]) => (
          <a 
            key={platform}
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all hover:scale-110"
            style={{
              backgroundColor: themeColors.primary,
              color: 'white',
              boxShadow: `0 0 15px ${themeColors.primary}`
            }}
          >
            {platform === 'linkedin' ? <Linkedin /> : <Youtube />}
          </a>
        ))}
      </div>

      {/* Contact Section */}
      <section 
        className="p-8 rounded-2xl text-center"
        style={{ 
          backgroundColor: themeColors.cardBackground 
        }}
      >
        <h2 
          className="text-3xl mb-6"
          style={{ color: themeColors.primary }}
        >
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-4">
          <a 
            href="mailto:tans@example.com" 
            className="flex items-center space-x-2 px-6 py-3 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: themeColors.primary,
              color: 'white',
              boxShadow: `0 0 15px ${themeColors.primary}`
            }}
          >
            <Mail />
            <span>Contact Me</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
