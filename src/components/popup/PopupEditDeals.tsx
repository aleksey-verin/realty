import { FC } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';
import { dealsAddEditType } from '../../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../../store/reducers/localizationSlice';

interface PopupEditDealsProps {
  content: dealsAddEditType;
}

const PopupEditDeals: FC<PopupEditDealsProps> = ({ content }) => {
  const { lang } = useSelector(selectorLocalization);

  return (
    <form className="form-deal" action="#">
      <div className="form-deal__single">
        <label htmlFor="dealImage">{content.roomImage[lang]}</label>
        <input id="dealImage" type="file" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealAddress">{content.address[lang]}</label>
        <input type="text" id="dealAddress" placeholder={content.addressPlaceholder[lang]} />
        <div className="form-deal__triple">
          <input type="text" id="dealAddress" placeholder={content.cityPlaceholder[lang]} />
          <input type="text" id="dealAddress" placeholder={content.statePlaceholder[lang]} />
          <input type="text" id="dealAddress" placeholder={content.zipPlaceholder[lang]} />
        </div>
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealArea">{content.roomArea[lang]}</label>
          <input type="text" id="dealArea" />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPeople">{content.people[lang]}</label>
          <input type="text" id="dealPeople" />
        </div>
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealDate">{content.date[lang]}</label>
        <input type="datetime-local" id="dealDate" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealInstruction">{content.instructions[lang]}</label>
        <input
          type="text"
          id="dealInstruction"
          placeholder={content.instructionsPlaceholder[lang]}
        />
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealAccess">{content.roomAccess[lang]}</label>
          <select id="dealAccess" defaultValue="onlyKey">
            <option value="key">{content.roomAccessValue.key[lang]}</option>
            <option value="keyAndDoorman">{content.roomAccessValue.keyAndDoorman[lang]}</option>
            <option value="reception">{content.roomAccessValue.reception[lang]}</option>
            <option value="other">{content.roomAccessValue.other[lang]}</option>
          </select>
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPrice">{content.price[lang]}</label>
          <input type="text" id="dealPrice" placeholder={content.pricePlaceholder[lang]} />
        </div>
      </div>
      <div className="form-deal__footer">
        <div>
          <label htmlFor="dealProgress">{content.progress[lang]}</label>
          <select id="dealProgress" defaultValue="inProgress">
            <option value="inProgress">{content.progressStatuses.inProgress[lang]}</option>
            <option value="closed">{content.progressStatuses.closed[lang]}</option>
          </select>
        </div>
        <ButtonOval>{content.footerButtonSave[lang]}</ButtonOval>
      </div>
    </form>
  );
};

export default PopupEditDeals;
