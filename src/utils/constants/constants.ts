export const progressStatusForDeals = {
  inProgress: 'inProgress',
  closed: 'closed'
};

export const sortingDealsValues = [
  { value: 'none', name: 'Без сортировки ↑↓' },
  { value: 'createAtAscending', name: 'Дата создания ↓' },
  { value: 'createAtDescending', name: 'Дата создания ↑' },
  { value: 'appointmentDateAscending', name: 'Дата встречи ↓' },
  { value: 'appointmentDateDescending', name: 'Дата встречи ↑' },
  { value: 'cityAscending', name: 'Город ↓' },
  { value: 'cityDescending', name: 'Город ↑' }
];

export const sortingDataDeals: ISortingDataDeals = {
  none: { value: 'none', name: 'Без сортировки' },
  createAtAscending: { value: 'createAtAscending', name: 'Дата создания - по возрастанию' },
  createAtDescending: { value: 'createAtDescending', name: 'Дата создания - по убыванию' },
  appointmentDateAscending: {
    value: 'appointmentDateAscending',
    name: 'Дата встречи по возрастанию'
  },
  appointmentDateDescending: {
    value: 'appointmentDateDescending',
    name: 'Дата встречи по убыванию'
  },
  cityAscending: {
    value: 'cityAscending',
    name: 'Город по возрастанию'
  },
  cityDescending: {
    value: 'cityDescending',
    name: 'Город по убыванию'
  }
};

export interface ISortingDataDeals {
  none: selectOption;
  createAtAscending: selectOption;
  createAtDescending: selectOption;
  appointmentDateAscending: selectOption;
  appointmentDateDescending: selectOption;
  cityAscending: selectOption;
  cityDescending: selectOption;
}
interface selectOption {
  value: keyof ISortingDataDeals;
  name: string;
}
