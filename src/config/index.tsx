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
import ComputerIcon from '@mui/icons-material/Computer';
import InfoIcon from '@mui/icons-material/Info';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReviewsIcon from '@mui/icons-material/Reviews';
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
  description: React.ReactNode;
  duration: string;
  links: ProjectLink[];
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
      name: 'Email',
      link: 'mailto:m.ali_farooqi@hotmail.com',
    },
    {
      name: 'CV',
      link: 'https://drive.google.com/file/d/1NtC22cVw6pDmggtAIOqbKQxPevvWRIrX/view?usp=sharing',
      icon: <Description />,
    },
  ],
};

const Projects: Project[] = [
    {
      name: 'Identity and Access Management',
      icon: Icons['security'],
      duration: '2020 - 2025',
      description:
        <>An IAM system for a cloud-based IoT solution using <b>Scala</b> and <b>React</b>. The system features PKI-based authentication for hardware devices and JWT-based authentication for users and services, ensuring secure access control. It also includes a built-in policy management system for granular access permissions, enhancing security and simplifying management.</>,
      links: [],
    },
    {
      name: 'Energy Efficiency Solution',
      icon: Icons['energy'],
      duration: '2023 - 2024',
      description:
        <>A machine energy monitoring dashboard using <b>React</b> and <b>Chart.js</b> for the frontend, with a <b>Kotlin</b> backend. The dashboard features real-time monitoring of energy usage and historical data analysis, providing interactive charts and visualizations. This tool helps users track energy consumption patterns and optimize machinery efficiency.</>,
      links: [],
    },
    {
      name: 'EczeTrack',
      icon: Icons['app'],
      duration: '2020',
      description:
        <>A <b>React Native</b> mobile app with <b>NodeJS</b> to track Eczema symptoms in patients, designed to help them save time recording lifestyle habits.</>,
      links: [
        {
          tooltip: 'See source (Frontend)',
          link: 'https://github.com/alifarooqi/EczeTrack-Frontend/',
          icon: Icons['code'],
        },
        {
          tooltip: 'See source (Backend)',
          link: 'https://github.com/alifarooqi/EczeTrack-Backend/',
          icon: Icons['code'],
        },
      ],
    },
    {
      name: 'Tic Tac Toe',
      icon: Icons['smartToy'],
      duration: '2017',
      description: 'A Tic Tac Toe game with an unbeatible AI Agent.',
      links: [
        {
          tooltip: 'See source',
          link: 'https://codepen.io/ali-farooqi/pen/RZgExb',
          icon: Icons['code'],
        },
        {
          tooltip: 'See app',
          link: 'https://codepen.io/ali-farooqi/full/RZgExb',
          icon: Icons['link'],
        },
      ],
    },
    {
      name: 'Simon Game',
      icon: Icons['videoGame'],
      duration: '2017',
      description:
        'Brought back the childhood memories with this Simon Game. A simple game where you have to repeat the sequence of colors shown by the game.',
      links: [
                {
          tooltip: 'See source',
          link: 'https://codepen.io/ali-farooqi/pen/VzXawr',
          icon: Icons['code'],
        },
        {
          tooltip: 'See app',
          link: 'https://codepen.io/ali-farooqi/full/VzXawr',
          icon: Icons['link'],
        },
      ],
    },
        {
      name: 'Pomodoro Timer',
      icon: Icons['timer'],
      duration: '2017',
      description:
        'A Pomodoro Timer to help you focus on your work. It has a simple UI and a timer which will help you focus on your work for 25 minutes and then take a break for 5 minutes.',
      links: [
                {
          tooltip: 'See source',
          link: 'https://codepen.io/ali-farooqi/pen/YxpVMM',
          icon: Icons['code'],
        },
        {
          tooltip: 'See app',
          link: 'https://codepen.io/ali-farooqi/full/YxpVMM',
          icon: Icons['link'],
        },
      ],
    },

  ]

const CustomSectionsConfig: CustomSection[] = [
  {
    name: 'Projects',
    headerIcon: <ComputerIcon />,
    extraClass: '',
    notInMenu: false,
    content: (
      <>
        {Projects.map((project, index) => (
          <div key={'project-' + index}>
            <h3 style={{ fontSize: '1.4rem', textDecoration: 'underline' }}>
              {project.icon} {project.name}
            </h3>
            <h4 style={{ color: 'unset' }}>{Icons['schedule']}<em>{project.duration}</em></h4>
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
    name: 'About',
    headerIcon: <InfoIcon />,
    extraClass: 'about-section section-reverse',
    content: (
      <>
        <h4>{Icons['helpoutline']} Who is this guy?</h4>
        <p>
          Engineer by trade, bridge-builder by nature — I design secure, scalable platforms and help global tech thrive in the Chinese cloud. Off the clock, you’ll find me watching football, probably yelling at the screen like it’s a code review :)
        </p>

        <h4>{Icons['code']} Programming</h4>
        <p className="programming-icons">
          {Icons['java']}
          {Icons['cpp']}
          {Icons['typescript']}
          {Icons['scala']}
          {Icons['kotlin']}          
          {Icons['nodejs']}
          {Icons['react']}

        </p>

        <h4>{Icons['tools']} Tools</h4>
        <p className="programming-icons">
          {Icons['graphql']}
          {Icons['postgresql']}
          {Icons['terraform']}
          {Icons['mongodb']}
          {Icons['kubernetes']}
        </p>
      </>
    ),
  },
  {
    name: 'Reviews',
    headerIcon: <ReviewsIcon />,
    content: (
      <>
        <h4 style={{ fontSize: '2em' }}><RateReviewIcon /> What do others say?</h4>

        <p>
          <span style={{ fontSize: '5rem', height: '30px', display: 'block', color: 'var(--brand-color)'  }}>“</span>
          <br />
          I had the pleasure of working alongside Ali at KM.ON GmbH as Project Manager on several shared projects and initiatives where his broad technical expertise, availability and reliability stood out. Even when managing multiple complex projects, he consistently navigated challenges with confidence and ensured smooth progress, making him an essential asset to our work.
        </p>
        <p>Ali has a remarkable talent for remaining calm under pressure and maintaining a focused, solution-driven mindset, making him someone the entire team could rely on. Beyond his professional expertise, he brought a positive energy to the workplace, making collaboration not only productive but genuinely enjoyable. His approachable nature fostered a supportive environment and his contributions were invaluable to our collective success.</p>
        <p>It was truly a pleasure to work with Ali and I am confident that any team would greatly benefit from his expertise, dedication and exceptional professionalism.</p>
        <p style={{ textAlign: 'right', fontSize: 'small' }}>
          <i>
            <b>Daniela Baretti</b>
            <br />
            Junior Project Manager
            <br />
            KM.ON GmbH
          </i>
        </p>

        <p>
          <span style={{ fontSize: '5rem', height: '30px', display: 'block', color: 'var(--brand-color)' }}>“</span>
          <br />
          Wish to recognize Muhammad Ali Farooqi and Amsal Lakhani for supporting WeDerm Health in developing our prototype in a tight timeframe. Also credits to our professional UX designer Blair KIM for everything visual.
        </p>
        <p>...If anyone is looking for software developers, do get connected with them!</p>
        <p style={{ textAlign: 'right', fontSize: 'small' }}>
          <i>
            <b>Harrison Li 李健彰</b>
            <br />
            Co-Founder & CEO
            <br />
            WeDerm Health
          </i>
        </p>

      </>
    ),
  },
];

export { CommonConfig, CustomSectionsConfig, Icons };
