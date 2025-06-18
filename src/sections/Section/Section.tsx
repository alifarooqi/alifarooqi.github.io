import React, { ReactNode, ReactElement, forwardRef } from 'react';
import './Section.scss';

interface SectionProps {
  sectionHeader: string;
  headerIcon: ReactElement;
  extraClass?: string;
  children?: ReactNode;
}

// Using forwardRef to allow ref forwarding if needed
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionHeader, headerIcon, extraClass = '', children }, ref) => (
    <div className="section-wrapper" ref={ref}>
      <div className={extraClass ? `section ${extraClass}` : 'section'}>
        <h2 className="section-header">
          { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          { /* @ts-ignore */ }
          {React.cloneElement(headerIcon, { classes: { root: 'section-header-icon' } })}
          {sectionHeader}
        </h2>
        <div className="section-content">
          {children}
        </div>
      </div>
    </div>
  )
);

Section.displayName = 'Section';

export default Section;