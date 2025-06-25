import React, { RefObject } from 'react';
import Section from '../../components/Section/Section';
import { CustomSectionsConfig } from '../../config';
import './CustomSections.scss';

// Type for section refs
export type SectionRefs = Record<string, React.RefObject<HTMLDivElement>>;

interface CustomSectionsProps {
  sectionRefs: SectionRefs;
}

const CustomSections: React.FC<CustomSectionsProps> = ({ sectionRefs }) => (
  <>
    {CustomSectionsConfig.map((section, index) => (
      <Section
        key={`section-${index}`}
        ref={sectionRefs[section.name]}
        sectionHeader={section.name}
        headerIcon={section.headerIcon}
        extraClass={section.extraClass ?? ''}
      >
        {section.content}
      </Section>
    ))}
  </>
);

export default CustomSections;