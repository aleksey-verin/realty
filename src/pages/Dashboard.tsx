import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';
import { contentLocal } from '../constants/contentLocal';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const local = 'rus';

  return (
    <div className="content">
      <Header
        headerTitle={contentLocal.pages.dashboard.header[local]}
        isButtonVisible={true}
        headerButtonTitle={contentLocal.pages.dashboard.headerButton[local]}
      />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Dashboard;
