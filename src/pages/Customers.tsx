import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface CustomersProps {}

const Customers: FC<CustomersProps> = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Customers;
