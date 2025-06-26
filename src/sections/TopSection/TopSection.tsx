import React, { useEffect, useRef } from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import CommonConfig from '../../config/CommonConfig';
import { getIcon, IconKey } from '../../assets/icons/Icons';

const TopSection: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const pathElement = pathRef.current;
    if (pathElement && CommonConfig.signature?.viewBox) {
      const signatureLength = pathElement.getTotalLength();
      pathElement.setAttribute('stroke-dasharray', signatureLength.toString());
      pathElement.setAttribute('stroke-dashoffset', signatureLength.toString());

      const viewBoxCoords = CommonConfig.signature.viewBox
        .split(' ')
        .map(val => parseInt(val, 10));
      if (viewBoxCoords.length > 0) {
        pathElement.setAttribute(
          'stroke-width',
          (Math.max(...viewBoxCoords) / 100).toString()
        );
      }
    }
  }, []);

  return (
    <section className="top-section">
      <div className="signature">
        <div className="avatar">
          <img className='profile-picture' src='faceshot.png' alt="Profile" />
        </div>
        <svg viewBox={CommonConfig.signature?.viewBox}>
          <path
            ref={pathRef}
            id="signature-path"
            stroke="var(--text-primary)"
            fill="none"
            d={CommonConfig.signature?.signaturePathD}
          />
        </svg>
      </div>

      <div className="intro">
        <h1>{CommonConfig.name}</h1>
        <h2>{CommonConfig.tagline}</h2>
      </div>
      <div className="social">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
            key={`top-section-social-${index}`}
            tooltip={socialDetails.name}
            tooltipPlacement="top"
            link={socialDetails.link}
            target="_blank"
          >
            {socialDetails.icon
              ? socialDetails.icon
              : getIcon(socialDetails.name.toLowerCase() as IconKey)}
          </CircleButton>
        ))}
      </div>
    </section>
  );
};

export default TopSection;