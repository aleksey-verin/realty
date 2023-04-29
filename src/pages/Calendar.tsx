import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Calendar;
