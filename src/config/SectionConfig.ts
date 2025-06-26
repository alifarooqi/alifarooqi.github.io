import { RefObject } from 'react';
import { getIcon } from '../assets/icons/Icons';


// Type for section refs
export type Sections = 'projects' | 'about' | 'review';
export type SectionRefs = Record<Sections, RefObject<HTMLDivElement>>;

export interface SectionConfigType {
  key: Sections;
  name: string;
  headerIcon: React.ReactElement;
  notInMenu?: boolean;
}

const SectionConfig: SectionConfigType[] = [
  {
    key: 'projects',
    name: 'Projects',
    headerIcon: getIcon('projectSection'),
  },
  {
    key: 'about',
    name: 'About',
    headerIcon: getIcon('aboutSection'),
  },
  {
    key: 'review',
    name: 'Reviews',
    headerIcon: getIcon('reviewSection'),
  },
];

export default SectionConfig;
