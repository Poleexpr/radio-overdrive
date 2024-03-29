'use client';

import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { animateScroll as scroll, Events, Link, scrollSpy } from 'react-scroll';

import { Typography } from '@/components';
import {
  IconLogoOverdrive,
  IconLogoTelegram,
  IconLogoVk,
  IconLogoInstagram,
} from '@/components/icons';

import styles from './header.module.scss';

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.setAttribute('style', 'overflow: hidden;');
    } else {
      document.body.setAttribute('style', 'overflow: visible;');
    }
  };

  return (
    <header className={isOpen ? styles.isOpen : styles.container} id='outer-container'>
      <nav className={styles.wrapper}>
        <ul className={styles.menu}>
          <Typography className={styles.menu_item} tag='li' variant='text8'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={100}
              to='about'
              onSetActive={handleSetActive}
            >
              о нас
            </Link>
          </Typography>

          <Typography className={styles.menu_item} tag='li' variant='text8'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={-10}
              to='presenters'
              onSetActive={handleSetActive}
            >
              ведущие
            </Link>
          </Typography>
          <li className={styles.logo}>
            <IconLogoOverdrive className={styles.logo} />
          </li>
          <Typography className={styles.menu_item} tag='li' variant='text8'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={-100}
              to='program'
              onSetActive={handleSetActive}
            >
              программа
            </Link>
          </Typography>
          <Typography className={styles.menu_item} tag='li' variant='text8'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={0}
              to='contacts'
              onSetActive={handleSetActive}
            >
              контакты
            </Link>
          </Typography>
        </ul>
      </nav>
      <div className={styles.logoMobile_wrapper}>
        <IconLogoOverdrive className={styles.logoMobile} />
      </div>
      <Menu
        right
        className={styles.menuBurger}
        customBurgerIcon={<img alt='открыть' src='./burgerIcon.svg' />}
        customCrossIcon={<img alt='закрыть' src='./crossIcon.svg' />}
        isOpen={isOpen}
        pageWrapId='page-wrap'
        width='100%'
        onClose={handleOnOpen}
        onOpen={handleOnOpen}
      >
        <ul className={styles.menu_wrapper}>
          <Typography className={styles.menu_item} tag='li' variant='title7'>
            <Link
              smooth
              spy
              activeClass='active'
              className='menu-item'
              duration={500}
              offset={0}
              to='about'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              о нас
            </Link>
          </Typography>
          <Typography className={styles.menu_item} tag='li' variant='title7'>
            <Link
              smooth
              spy
              activeClass='active'
              className='menu-item'
              duration={500}
              offset={-10}
              to='presenters'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              ведущие
            </Link>
          </Typography>
          <Typography className={styles.menu_item} tag='li' variant='title7'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={-80}
              to='program'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              программа
            </Link>
          </Typography>
          <Typography className={styles.menu_item} tag='li' variant='title7'>
            <Link
              smooth
              spy
              activeClass='active'
              duration={500}
              offset={0}
              to='contacts'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              контакты
            </Link>
          </Typography>
        </ul>
        <div className={styles.contacts_wrapper}>
          <div className={styles.nets_wrapper}>
            <a
              aria-label='Овердрайв в telegram'
              href='https://t.me/rocknword'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoTelegram className={styles.net_logo} />
            </a>
            <a
              aria-label='Овердрайв вконтакте'
              href='https://vk.com/rocknword'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoVk className={styles.net_logo} />
            </a>
            <a
              aria-label='Овердрайв в instagram'
              href='https://www.instagram.com/radio_overdrive/'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoInstagram className={styles.net_logo} />
            </a>
          </div>
          <Typography tag='p' variant='text'>
            <a
              className={styles.mail_link}
              href='mailto:radio@russiandino.ru'
              rel='noreferrer'
              target='_blank'
            >
              radio@russiandino.ru
            </a>
          </Typography>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
