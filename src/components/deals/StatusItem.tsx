import { FC } from 'react';
import { contentLocal } from '../../utils/constants/contentLocal';
import { progressStatusForDeals } from '../../utils/constants/constants';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../../store/reducers/localizationSlice';

interface StatusItemProps {
  status: string;
}

const StatusItem: FC<StatusItemProps> = ({ status }) => {
  const { lang } = useSelector(selectorLocalization);

  const viewedProgress =
    status === progressStatusForDeals.inProgress
      ? contentLocal.pages.deals.progressStatuses.inProgress[lang]
      : contentLocal.pages.deals.progressStatuses.closed[lang];

  return (
    <div className={`status ${status === progressStatusForDeals.closed ? 'closed' : ''}`}>
      {viewedProgress}
    </div>
  );
};

export default StatusItem;
