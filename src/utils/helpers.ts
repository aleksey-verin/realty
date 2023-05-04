import { mockCustomersRus, mockCustomersType } from './mockdata/mockCustomersRus';

export const getCustomerData = (id: string): mockCustomersType | null => {
  return mockCustomersRus.find((customer) => customer.id_customer === id) || null;
};
