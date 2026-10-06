export interface IMenu {
  key: string
  label: string
  link: string
  iconUrl: string
  iconUrlActive: string
}

export const navItems: IMenu[] = [
  {
    key: 'home',
    label: 'Главная',
    link: '/private/home',
    iconUrl: '/icons/nav-menu/home.svg',
    iconUrlActive: '/icons/nav-menu/home-act.svg',
  },
  {
    key: 'favorites',
    label: 'Избранное',
    link: '/private/favorites',
    iconUrl: '/icons/nav-menu/star.svg',
    iconUrlActive: '/icons/nav-menu/star-act.svg',
  },
];
