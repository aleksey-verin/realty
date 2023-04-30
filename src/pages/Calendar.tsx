import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  return (
    <div className="content">
      <Header headerTitle="Calendar" isButtonVisible={true} headerButtonTitle="Add New Event" />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Calendar;
