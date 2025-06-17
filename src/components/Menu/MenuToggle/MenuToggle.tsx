import React, { ReactNode } from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuToggle.scss';

interface MenuToggleProps {
  toggleMenu: () => void;
  children: ReactNode;
  isMobile?: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggleMenu, children }) => (
  <CircleButton onClick={toggleMenu} size={4} className="menu-toggle">
    <span className="menu-text">{children}</span>
    <div className="menu-burger">
      <span className="menu-burger-bar"></span>
      <span className="menu-burger-bar"></span>
      <span className="menu-burger-bar"></span>
    </div>
  </CircleButton>
);

export default MenuToggle;