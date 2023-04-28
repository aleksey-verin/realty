import { FC } from 'react';
import UnderConstruction from '../components/UnderConstruction';

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  return (
    <section className="section">
      <UnderConstruction />
    </section>
  );
};

export default Tasks;
