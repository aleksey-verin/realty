import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface NotesProps {}

const Notes: FC<NotesProps> = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Notes;
