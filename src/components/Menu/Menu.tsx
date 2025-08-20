import React, { useState, useMemo, useCallback } from 'react';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SectionConfig, { SectionRefs, Sections } from '../../config/SectionConfig';

import './Menu.scss';



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
    (sectionName: Sections) => {
      const ref = sectionRefs[sectionName];
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - 50,
          left: 0,
          behavior: 'smooth',
        });
        closeMenu();
      }
    },
    [sectionRefs]
  );

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }


  const menuItems: MenuItemType[] = useMemo(() => {
    const baseItems: Omit<MenuItemType, 'key'>[] = [
      {
        icon: <NightsStayIcon classes={{ root: 'menu-item-icon' }} />,
        tooltip: 'Toggle dark/light theme',
        action: toggleTheme,
      },
    ];


    const sectionItems: Omit<MenuItemType, 'key'>[] = SectionConfig
      .filter(section => !section.notInMenu && React.isValidElement(section.headerIcon))
      .map(section => ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        icon: React.cloneElement(section.headerIcon, { classes: { root: 'menu-item-icon' } }),
        tooltip: section.name,
        action: () => scrollToSection(section.key),
      }));

    // Add unique keys
    return [...baseItems, ...sectionItems].map((item) => ({
      ...item,
      key: `menu-item-${item.tooltip}`,
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
        <MenuToggle isMobile={isMobile} toggleMenu={() => setMenuActive(m => !m)} />

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
