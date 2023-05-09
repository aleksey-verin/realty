import { FC } from 'react';
import { contentLocal } from '../../utils/constants/contentLocal';
import { progressStatusForDeals } from '../../utils/constants/constants';

interface StatusItemProps {
  status: string;
}

const StatusItem: FC<StatusItemProps> = ({ status }) => {
  const local = 'rus';

  const viewedProgress =
    status === progressStatusForDeals.inProgress
      ? contentLocal.pages.deals.progressStatuses.inProgress[local]
      : contentLocal.pages.deals.progressStatuses.closed[local];

  return (
    <div className={`status ${status === progressStatusForDeals.closed ? 'closed' : ''}`}>
      {viewedProgress}
    </div>
  );
};

export default StatusItem;
