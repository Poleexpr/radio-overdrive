export const navItemsInfo = [
  {
    id: 1,
    name: 'о нас',
    slug: 'about',
    offset: 10,
    isLogo: false,
  },
  {
    id: 2,
    name: 'ведущие',
    slug: 'presenters',
    offset: -10,
    isLogo: false,
  },
  {
    id: 3,
    name: '',
    slug: '',
    offset: 0,
    isLogo: true,
  },
  {
    id: 4,
    name: 'программа',
    slug: 'program',
    offset: -10,
    isLogo: false,
  },
  {
    id: 5,
    name: 'контакты',
    slug: 'contacts',
    offset: 0,
    isLogo: false,
  },
];

export type TNavItems = typeof navItemsInfo;
