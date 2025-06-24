/**
 * This is the config file where you can edit information as you want.
 * 
 * There are 3 variable objects which contain all the information.
 * 
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 * 
 * So what are you waiting for? GO FOR IT!
 */

import React, { ReactNode } from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import InfoIcon from '@mui/icons-material/Info';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Description from '@mui/icons-material/Description';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// --- Types ---

export interface SocialLink {
  name: string;
  link: string;
  icon?: ReactNode;
}

export interface SignatureConfig {
  viewBox: string;
  signaturePathD: string;
}

export interface CommonConfigType {
  addFreePalestine: boolean;
  name: string;
  tagline: string;
  signature: SignatureConfig;
  profilePicture: string;
  email: string;
  social: SocialLink[];
}

export interface ProjectLink {
  tooltip: string;
  link: string;
  icon: ReactNode;
}

export interface Project {
  name: string;
  icon: ReactNode;
  description: string;
  links: ProjectLink[];
}

export interface ProjectsConfigType {
  name: string;
  headerIcon: ReactNode;
  extraClass: string;
  projects: Project[];
}

export interface CustomSection {
  name: string;
  headerIcon: React.ReactElement;
  extraClass?: string;
  notInMenu?: boolean;
  content: React.ReactNode;
}

// --- Configs ---

const CommonConfig: CommonConfigType = {
  addFreePalestine: false,
  name: 'Ali Farooqi',
  tagline: 'Software Engineer',
  signature: {
    viewBox: '0 0 434 365',
    signaturePathD: `M123.947 44.0071C123.947 45.8596 129.44 63.538 140.427 97.0421C156.907 147.298 163.409 167.217 176.407 207.049C189.405 246.881 206.881 299.532 228.862 365.004H248.829L125.801 0H122.089L0 365.004H19.0314L123.947 44.0071ZM115.592 261.242H98.882L126.732 364.996H143.446L115.592 261.242ZM321.5 216L321 52.5H336.5V40.5H309.176V202L321.5 216ZM433.123 12.9692V0.00432162H309.176V12.9692H433.123ZM332 204H367V216H332V204ZM321.215 241V361.035H309.215V228L321.215 241Z`,
  },
  profilePicture: '',
  email: 'm.ali_farooqi@hotmail.com',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/alifarooqi',
      icon: Icons['github'],
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/ali-farooqi',
    },
    {
      name: 'Facebook',
      link: 'https://facebook.com/9inpachi',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/9inpachi',
    },
    {
      name: 'Email',
      link: 'mailto:m.ali_farooqi@hotmail.com',
    },
    {
      name: 'CV',
      link: 'https://docs.google.com/document/d/15uVQAhsvKsreOd9Xvh9f-HGMkqpI_7dMuSKmQQvFdCo/view?usp=sharing',
      icon: <Description />,
    },
  ],
};

const ProjectsConfig: ProjectsConfigType = {
  name: 'projects',
  headerIcon: <ComputerIcon />,
  extraClass: '',
  projects: [
    {
      name: 'Interactive Maps Application',
      icon: Icons['map'],
      description:
        'An application extension in XWiki to easily create interactive maps with ability to share locations and associate structured data with areas.',
      links: [
        {
          tooltip: 'See source',
          link: 'https://github.com/xwiki-contrib/application-interactive-maps',
          icon: Icons['code'],
        },
        {
          tooltip: 'See app',
          link: 'https://extensions.xwiki.org/xwiki/bin/view/Extension/InteractiveMapsApplication/',
          icon: Icons['link'],
        },
      ],
    },
    {
      name: 'OpenCL code-generation backend for GPU-enhanced Neural Networks',
      icon: <SettingsInputAntennaIcon />,
      description:
        'GeNN is a GPU-enhanced Neuronal Network simulation environment based on code generation for NVIDIA CUDA. This project added a new OpenCL based backend to GeNN.',
      links: [
        {
          tooltip: 'See source',
          link: 'https://github.com/9inpachi/genn',
          icon: Icons['code'],
        },
      ],
    },
    {
      name: 'Phoenix',
      icon: <WbIridescentIcon />,
      description: 'A web-based experiment independent event display for High Energy Physics.',
      links: [
        {
          tooltip: 'See source',
          link: 'https://github.com/hsf/phoenix',
          icon: Icons['code'],
        },
        {
          tooltip: 'See app',
          link: 'https://hepsoftwarefoundation.org/phoenix/',
          icon: Icons['link'],
        },
      ],
    },
    {
      name: 'Empower Youth for Work - Oxfam GB',
      icon: <BusinessCenterIcon />,
      description:
        'A web system to manage beneficiaries information and keep track of beneficiaries influenced by the EYW project.',
      links: [
        {
          tooltip: 'See app',
          link: 'https://oipeywdb.com/',
          icon: Icons['link'],
        },
      ],
    },
  ],
};

