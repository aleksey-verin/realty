import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';

interface NotesProps {}

const Notes: FC<NotesProps> = () => {
  return (
    <section className="section">
      <UnderConstruction />
    </section>
  );
};

export default Notes;
