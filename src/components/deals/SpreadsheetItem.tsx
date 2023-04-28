import { FC } from 'react';
import StatusItem from '../ui/StatusItem';
import ImgEdit from '../ui/images/ImgEdit';
import { dealsType } from '../../utils/mockdata/deals';
import dayjs from 'dayjs';

interface SpreadsheetItemProps {
  data: dealsType;
}

const SpreadsheetItem: FC<SpreadsheetItemProps> = ({ data }) => {
  const {
    photoSrc,
    address: { address, city, state, zip },
    area,
    createAt,
    price
  } = data;

  const viewedDate = dayjs(createAt).format('MMM DD, YYYY HH:mm A');
  // Nov 14, 2021 07:00 AM

  const styleUser = {
    backgroundImage: `url(${photoSrc})`
  };

  return (
    <div className="spreadsheet-content column">
      <div className="spreadsheet-content__user column-picture">
        <div style={styleUser} className="column-picture__pic"></div>
      </div>
      <div className="spreadsheet-content__item column-name">
        {`${address}, ${city} ${state} ${zip}`}
      </div>
      <div className="spreadsheet-content__item column-area">
        {area}m<span>2</span>
      </div>
      <div className="spreadsheet-content__item column-date">{viewedDate}</div>
      <div className="spreadsheet-content__item column-price">${price}</div>
      <div className="spreadsheet-content__item column-status">
        <StatusItem />
      </div>
      <div className="spreadsheet-content__item column-edit">
        <ImgEdit />
      </div>
    </div>
  );
};

export default SpreadsheetItem;
