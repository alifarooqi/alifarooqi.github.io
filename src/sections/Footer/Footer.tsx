import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './Footer.scss';

import { CommonConfig, Icons } from '../../config';

const Footer: React.FC = () => (
  <footer className="footer">
    <p>
      Copyright &copy; {new Date().getFullYear()} All rights reserved
    </p>
    <p>
      {CommonConfig.social.map((socialDetails, index) => (
        <CircleButton
          key={`footer-social-${index}`}
          tooltip={socialDetails.name}
          tooltipPlacement="top"
          link={socialDetails.link}
          target="_blank"
        >
          {socialDetails.icon
            ? socialDetails.icon
            : Icons[socialDetails.name.toLowerCase() as keyof typeof Icons]}
        </CircleButton>
      ))}
    </p>
  </footer>
);

export default Footer;