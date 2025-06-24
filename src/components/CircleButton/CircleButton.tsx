import React, { CSSProperties, ReactNode } from 'react';
import { Tooltip } from '@mui/material';
import './CircleButton.scss';

interface CircleButtonProps {
  link?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  style?: CSSProperties;
  size?: number;
  tooltip?: string;
  tooltipPlacement?: 'bottom' | 'left' | 'right' | 'top';
  children?: ReactNode;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  link,
  target,
  onClick,
  className,
  style,
  size = 1,
  tooltip = '',
  tooltipPlacement,
  children,
}) => {
  const combinedClassName = className ? `circle-button ${className}` : 'circle-button';
  const buttonStyle = { width: `${size}rem`, height: `${size}rem`, ...style };

  return (
    <Tooltip title={tooltip} placement={tooltipPlacement}>
      {link ? (
        <a
          href={link}
          target={target}
          onClick={onClick}
          className={combinedClassName}
          style={buttonStyle}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={combinedClassName}
          style={buttonStyle}
        >
          {children}
        </button>
      )}
    </Tooltip>
  );
};

export default CircleButton;