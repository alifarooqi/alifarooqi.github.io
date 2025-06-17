import React, { useState, useMemo, useCallback, RefObject } from 'react';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ComputerIcon from '@mui/icons-material/Computer';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Menu.scss';

import { CustomSectionsConfig } from '../../config';

export type SectionRefs = Record<string, RefObject<HTMLElement>>;

interface MenuProps {
  sectionRefs: SectionRefs;
}

interface MenuItemType {
  icon: React.ReactNode;
  tooltip: string;
  action: () => void;
  key: string;
}

const Menu: React.FC<MenuProps> = ({ sectionRefs }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const scrollToSection = useCallback(
    (sectionName: string) => {
      const ref = sectionRefs[sectionName];
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    [sectionRefs]
  );

  const menuItems: MenuItemType[] = useMemo(() => {
    const baseItems: Omit<MenuItemType, 'key'>[] = [
      {
        icon: <ArrowUpwardIcon classes={{ root: 'menu-item-icon' }} />,
        tooltip: 'go to top',
        action: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
      },
      {
        icon: <NightsStayIcon classes={{ root: 'menu-item-icon' }} />,
        tooltip: 'toggle dark/light theme',
        action: () => {
          document.body.classList.toggle('dark-mode');
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
          } else {
            localStorage.setItem('theme', 'light');
          }
        },
      },
      {
        icon: <ComputerIcon classes={{ root: 'menu-item-icon' }} />,
        tooltip: 'projects',
        action: () => scrollToSection('projects'),
      },
    ];

    const sectionItems: Omit<MenuItemType, 'key'>[] = CustomSectionsConfig
      .filter(section => !section.notInMenu)
      .map(section => ({
        icon: React.cloneElement(section.headerIcon, { classes: { root: 'menu-item-icon' } }),
        tooltip: section.name,
        action: () => scrollToSection(section.name),
      }));

    // Add unique keys
    return [...baseItems, ...sectionItems].map((item, idx) => ({
      ...item,
      key: `menu-item-${idx}-${item.tooltip}`,
    }));
  }, [scrollToSection]);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const startAngle = isMobile ? 0 : -90;
  const rotationAngle = isMobile ? 90 : 180;

  const closeMenu = () => setMenuActive(false);

  return (
    <div className={menuActive ? 'menu menu-active' : 'menu'}>
      <div className="menu-backdrop" onClick={closeMenu}></div>
      <div className="menu-data">
        <MenuToggle isMobile={isMobile} toggleMenu={() => setMenuActive(m => !m)}>
          ME<br />NU
        </MenuToggle>
        {menuItems.map((menuItem, index) => {
          let angle = startAngle;
          let increment = 0;
          if (menuItems.length > 1) {
            increment = Math.round(rotationAngle / (menuItems.length - 1));
          }
          angle += index * increment;

          return (
            <MenuItem
              {...menuItem}
              tooltipPlacement="right"
              menuActive={menuActive}
              isMobile={isMobile}
              rotationAngle={angle}
              key={menuItem.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
