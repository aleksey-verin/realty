import { FC } from 'react';
import ImgArrowDown from '../components/ui/images/ImgArrowDown';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import SpreadsheetItem from '../components/deals/SpreadsheetItem';
import { mockDeals } from '../utils/mockdata/deals';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  return (
    <section className="section">
      <div className="filters">
        <div className="filters-title">Total: 23 tasks</div>
        <div className="filters-sort">
          <div className="filters-sort__title">Sort by: Date Created</div>
          <div className="filters-sort__image">
            <ImgArrowDown />
          </div>
        </div>
        <div className="filters-filter">
          <div className="filters-filter__title">Filter</div>
          <div className="filters-filter__image">
            <ImgFilter />
          </div>
        </div>
      </div>
      <div className="spreadsheet">
        <div className="spreadsheet-title column">
          <div className="spreadsheet-title__item column-picture">
            <ImgUser />
          </div>
          <div className="spreadsheet-title__item column-name">Name</div>
          <div className="spreadsheet-title__item column-area">Area</div>
          <div className="spreadsheet-title__item column-date">Appointment Date</div>
          <div className="spreadsheet-title__item column-price">Price</div>
          <div className="spreadsheet-title__item column-status">Status</div>
          <div className="spreadsheet-title__item column-edit">Edit</div>
        </div>
        <div className="spreadsheet-content">
          {mockDeals.map((item) => (
            <SpreadsheetItem key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="load-more"></div>
    </section>
  );
};

export default Deals;
