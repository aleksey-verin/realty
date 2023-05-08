import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';
import { contentLocal } from '../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../store/reducers/localizationSlice';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { lang } = useSelector(selectorLocalization);

  return (
    <div className="content">
      <Header
        headerTitle={contentLocal.pages.dashboard.header[lang]}
        isButtonVisible={true}
        headerButtonTitle={contentLocal.pages.dashboard.headerButton[lang]}
      />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Dashboard;
