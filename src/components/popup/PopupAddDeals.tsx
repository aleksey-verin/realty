import { FC, useState } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';
import { contentLocal } from '../../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../../store/reducers/localizationSlice';
import { useAppDispatch } from '../../store/store';
import { v4 as uniqueID } from 'uuid';
import dayjs from 'dayjs';
import { addDeals } from '../../store/reducers/dealsSlice';
import { dealsType } from '../../utils/mockdata/mockDealsRus';
import { progressStatusForDeals } from '../../utils/constants/constants';

interface PopupAddDealsProps {
  // content: dealsAddEditType;
  handleClosePopup: () => void;
}

const defaultValue = '';

const PopupAddDeals: FC<PopupAddDealsProps> = ({ handleClosePopup }) => {
  const dispatch = useAppDispatch();

  const { lang } = useSelector(selectorLocalization);
  const content = contentLocal.components.popup.dealsAddEdit;

  const [inputAddressValue, setInputAddressValue] = useState(defaultValue);
  const [inputCityValue, setInputCityValue] = useState(defaultValue);
  const [inputStateValue, setInputStateValue] = useState(defaultValue);
  const [inputZipValue, setInputZipValue] = useState(defaultValue);
  const [inputAreaValue, setInputAreaValue] = useState(defaultValue);
  const [inputPeopleValue, setInputPeopleValue] = useState(defaultValue);
  const [inputDateValue, setInputDateValue] = useState(defaultValue);
  const [inputInstructionValue, setInputInstructionValue] = useState(defaultValue);
  const [selectAccessValue, setSelectAccessValue] = useState('key');
  const [inputPriceValue, setInputPriceValue] = useState(defaultValue);
  const [selectStatusValue, setSelectStatusValue] = useState(progressStatusForDeals.inProgress);

  // const id_deal = useId();
  // console.log(id_deal);

  const day = dayjs(new Date()).valueOf();
  console.log(day);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDeal: dealsType = {
      id_deal: uniqueID(),
      createdAt: dayjs(new Date()).valueOf(),
      appointmentDate: dayjs(inputDateValue).valueOf(),
      photoSrc: '',
      address: {
        address: inputAddressValue,
        city: inputCityValue,
        state: inputStateValue,
        zip: inputZipValue
      },
      area: +inputAreaValue,
      numberOfPeople: +inputPeopleValue,
      instructions: inputInstructionValue,
      access: selectAccessValue,
      price: +inputPriceValue,
      progress: selectStatusValue,
      id_customer: '101' //
    };
    dispatch(addDeals(newDeal));
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
          onChange={(e) => setInputAddressValue(e.target.value)}
          value={inputAddressValue}
          type="text"
          id="dealAddress"
          placeholder={content.addressPlaceholder[lang]}
        />
        <div className="form-deal__triple">
          <input
            value={inputCityValue}
            onChange={(e) => setInputCityValue(e.target.value)}
            type="text"
            id="dealAddress"
            placeholder={content.cityPlaceholder[lang]}
          />
          <input
            value={inputStateValue}
            onChange={(e) => setInputStateValue(e.target.value)}
            type="text"
            id="dealAddress"
            placeholder={content.statePlaceholder[lang]}
          />
          <input
            value={inputZipValue}
            onChange={(e) => setInputZipValue(e.target.value)}
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
            value={inputAreaValue}
            onChange={(e) => setInputAreaValue(e.target.value)}
            type="text"
            id="dealArea"
          />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPeople">{content.people[lang]}</label>
          <input
            value={inputPeopleValue}
            onChange={(e) => setInputPeopleValue(e.target.value)}
            type="text"
            id="dealPeople"
          />
        </div>
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealDate">{content.date[lang]}</label>
        <input
          value={inputDateValue}
          onChange={(e) => setInputDateValue(e.target.value)}
          type="datetime-local"
          id="dealDate"
        />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealInstruction">{content.instructions[lang]}</label>
        <input
          required
          type="text"
          id="dealInstruction"
          value={inputInstructionValue}
          onChange={(e) => setInputInstructionValue(e.target.value)}
          placeholder={content.instructionsPlaceholder[lang]}
        />
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealAccess">{content.roomAccess[lang]}</label>
          <select
            id="dealAccess"
            value={selectAccessValue}
            onChange={(e) => setSelectAccessValue(e.target.value)}>
            <option value="key">{content.roomAccessValue.key[lang]}</option>
            <option value="keyAndDoorman">{content.roomAccessValue.keyAndDoorman[lang]}</option>
            <option value="reception">{content.roomAccessValue.reception[lang]}</option>
            <option value="other">{content.roomAccessValue.other[lang]}</option>
          </select>
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPrice">{content.price[lang]}</label>
          <input
            type="text"
            id="dealPrice"
            value={inputPriceValue}
            onChange={(e) => setInputPriceValue(e.target.value)}
            placeholder={content.pricePlaceholder[lang]}
          />
        </div>
      </div>
      <div className="form-deal__footer">
        <div>
          <label htmlFor="dealProgress">{content.progress[lang]}</label>
          <select
            id="dealProgress"
            value={selectStatusValue}
            onChange={(e) => setSelectStatusValue(e.target.value)}>
            <option value={progressStatusForDeals.inProgress}>
              {content.progressStatuses.inProgress[lang]}
            </option>
            <option value={progressStatusForDeals.closed}>
              {content.progressStatuses.closed[lang]}
            </option>
          </select>
        </div>
        <ButtonOval>{content.footerButtonSave[lang]}</ButtonOval>
      </div>
    </form>
  );
};

export default PopupAddDeals;
