import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Tasks;
