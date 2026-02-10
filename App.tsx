
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.tsx';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? 'mobile-scaling min-h-screen bg-white text-[#223442]' : 'desktop-scaling min-h-screen bg-white text-[#223442]'}>
      <HomePage isMobile={isMobile} />
    </div>
  );
};

export default App;