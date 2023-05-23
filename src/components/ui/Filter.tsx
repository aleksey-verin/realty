import { FC, useState } from 'react';
import ImgFilter from './images/ImgFilter';
import ButtonOval from './buttons/ButtonOval';
import ImgClose from './images/ImgClose';

interface FilterProps {
  title: string;
}

const Filter: FC<FilterProps> = ({ title }) => {
  const [filtersMenuIsOpen, setFiltersMenuIsOpen] = useState(false);

  const handleClick = () => {
    setFiltersMenuIsOpen(!filtersMenuIsOpen);
  };

  return (
    <>
      <div className="filters-filter" onClick={handleClick}>
        <div className="filters-filter__title">{title}</div>
        <div className="filters-filter__image">
          <ImgFilter />
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
          <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10
              }}>
              <label htmlFor="statusFilter">Статус:</label>
              <select id="statusFilter" style={{ width: 280 }}>
                <option value="all">Все статусы</option>
                <option value="inProgress">В процессе</option>
                <option value="done">Завершено</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10
              }}>
              <label htmlFor="cityFilter">Город:</label>
              <select id="cityFilter" style={{ width: 280 }}>
                <option value="all">Все города</option>
                <option value="inProgress">Санкт-Петербург</option>
                <option value="done">Пушкин</option>
              </select>
            </div>
            <div className="form-deal__single">
              <label htmlFor="dealDate">Дата встречи:</label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10
                }}>
                <div>с:</div>
                <input
                  // required
                  // value={formValues.date}
                  // onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                  type="date"
                  id="dealDate"
                />
                <div>по:</div>
                <input
                  // required
                  // value={formValues.date}
                  // onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                  type="date"
                  id="dealDate"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between'
              }}>
              <ButtonOval styleClass="primary-blue">Применить</ButtonOval>
              <ButtonOval styleClass="transparent-red">Сбросить</ButtonOval>
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
    </>
  );
};

export default Filter;
