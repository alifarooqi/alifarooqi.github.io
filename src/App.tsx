import React, { useEffect, useRef } from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import FreePalestine from './components/FreePalestine/FreePalestine';

import { CustomSectionsConfig, CommonConfig } from './config';

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement>;
};

const App: React.FC = () => {
  const sectionRefs = useRef<SectionRefs>({});

  // Initialize refs for custom sections only once
  useEffect(() => {
    CustomSectionsConfig.forEach((customSection) => {
      if (!sectionRefs.current[customSection.name]) {
        sectionRefs.current[customSection.name] = React.createRef<HTMLElement>();
      }
    });
    // eslint-disable-next-line
  }, []);

  // Theme and document title logic
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    } else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    }
    document.title = CommonConfig.name + ' - ' + CommonConfig.tagline;
  }, []);

  return (
    <>
      {CommonConfig.addFreePalestine && <FreePalestine />}
      <Menu sectionRefs={sectionRefs.current} />
      <TopSection />
      <CustomSections sectionRefs={sectionRefs.current} />
      <Footer />
    </>
  );
};

export default App;