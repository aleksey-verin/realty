import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  return (
    <div className="content">
      <Header headerTitle="Settings" isButtonVisible={false} />

      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Settings;