const CustomSectionsConfig: CustomSection[] = [
  {
    name: 'projects',
    headerIcon: <ComputerIcon />,
    extraClass: '',
    notInMenu: false,
    content: (
      <>
        {ProjectsConfig.projects.map((project, index) => (
          <div key={'project-' + index}>
            <h3 style={{ fontSize: '1.4rem' }}>
              {project.icon} {project.name}
            </h3>
            <p>{project.description}</p>
            <div style={{ textAlign: 'right' }}>
              {project.links.map((link, linkIndex) => (
                <CircleButton
                  key={'project-link-' + index + linkIndex}
                  link={link.link}
                  target="_blank"
                  tooltip={link.tooltip}
                  size={1.4}
                >
                  {link.icon}
                </CircleButton>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    name: 'about',
    headerIcon: <InfoIcon />,
    extraClass: 'about-section section-reverse',
    content: (
      <>
        <h4>{Icons['helpoutline']} who is this guy?</h4>
        <p>
          An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. Full of eagerness to learn and work on new technologies. :)
        </p>

        <h4>{Icons['code']} programming</h4>
        <p className="programming-icons">
          {Icons['java']}
          {Icons['cpp']}
          {Icons['typescript']}
          {Icons['javascript']}
        </p>

        <h4>{Icons['web']} web</h4>
        <p className="programming-icons">
          {Icons['graphql']}
          {Icons['mysql']}
          {Icons['php']}
          {Icons['mongodb']}
          {Icons['nodejs']}
          {Icons['react']}
          {Icons['angular']}
        </p>
      </>
    ),
  },
  {
    name: 'reviews',
    headerIcon: <RateReviewIcon />,
    content: (
      <>
        <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
        <p>
          <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
          <br />
          Fawad did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
        </p>
        <p>We like that he is very motivated, self-driven and is already an experienced and knowledgable coder.</p>
        <p style={{ textAlign: 'right', fontSize: 'small' }}>
          <i>
            <b>Edward Moyse</b>
            <br />
            Software Coordinator
            <br />
            CERN
          </i>
        </p>
        <p>
          <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
          <br />
          The mentors have noticed that Fawad has strong technical skills, an ability to learn quickly new technologies, that he is very flexible and open minded, ready to discuss his views and to ponder about the pros and cons in a thoughtful and collected manner, making his own decisions taking into account the feedback he gets without accepting everything nor rejecting anything.
        </p>
        <p style={{ textAlign: 'right', fontSize: 'small' }}>
          <i>
            <b>Stéphane Lauriere &amp; Ecaterina Moraru</b>
            <br />
            XWiki SAS
          </i>
        </p>
        <p>
          <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
          <br />
          I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting. I feel you were mostly right :)
        </p>
        <p style={{ textAlign: 'right', fontSize: 'small' }}>
          <i>
            <b>James Knight</b>
            <br />
            GeNN Team
            <br />
            Research Fellow
            <br />
            The University of Sussex
          </i>
        </p>
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
