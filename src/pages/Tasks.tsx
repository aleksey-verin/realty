import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  return (
    <div className="content">
      <Header headerTitle="Tasks" isButtonVisible={true} headerButtonTitle="Add New Tasks" />

      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Tasks;
