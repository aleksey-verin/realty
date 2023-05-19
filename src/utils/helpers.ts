import { sortingDataDeals } from './constants/constants';
import { mockCustomersRus, mockCustomersType } from './mockdata/mockCustomersRus';
import { dealsType } from './mockdata/mockDealsRus';

export const getCustomerData = (id: string): mockCustomersType | null => {
  return mockCustomersRus.find((customer) => customer.id_customer === id) || null;
};

export const sortingHelper = (initialsData: dealsType[], type: string): dealsType[] => {
  console.log('sorting fn');
  switch (type) {
    case sortingDataDeals.none.value:
      return initialsData;
    case sortingDataDeals.createAtAscending.value:
      return [...initialsData].sort((a, b) => a.createdAt - b.createdAt);
    case sortingDataDeals.createAtDescending.value:
      return [...initialsData].sort((a, b) => b.createdAt - a.createdAt);
    case sortingDataDeals.appointmentDateAscending.value:
      return [...initialsData].sort((a, b) => a.appointmentDate - b.appointmentDate);
    case sortingDataDeals.appointmentDateDescending.value:
      return [...initialsData].sort((a, b) => b.appointmentDate - a.appointmentDate);
    case sortingDataDeals.cityAscending.value:
      return [...initialsData].sort((a, b) => a.address.city.localeCompare(b.address.city));
    case sortingDataDeals.cityDescending.value:
      return [...initialsData].sort((a, b) => b.address.city.localeCompare(a.address.city));
    default:
      return initialsData;
  }
};
