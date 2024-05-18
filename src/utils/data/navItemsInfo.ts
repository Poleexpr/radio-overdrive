export const navItemsInfo = [
  {
    id: 1,
    name: 'о нас',
    slug: 'about',
    isLogo: false,
  },
  {
    id: 2,
    name: 'ведущие',
    slug: 'presenters',
    isLogo: false,
  },
  {
    id: 3,
    name: '',
    slug: '',
    isLogo: true,
  },
  {
    id: 4,
    name: 'программа',
    slug: 'program',
    isLogo: false,
  },
  {
    id: 5,
    name: 'контакты',
    slug: 'contacts',
    isLogo: false,
  },
];

export type TNavItems = typeof navItemsInfo;
