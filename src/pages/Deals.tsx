import { FC, useState } from 'react';
import ImgArrowDown from '../components/ui/images/ImgArrowDown';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import SpreadsheetItem from '../components/deals/SpreadsheetItem';
import Header from '../components/Header';
import PopupContainer from '../components/popup/PopupContainer';
import { contentLocal } from '../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../store/reducers/localizationSlice';
import PopupAddDeals from '../components/popup/PopupAddDeals';
import { selectorDeals } from '../store/reducers/dealsSlice';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  const { lang } = useSelector(selectorLocalization);
  const { deals } = useSelector(selectorDeals);

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const totalTasks = '23';

  return (
    <div className="content">
      <Header
        handleButtonClick={() => setPopupIsOpen(true)}
        headerTitle={contentLocal.pages.deals.header[lang]}
        isButtonVisible={true}
        headerButtonTitle={contentLocal.pages.deals.headerButton[lang]}
      />
      <main>
        <div className="filters">
          <div className="filters-title">{`${contentLocal.pages.deals.tableTitle[lang]}: ${totalTasks} ${contentLocal.pages.deals.tableTitleItems[lang]}`}</div>
          <div className="filters-sort">
            <div className="filters-sort__title">{contentLocal.pages.deals.sortLabel[lang]}</div>
            <div className="filters-sort__image">
              <ImgArrowDown />
            </div>
          </div>
          <div className="filters-filter">
            <div className="filters-filter__title">
              {contentLocal.pages.deals.filterLabel[lang]}
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
              {contentLocal.pages.deals.tableAddress[lang]}
            </div>
            <div className="spreadsheet-title__item column-city">
              {contentLocal.pages.deals.tableCity[lang]}
            </div>
            <div className="spreadsheet-title__item column-state">
              {contentLocal.pages.deals.tableState[lang]}
            </div>
            <div className="spreadsheet-title__item column-zip">
              {contentLocal.pages.deals.tableZip[lang]}
            </div>
            <div className="spreadsheet-title__item column-date">
              {contentLocal.pages.deals.tableDate[lang]}
            </div>
            <div className="spreadsheet-title__item column-area">
              {contentLocal.pages.deals.tableArea[lang]}
            </div>
            <div className="spreadsheet-title__item column-price">
              {contentLocal.pages.deals.tablePrice[lang]}
            </div>
            <div className="spreadsheet-title__item column-status">
              {contentLocal.pages.deals.tableStatus[lang]}
            </div>
            <div className="spreadsheet-title__item column-edit">
              {contentLocal.pages.deals.tableEdit[lang]}
            </div>
          </div>
          <div className="spreadsheet-content">
            {deals.map((item) => (
              <SpreadsheetItem key={item.id_deal} data={item} />
            ))}
          </div>
        </div>
        {popupIsOpen && (
          <PopupContainer
            title={contentLocal.components.popup.dealsAddEdit.headerTitleAdd[lang]}
            handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupAddDeals handleClosePopup={() => setPopupIsOpen(false)} />
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
