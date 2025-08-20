import React, { ReactNode, ReactElement, forwardRef, useRef, useEffect } from 'react';
import { motion, useInView, Variants } from 'motion/react'
import './Section.scss';
import MotionDiv from '../../animaiton/MotionDiv';
import { slideInLeft, slideInRight } from '../../animaiton/presets';

interface SectionProps {
  sectionHeader: string;
  headerIcon: ReactElement;
  isReversed?: boolean; // Optional prop to reverse the section layout
  extraClass?: string;
  children?: ReactNode;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }, // delay between each child animation
}




const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionHeader, headerIcon, extraClass = '', children, isReversed = false }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    // Combine forwarded ref and internal ref
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(internalRef.current);
      } else {
        ref.current = internalRef.current;
      }
    }, [ref]);

    
    const isInView = useInView(internalRef, { amount: 0.2, once: true })

    return (
    <motion.section 
      className={`section-wrapper ${extraClass ? extraClass : ''}`} 
      ref={internalRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <div className={`section ${isReversed ? 'section-reverse' : '' }`}>
        <h2 className="section-header">
          { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          { /* @ts-ignore */ }
          {React.cloneElement(headerIcon, { classes: { root: 'section-header-icon' } })}
          {sectionHeader}
        </h2>
        <MotionDiv variants={isReversed ? slideInLeft : slideInRight} className="section-content">
          {children}
        </MotionDiv>
      </div>
    </motion.section>
  )
}
);

Section.displayName = 'Section';

export default Section;