import { FC } from 'react';
import { contentLocal } from '../../constants/contentLocal';

interface StatusItemProps {
  status: string;
}

const StatusItem: FC<StatusItemProps> = ({ status }) => {
  const local = 'rus';

  const viewedProgress =
    status === 'inProgress'
      ? contentLocal.pages.deals.progressStatuses.inProgress[local]
      : contentLocal.pages.deals.progressStatuses.closed[local];

  return <div className={`status ${status === 'closed' ? 'closed' : ''}`}>{viewedProgress}</div>;
};

export default StatusItem;
