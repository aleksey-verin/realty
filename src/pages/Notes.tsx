import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface NotesProps {}

const Notes: FC<NotesProps> = () => {
  return (
    <div className="content">
      <Header headerTitle="Notes" isButtonVisible={true} headerButtonTitle="Add New Notes" />

      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Notes;
