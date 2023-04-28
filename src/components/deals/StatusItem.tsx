import { FC } from 'react';

interface StatusItemProps {
  status: string;
}

const StatusItem: FC<StatusItemProps> = ({ status }) => {
  return <div className={`status ${status === 'closed' ? 'closed' : ''}`}>{status}</div>;
};

export default StatusItem;
