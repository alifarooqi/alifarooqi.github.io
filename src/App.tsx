import React, { useEffect, useRef, createRef, lazy, Suspense } from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import Footer from './sections/Footer/Footer';

import { SectionRefs } from './config/SectionConfig';
import { Skeleton } from '@mui/material';
const ProjectSection = lazy(() => import('./sections/ProjectSection/ProjectSection'));
const AboutSection = lazy(() => import('./sections/AboutSection/AboutSection'));
const ReviewSection = lazy(() => import('./sections/ReviewSection/ReviewSection'));


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
      <Menu sectionRefs={sectionRefs.current} />
      <TopSection />

      <Suspense fallback={<Skeleton animation="wave" variant="rectangular" width="100%" height={300} sx={{ bgcolor: 'var(--text-secondary)' }} />}>
        <ProjectSection ref={sectionRefs.current.projects} />
        <AboutSection ref={sectionRefs.current.about} />
        <ReviewSection ref={sectionRefs.current.review} />
      </Suspense>

      <Footer />
    </>
  );
};

export default App;