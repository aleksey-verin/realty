export const mockDeals = [
  {
    id: '121982192011',
    createAt: 1681992000000,
    photoSrc:
      'https://i0.wp.com/www.innovationquarter.com/wp-content/uploads/2022/01/winston-salem-apartment-complex_1200w.jpeg?w=1200&ssl=1',
    address: {
      address: '1952 Chicago Avenue',
      city: 'Fresno',
      state: 'CA',
      zip: '93711'
    },
    area: 100,
    numberOfPeople: 4,
    instructions: '',
    access: 'Key with doorman',
    price: 5000,
    progress: 'in progress'
  },
  {
    id: '121982192012',
    createAt: 1682337600000,
    photoSrc:
      'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/174122706.jpg?k=6a7e5ee3eb8bfe72eb932f4d9c7653c2a9f78e50ac8db98ed6c02408b2c89bbd&o=',
    address: {
      address: '1713 South Avenue',
      city: 'Los-Angeles',
      state: 'LA',
      zip: '12711'
    },
    area: 80,
    numberOfPeople: 3,
    instructions: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, quam.',
    access: 'Key with doorman',
    price: 4000,
    progress: 'in progress'
  },
  {
    id: '121982192013',
    createAt: 1682709420000,
    photoSrc: 'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
    address: {
      address: '8-19 West Avenue',
      city: 'Boston',
      state: 'WG',
      zip: '12123'
    },
    area: 120,
    numberOfPeople: 4,
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet doloremque dignissimos?',
    access: 'Key with doorman',
    price: 7000,
    progress: 'in progress'
  },
  {
    id: '121982192014',
    createAt: 168231210000,
    photoSrc: 'https://tropki.ru/images/hotels3/-828511/page/o59905.webp',
    address: {
      address: '1-11 East Street',
      city: 'New-York',
      state: 'NY',
      zip: '33718'
    },
    area: 60,
    numberOfPeople: 2,
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet doloremque dignissimos?',
    access: 'Key with doorman',
    price: 5000,
    progress: 'closed'
  },
  {
    id: '121982192015',
    createAt: 1683231210000,
    photoSrc: 'https://tropki.ru/images/hotels3/-828511/page/o59905.webp',
    address: {
      address: '1-11 East Street East Street East Street',
      city: 'New-York',
      state: 'NY',
      zip: '33718'
    },
    area: 60,
    numberOfPeople: 2,
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet doloremque dignissimos?',
    access: 'Key with doorman',
    price: 5000,
    progress: 'closed'
  }
];

export interface dealsType {
  id: string;
  createAt: number;
  photoSrc: string;
  address: address;
  area: number;
  numberOfPeople: number;
  instructions: string;
  access: string;
  price: number;
  progress: string;
}

interface address {
  address: string;
  city: string;
  state: string;
  zip: string;
}
