import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Dashboard;
