import { FC } from 'react';
import StatusItem from './StatusItem';
import ImgEdit from '../ui/images/ImgEdit';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { dealsType } from '../../utils/mockdata/mockDealsRus';

interface SpreadsheetItemProps {
  data: dealsType;
}

const SpreadsheetItem: FC<SpreadsheetItemProps> = ({ data }) => {
  const {
    id_deal,
    photoSrc,
    address: { address, city, state, zip },
    area,
    appointmentDate,
    price,
    progress
  } = data;

  // const local = 'rus';

  const viewedDate = dayjs(appointmentDate).format('MMM DD, YYYY HH:mm A');
  // Nov 14, 2021 07:00 AM

  const styleUser = {
    backgroundImage: `url(${photoSrc})`
  };

  return (
    <div className="spreadsheet-content__item column">
      <div className="column-picture">
        <div style={styleUser} className="column-picture__pic"></div>
      </div>
      <div className="column-address">{address}</div>
      <div className="column-city">{city}</div>
      <div className="column-state">{state}</div>
      <div className="column-zip">{zip}</div>
      <div className="column-date">{viewedDate}</div>
      <div className="column-area">
        {area}m<span>2</span>
      </div>
      <div className="column-price">${price}</div>
      <div className="column-status">
        <StatusItem status={progress} />
      </div>
      <div className="column-edit">
        <Link to={`${routes.deals}/${id_deal}`}>
          <ImgEdit />
        </Link>
      </div>
    </div>
  );
};

export default SpreadsheetItem;
