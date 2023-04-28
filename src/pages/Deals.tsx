import { FC } from 'react';
import ImgArrowDown from '../components/ui/images/ImgArrowDown';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import ImgEdit from '../components/ui/images/ImgEdit';
import StatusItem from '../components/ui/StatusItem';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  const styleUser = {
    backgroundImage: `url('./public/avatar.jpg')`
  };

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
          <div className="spreadsheet-title__item column-avatar">
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
          <div className="spreadsheet-content column">
            <div className="spreadsheet-content__user column-avatar">
              <div style={styleUser} className="column-avatar__pic"></div>
            </div>
            <div className="spreadsheet-content__item column-name">
              475 Spruce Drive, Pittsburgh, PA 23592
            </div>
            <div className="spreadsheet-content__item column-area">100M2</div>
            <div className="spreadsheet-content__item column-date">Nov 14, 2021 07:00 AM</div>
            <div className="spreadsheet-content__item column-price">$6000</div>
            <div className="spreadsheet-content__item column-status">
              <StatusItem />
            </div>
            <div className="spreadsheet-content__item column-edit">
              <ImgEdit />
            </div>
          </div>
        </div>
      </div>
      <div className="load-more"></div>
    </section>
  );
};

export default Deals;
