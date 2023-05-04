import { FC, useState } from 'react';
import ImgArrowDown from '../components/ui/images/ImgArrowDown';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import SpreadsheetItem from '../components/deals/SpreadsheetItem';
import Header from '../components/Header';
import PopupContainer from '../components/popup/PopupContainer';
import PopupEditDeals from '../components/popup/PopupEditDeals';
import { contentLocal } from '../constants/contentLocal';
import { mockDealsRus } from '../utils/mockdata/mockDealsRus';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const local = 'rus';
  const totalTasks = '23';

  return (
    <div className="content">
      <Header
        handleButtonClick={() => setPopupIsOpen(true)}
        headerTitle={contentLocal.pages.deals.header[local]}
        isButtonVisible={true}
        headerButtonTitle={contentLocal.pages.deals.headerButton[local]}
      />
      <main>
        <div className="filters">
          <div className="filters-title">{`${contentLocal.pages.deals.tableTitle[local]}: ${totalTasks} ${contentLocal.pages.deals.tableTitleItems[local]}`}</div>
          <div className="filters-sort">
            <div className="filters-sort__title">{contentLocal.pages.deals.sortLabel[local]}</div>
            <div className="filters-sort__image">
              <ImgArrowDown />
            </div>
          </div>
          <div className="filters-filter">
            <div className="filters-filter__title">
              {contentLocal.pages.deals.filterLabel[local]}
            </div>
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
            <div className="spreadsheet-title__item column-address">
              {contentLocal.pages.deals.tableAddress[local]}
            </div>
            <div className="spreadsheet-title__item column-city">
              {contentLocal.pages.deals.tableCity[local]}
            </div>
            <div className="spreadsheet-title__item column-state">
              {contentLocal.pages.deals.tableState[local]}
            </div>
            <div className="spreadsheet-title__item column-zip">
              {contentLocal.pages.deals.tableZip[local]}
            </div>
            <div className="spreadsheet-title__item column-date">
              {contentLocal.pages.deals.tableDate[local]}
            </div>
            <div className="spreadsheet-title__item column-area">
              {contentLocal.pages.deals.tableArea[local]}
            </div>
            <div className="spreadsheet-title__item column-price">
              {contentLocal.pages.deals.tablePrice[local]}
            </div>
            <div className="spreadsheet-title__item column-status">
              {contentLocal.pages.deals.tableStatus[local]}
            </div>
            <div className="spreadsheet-title__item column-edit">
              {contentLocal.pages.deals.tableEdit[local]}
            </div>
          </div>
          <div className="spreadsheet-content">
            {mockDealsRus.map((item) => (
              <SpreadsheetItem key={item.id_deal} data={item} />
            ))}
          </div>
        </div>
        {popupIsOpen && (
          <PopupContainer
            title={contentLocal.components.popup.dealsAddEdit.headerTitleAdd[local]}
            handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupEditDeals content={contentLocal.components.popup.dealsAddEdit} />
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
