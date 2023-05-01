import { FC } from 'react';
import StatusItem from './StatusItem';
import ImgEdit from '../ui/images/ImgEdit';
import { dealsType } from '../../utils/mockdata/deals';
import dayjs from 'dayjs';
import ImgEye from '../ui/images/ImgEye';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

interface SpreadsheetItemProps {
  data: dealsType;
}

const SpreadsheetItem: FC<SpreadsheetItemProps> = ({ data }) => {
  const {
    id,
    photoSrc,
    address: { address, city, state, zip },
    area,
    createAt,
    price,
    progress
  } = data;

  const viewedDate = dayjs(createAt).format('MMM DD, YYYY HH:mm A');
  // Nov 14, 2021 07:00 AM

  const styleUser = {
    backgroundImage: `url(${photoSrc})`
  };

  return (
    <div className="spreadsheet-content__item column">
      <div className="column-picture">
        <div style={styleUser} className="column-picture__pic"></div>
      </div>
      <div className="column-name">{`${address}, ${city} ${state} ${zip}`}</div>
      <div className="column-area">
        {area}m<span>2</span>
      </div>
      <div className="column-date">{viewedDate}</div>
      <div className="column-price">${price}</div>
      <div className="column-status">
        <StatusItem status={progress} />
      </div>
      <div className="column-edit">
        <Link to={`${routes.deals}/${id}`}>
          <ImgEdit />
        </Link>
      </div>
    </div>
  );
};

export default SpreadsheetItem;
