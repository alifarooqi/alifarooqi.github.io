import React, { useEffect, useRef, RefObject, createRef } from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import FreePalestine from './components/FreePalestine/FreePalestine';

import { CustomSectionsConfig, CommonConfig } from './config';
import ProjectsSection from './sections/ProjectSection/ProjectSection';

// Type for section refs
export type SectionRefs = Record<string, RefObject<HTMLDivElement>>;

const App: React.FC = () => {
  const sectionRefs = useRef<SectionRefs>({});

  // Initialize refs for custom sections only once
  useEffect(() => {
    CustomSectionsConfig.forEach((customSection) => {
      const name = customSection.name as string;
      if (!sectionRefs.current[name]) {
        sectionRefs.current[name] = createRef<HTMLDivElement>() as RefObject<HTMLDivElement>;
      }
    });
  }, []);

  // Theme and document title logic
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
      <ProjectsSection sectionRefs={sectionRefs.current} />
      <CustomSections sectionRefs={sectionRefs.current} />
      <Footer />
    </>
  );
};

export default App;