import React, { useEffect, useRef, createRef } from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import Footer from './sections/Footer/Footer';
import FreePalestine from './components/FreePalestine/FreePalestine';

import { SectionRefs } from './config/SectionConfig';
import CommonConfig from './config/CommonConfig';
import ProjectSection from './sections/ProjectSection/ProjectSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ReviewSection from './sections/ReviewSection/ReviewSection';


const App: React.FC = () => {
  const sectionRefs = useRef<SectionRefs>({
    projects: createRef<HTMLDivElement>(),
    about: createRef<HTMLDivElement>(),
    review: createRef<HTMLDivElement>(),
  } as SectionRefs);
  


  // Theme initialization
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <>
      {CommonConfig.addFreePalestine && <FreePalestine />}
      <Menu sectionRefs={sectionRefs.current} />
      <TopSection />
      <ProjectSection ref={sectionRefs.current.projects} />
      <AboutSection ref={sectionRefs.current.about} />
      <ReviewSection ref={sectionRefs.current.review} />
      <Footer />
    </>
  );
};

export default App;