export const mockCustomersRus = [
  {
    id_customer: '101',
    firstName: 'Ирина',
    lastName: 'Васильева',
    avatar: './avatar.jpg',
    email: 'vasilevaiv@gmail.com',
    phone: '89119911422',
    info: ''
  },
  {
    id_customer: '102',
    firstName: 'Петр',
    lastName: 'Иванов',
    avatar: './avatar.jpg',
    email: 'peter1713@gmail.com',
    phone: '89872367199',
    info: ''
  },
  {
    id_customer: '103',
    firstName: 'Константин',
    lastName: 'Константинов',
    avatar: './avatar.jpg',
    email: 'kostyaKK@ya.ru',
    phone: '89873671212',
    info: ''
  },
  {
    id_customer: '104',
    firstName: 'Анжелика',
    lastName: 'Константинопольская',
    avatar: './avatar.jpg',
    email: 'angelacococo@ya.ru',
    phone: '89213828388',
    info: ''
  },
  {
    id_customer: '105',
    firstName: 'Анна',
    lastName: 'Удальцова',
    avatar: './avatar.jpg',
    email: 'annaugalv@ya.ru',
    phone: '89721212889',
    info: ''
  }
];

export interface mockCustomersType {
  id_customer: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phone: string;
  info: string;
}
