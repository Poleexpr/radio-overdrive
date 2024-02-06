'use client';

import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { animateScroll as scroll, Events, Link, scrollSpy } from 'react-scroll';
import { ReactSVG } from 'react-svg';

import uikit from '../uikit.module.scss';

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
    <header id='outer-container' className={isOpen ? styles.isOpen : styles.container}>
      <nav className={styles.wrapper}>
        <ul className={styles.menu}>
          <li className={`${styles.menu_item} ${uikit.text8}`}>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onSetActive={handleSetActive}
            >
              о нас
            </Link>
          </li>
          <li className={`${styles.menu_item} ${uikit.text8}`}>
            <Link
              activeClass='active'
              to='presenters'
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onSetActive={handleSetActive}
            >
              ведущие
            </Link>
          </li>
          <li>
            <ReactSVG src='logo.svg' />
          </li>
          <li className={`${styles.menu_item} ${uikit.text8}`}>
            <Link
              activeClass='active'
              to='program'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
            >
              программа
            </Link>
          </li>
          <li className={`${styles.menu_item} ${uikit.text8}`}>
            <Link
              activeClass='active'
              to='contacts'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
            >
              контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoMobile_wrapper}>
        <ReactSVG className={styles.logoMobile} src='logo.svg' />
      </div>
      <Menu
        right
        isOpen={isOpen}
        onOpen={handleOnOpen}
        onClose={handleOnOpen}
        pageWrapId='page-wrap'
        customBurgerIcon={<img src='./burgerIcon.svg' />}
        customCrossIcon={<img src='./crossIcon.svg' />}
        width='100%'
        className={styles.menuBurger}
      >
        <ul className={styles.menu_wrapper}>
          <li className={`${styles.menu_item} ${uikit.title7}`}>
            <Link
              activeClass='active'
              className='menu-item'
              duration={500}
              offset={0}
              smooth={true}
              spy={true}
              to='about'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              о нас
            </Link>
          </li>
          <li className={`${styles.menu_item} ${uikit.title7}`}>
            <Link
              activeClass='active'
              className='menu-item'
              duration={500}
              offset={-10}
              smooth={true}
              spy={true}
              to='presenters'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              ведущие
            </Link>
          </li>
          <li className={`${styles.menu_item} ${uikit.title7}`}>
            <Link
              activeClass='active'
              duration={500}
              offset={-80}
              smooth={true}
              spy={true}
              to='program'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              программа
            </Link>
          </li>
          <li className={`${styles.menu_item} ${uikit.title7}`}>
            <Link
              activeClass='active'
              duration={500}
              offset={0}
              smooth={true}
              spy={true}
              to='contacts'
              onClick={handleOnOpen}
              onSetActive={handleSetActive}
            >
              контакты
            </Link>
          </li>
        </ul>
        <div className={styles.contacts_wrapper}>
          <div className={styles.nets_wrapper}>
            <a href='https://t.me/rocknword' rel='noreferrer' target='_blank'>
              <ReactSVG className={styles.net_logo} src='tg.svg' />
            </a>
            <a href='https://vk.com/rocknword' rel='noreferrer' target='_blank'>
              <ReactSVG className={styles.net_logo} src='vk.svg' />
            </a>
            <a href='https://www.instagram.com/radio_overdrive/' rel='noreferrer' target='_blank'>
              <ReactSVG className={styles.net_logo} src='instagram.svg' />
            </a>
          </div>
          <p className={uikit.text}>
            <a
              className={styles.mail_link}
              href='mailto:radio@russiandino.ru'
              rel='noreferrer'
              target='_blank'
            >
              radio@russiandino.ru
            </a>
          </p>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
