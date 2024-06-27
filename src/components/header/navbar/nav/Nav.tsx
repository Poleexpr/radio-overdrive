import classnames from 'classnames';
import { forwardRef } from 'react';
import type { FC, LegacyRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { animateScroll as scroll, Events, Link } from 'react-scroll';

import { Typography } from '@/components';
import { IconLogoOverdrive } from '@/components/icons';
import type { TNavItems } from '@/utils';

import styles from './nav.module.scss';

interface NavProps {
  isMenuOpen: boolean;
  items: TNavItems;
  ref: LegacyRef<HTMLUListElement>;
  toggleNav: () => void;
}

export const Nav: FC<NavProps> = forwardRef(({ items, isMenuOpen, toggleNav }, ref) => {
  const menuOpen = isMenuOpen ? styles.menuOpen : '';

  /* useEffect(() => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }, []); */

  return (
    <nav className={styles.wrapper}>
      <ul ref={ref} className={classnames(styles.menu, menuOpen)}>
        {items.map((item, i) => (
          <Typography key={i} className={styles.menu_item} tag='li' variant='text8'>
            <a href={item.slug} onClick={() => toggleNav()}>
              {item.isLogo ? <IconLogoOverdrive className={styles.logo} /> : item.name}
            </a>
          </Typography>
        ))}
      </ul>
    </nav>
  );
});
