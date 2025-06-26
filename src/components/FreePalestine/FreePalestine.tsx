import React, { useEffect, useState, useCallback } from 'react';
import { ChevronRight, Description, PlayArrow } from '@mui/icons-material';
import CircleButton from '../CircleButton/CircleButton';
import { getIcon } from '../../assets/icons/Icons';
import './FreePalestine.scss';

const FreePalestine: React.FC = () => {
  const [isHiding, setIsHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.setProperty('overflow', 'hidden');
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);

  const handleClose = useCallback(() => {
    document.body.style.removeProperty('overflow');
    setIsHiding(true);
    setTimeout(() => {
      setHidden(true);
      setIsHiding(false);
    }, 1000);
  }, []);

  if (hidden) return null;

  const wrapperClassNames = [
    'free-palestine',
    isHiding && 'is-hiding'
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassNames}>
      <div className="free-palestine-content">
        <h1><span>Free</span><br />Palestine</h1>
        <CircleButton link="https://twitter.com/hashtag/FreePalestine" tooltip="#FreePalestine on Twitter">
          {getIcon('twitter')}
        </CircleButton>
        <CircleButton link="http://facebook.com/hashtag/FreePalestine" tooltip="#FreePalestine on Facebook">
          {getIcon('facebook')}
        </CircleButton>
        <CircleButton link="https://www.google.com/search?q=palestine&amp;tbm=nws" tooltip="Latest news">
          <Description />
        </CircleButton>
        <CircleButton link="https://youtu.be/_mBBGp7Pwnw=nws" tooltip="Watch video to learn more">
          <PlayArrow />
        </CircleButton>
      </div>
      <CircleButton
        className="to-website"
        onClick={handleClose}
        size={4}
        tooltip="Go to website"
      >
        <ChevronRight />
      </CircleButton>
    </div>
  );
};

export default FreePalestine;
