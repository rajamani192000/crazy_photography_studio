import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Camara Rental',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Crazy Camara Rental',
        link: '/pages/rental/camHome',
        home: true,
      },
      {
        title: 'DSLR Camara',
        link: '/pages/rental/dslr',
      },
      {
        title: 'Lens',
        link: '/pages/rental/lens',
      },
    ],
  },
  {
    title: 'Login',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
