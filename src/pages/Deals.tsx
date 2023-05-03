import { FC, useState } from 'react';
import ImgArrowDown from '../components/ui/images/ImgArrowDown';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import SpreadsheetItem from '../components/deals/SpreadsheetItem';
import { mockDeals } from '../utils/mockdata/deals';
import Header from '../components/Header';
import PopupContainer from '../components/popup/PopupContainer';
import PopupEditDeals from '../components/popup/PopupEditDeals';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  return (
    <div className="content">
      <Header
        handleButtonClick={() => setPopupIsOpen(true)}
        headerTitle="Deals"
        isButtonVisible={true}
        headerButtonTitle="Add New Deals"
      />
      <main>
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
            <div className="spreadsheet-title__item column-address">Address</div>
            <div className="spreadsheet-title__item column-date">Appointment Date</div>
            <div className="spreadsheet-title__item column-area">Area</div>
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
        {popupIsOpen && (
          <PopupContainer title="Add New Deal" handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupEditDeals />
          </PopupContainer>
        )}
      </main>
      <footer>
        <div className="load-more"></div>
      </footer>
    </div>
  );
};

export default Deals;
