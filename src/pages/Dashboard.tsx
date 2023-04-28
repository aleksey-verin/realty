import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <section className="section">
      <UnderConstruction />
    </section>
  );
};

export default Dashboard;
