import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';

interface CustomersProps {}

const Customers: FC<CustomersProps> = () => {
  return (
    <section className="section">
      <UnderConstruction />
    </section>
  );
};

export default Customers;
