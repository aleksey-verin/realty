import { FC, useState } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';
import { contentLocal } from '../../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../../store/reducers/localizationSlice';
import { useAppDispatch } from '../../store/store';
import dayjs from 'dayjs';
import { addDeal, selectorDeals, sortDeals } from '../../store/reducers/dealsSlice';
import { dealsType } from '../../utils/mockdata/mockDealsRus';
import { progressStatusForDeals } from '../../utils/constants/constants';

interface PopupAddDealsProps {
  handleClosePopup: () => void;
}

const accessValue = {
  key: 'key',
  keyAndDoorman: 'keyAndDoorman',
  reception: 'reception',
  other: 'other'
};

// const defaultValue = '';
const defaultFormAddDealsValue = {
  address: '',
  city: '',
  state: '',
  zip: '',
  area: '',
  people: '',
  date: '',
  instructions: '',
  access: accessValue.key,
  price: '',
  status: progressStatusForDeals.inProgress
};

const PopupAddDeals: FC<PopupAddDealsProps> = ({ handleClosePopup }) => {
  const dispatch = useAppDispatch();

  const { lang } = useSelector(selectorLocalization);
  const content = contentLocal.components.popup.dealsAddEdit;

  const [formValues, setFormValues] = useState(defaultFormAddDealsValue);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { date, address, city, state, zip, area, people, instructions, access, price, status } =
      formValues;
    const newDeal: dealsType = {
      id_deal: String(dayjs(new Date()).valueOf()),
      createdAt: dayjs(new Date()).valueOf(),
      appointmentDate: dayjs(date).valueOf(),
      photoSrc: '',
      address: {
        address: address,
        city: city,
        state: state,
        zip: zip
      },
      area: Number(area),
      numberOfPeople: Number(people),
      instructions: instructions,
      access: access,
      price: Number(price),
      progress: status,
      id_customer: '101' //
    };
    dispatch(addDeal(newDeal));
    handleClosePopup();
  };

  return (
    <form onSubmit={handleSubmit} className="form-deal">
      <div className="form-deal__single">
        <label htmlFor="dealImage">{content.roomImage[lang]}</label>
        <input id="dealImage" type="file" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealAddress">{content.address[lang]}</label>
        <input
          required
          onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
          value={formValues.address}
          type="text"
          id="dealAddress"
          placeholder={content.addressPlaceholder[lang]}
        />
        <div className="form-deal__triple">
          <input
            required
            value={formValues.city}
            onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
            type="text"
            id="dealAddress"
            placeholder={content.cityPlaceholder[lang]}
          />
          <input
            required
            value={formValues.state}
            onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
            type="text"
            id="dealAddress"
            placeholder={content.statePlaceholder[lang]}
          />
          <input
            value={formValues.zip}
            onChange={(e) => setFormValues({ ...formValues, zip: e.target.value })}
            type="text"
            id="dealAddress"
            placeholder={content.zipPlaceholder[lang]}
          />
        </div>
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealArea">{content.roomArea[lang]}</label>
          <input
            required
            value={formValues.area}
            onChange={(e) => setFormValues({ ...formValues, area: e.target.value })}
            type="text"
            id="dealArea"
          />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPeople">{content.people[lang]}</label>
          <input
            required
            value={formValues.people}
            onChange={(e) => setFormValues({ ...formValues, people: e.target.value })}
            type="text"
            id="dealPeople"
          />
        </div>
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealDate">{content.date[lang]}</label>
        <input
          required
          value={formValues.date}
          onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
          type="datetime-local"
          id="dealDate"
        />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealInstruction">{content.instructions[lang]}</label>
        <input
          type="text"
          id="dealInstruction"
          value={formValues.instructions}
          onChange={(e) => setFormValues({ ...formValues, instructions: e.target.value })}
          placeholder={content.instructionsPlaceholder[lang]}
        />
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealAccess">{content.roomAccess[lang]}</label>
          <select
            id="dealAccess"
            value={formValues.access}
            onChange={(e) => setFormValues({ ...formValues, access: e.target.value })}>
            <option value={accessValue.key}>{content.roomAccessValue.key[lang]}</option>
            <option value={accessValue.keyAndDoorman}>
              {content.roomAccessValue.keyAndDoorman[lang]}
            </option>
            <option value={accessValue.reception}>{content.roomAccessValue.reception[lang]}</option>
            <option value={accessValue.other}>{content.roomAccessValue.other[lang]}</option>
          </select>
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPrice">{content.price[lang]}</label>
          <input
            required
            type="text"
            id="dealPrice"
            value={formValues.price}
            onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
            placeholder={content.pricePlaceholder[lang]}
          />
        </div>
      </div>
      <div className="form-deal__footer">
        <div>
          <select
            id="dealProgress"
            value={formValues.status}
            onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}>
            <option value={progressStatusForDeals.inProgress}>
              {content.progressStatuses.inProgress[lang]}
            </option>
            <option value={progressStatusForDeals.closed}>
              {content.progressStatuses.closed[lang]}
            </option>
          </select>
          <label htmlFor="dealProgress">{content.progress[lang]}</label>
        </div>
        <div>
          <ButtonOval styleClass="primary-blue">{content.footerButtonAdd[lang]}</ButtonOval>
          <ButtonOval styleClass="transparent-red" handleClick={handleClosePopup}>
            {content.footerButtonCancel[lang]}
          </ButtonOval>
        </div>
      </div>
    </form>
  );
};

export default PopupAddDeals;
