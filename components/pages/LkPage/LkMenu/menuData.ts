import { ROUTES } from 'utils/routes';

export type MenuItem = {
  id: string;
  label: string;
  href: string;
};

export const menuData: MenuItem[] = [
  {
    id: '1',
    label: 'Профиль',
    href: ROUTES.LK_PAGE,
  },
  {
    id: '2',
    label: 'Пароль',
    href: ROUTES.PASSWORD_PAGE,
  },
  {
    id: '3',
    label: 'Мои адреса',
    href: '',
  },
  {
    id: '4',
    label: 'Мои заказы',
    href: '',
  },
];
