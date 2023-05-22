import { FC, useMemo, useState } from 'react';
import ImgFilter from '../components/ui/images/ImgFilter';
import ImgUser from '../components/ui/images/ImgUser';
import SpreadsheetItem from '../components/deals/SpreadsheetItem';
import Header from '../components/Header';
import PopupContainer from '../components/popup/PopupContainer';
import { contentLocal } from '../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../store/reducers/localizationSlice';
import PopupAddDeals from '../components/popup/PopupAddDeals';
import { selectorDeals, setSortingType } from '../store/reducers/dealsSlice';
import { sortingDealsValues } from '../utils/constants/constants';
import { useAppDispatch } from '../store/store';
import SelectSorting from '../components/ui/buttons/SelectSorting';
import { sortingHelper } from '../utils/helpers';
import ButtonOval from '../components/ui/buttons/ButtonOval';
import ImgClose from '../components/ui/images/ImgClose';

interface DealsProps {}

const Deals: FC<DealsProps> = () => {
  console.log('component Deals');
  const dispatch = useAppDispatch();
  const { lang } = useSelector(selectorLocalization);
  const { deals, sortingType } = useSelector(selectorDeals);

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [filtersMenuIsOpen, setFiltersMenuIsOpen] = useState(false);

  const modifiedDeals = useMemo(() => sortingHelper(deals, sortingType), [deals, sortingType]);
  // const modifiedDeals = deals.length ? sortingHelper(deals, sortingType) : deals;

  const totalTasks = modifiedDeals.length;

  const handleSelect = (optionType: string) => {
    dispatch(setSortingType(optionType));
  };

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
          <div className="filters-title">
            {`${contentLocal.pages.deals.tableTitle[lang]}: ${totalTasks} ${contentLocal.pages.deals.tableTitleItems[lang]}`}
          </div>
          <SelectSorting
            menuItems={sortingDealsValues}
            activeOption={sortingType}
            handleSorting={handleSelect}
          />
          {/* <div className="filters-sort">
            <div className="filters-sort__title">{contentLocal.pages.deals.sortLabel[lang]}</div>
            <div className="filters-sort__image">
              <ImgArrowDown />
            </div>
          </div> */}
          <div className="filters-filter" onClick={() => setFiltersMenuIsOpen(!filtersMenuIsOpen)}>
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
            {modifiedDeals.map((item) => (
              <SpreadsheetItem key={item.id_deal} data={item} />
            ))}
          </div>
        </div>

        <div className={`filters-menu ${filtersMenuIsOpen ? 'open' : ''}`}>
          <div className="filters-menu__title">
            <div>Выберите фильтры</div>
            <button onClick={() => setFiltersMenuIsOpen(!filtersMenuIsOpen)}>
              <ImgClose />
            </button>
          </div>
          <div className="filters-menu__filters form-deal">
            <form>
              <input type="text" />
              <input type="text" />

              <input type="text" />
              <div className="form-deal__single">
                <label htmlFor="dealDate">Выберите дату</label>
                <input
                  required
                  // value={formValues.date}
                  // onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                  type="date"
                  id="dealDate"
                />
                <input
                  required
                  // value={formValues.date}
                  // onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                  type="date"
                  id="dealDate"
                />
              </div>
              <div>
                <ButtonOval styleClass="primary-blue">Применить</ButtonOval>
                <ButtonOval styleClass="transparent-red">Отменить</ButtonOval>
              </div>
            </form>
          </div>
          {/* <ButtonOval
            handleClick={() => setFiltersMenuIsOpen(!filtersMenuIsOpen)}
            styleClass="primary-blue">
            Закрыть
          </ButtonOval> */}

          {/* <div className="details-aside__record record">
            <div className="record-title">{asideContent.activity[lang]}</div>
            <form action="#" className="record-form">
              <label htmlFor="newNote">{asideContent.description[lang]}</label>
              <input type="text" id="newNote" placeholder={asideContent.notePlaceholder[lang]} />
              <input type="datetime-local" />
              <label htmlFor="newImage">{asideContent.image[lang]}</label>
              <input type="file" />
              <ButtonOval styleClass="primary-blue">{asideContent.btnSave[lang]}</ButtonOval>
            </form>
          </div> */}
        </div>
      </main>
      <footer>
        <div className="load-more"></div>
      </footer>
      {popupIsOpen && (
        <PopupContainer
          title={contentLocal.components.popup.dealsAddEdit.headerTitleAdd[lang]}
          handleClosePopup={() => setPopupIsOpen(false)}>
          <PopupAddDeals handleClosePopup={() => setPopupIsOpen(false)} />
        </PopupContainer>
      )}
    </div>
  );
};

export default Deals;
