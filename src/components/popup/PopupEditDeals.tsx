import { FC } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';
import { dealsAddEditType } from '../../utils/constants/contentLocal';

interface PopupEditDealsProps {
  content: dealsAddEditType;
}

const PopupEditDeals: FC<PopupEditDealsProps> = ({ content }) => {
  const local = 'rus';

  return (
    <form className="form-deal" action="#">
      <div className="form-deal__single">
        <label htmlFor="dealImage">{content.roomImage[local]}</label>
        <input id="dealImage" type="file" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealAddress">{content.address[local]}</label>
        <input type="text" id="dealAddress" placeholder={content.addressPlaceholder[local]} />
        <div className="form-deal__triple">
          <input type="text" id="dealAddress" placeholder={content.cityPlaceholder[local]} />
          <input type="text" id="dealAddress" placeholder={content.statePlaceholder[local]} />
          <input type="text" id="dealAddress" placeholder={content.zipPlaceholder[local]} />
        </div>
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealArea">{content.roomArea[local]}</label>
          <input type="text" id="dealArea" />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPeople">{content.people[local]}</label>
          <input type="text" id="dealPeople" />
        </div>
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealDate">{content.date[local]}</label>
        <input type="datetime-local" id="dealDate" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealInstruction">{content.instructions[local]}</label>
        <input
          type="text"
          id="dealInstruction"
          placeholder={content.instructionsPlaceholder[local]}
        />
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealAccess">{content.roomAccess[local]}</label>
          <input type="text" id="dealAccess" placeholder={content.roomAccessValue[local]} />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPrice">{content.price[local]}</label>
          <input type="text" id="dealPrice" placeholder={content.pricePlaceholder[local]} />
        </div>
      </div>
      <div className="form-deal__footer">
        <div>
          <label htmlFor="dealProgress">{content.progress[local]}</label>
          <input type="text" id="dealProgress" placeholder={content.progressValues[local]} />
        </div>
        <ButtonOval>{content.footerButtonSave[local]}</ButtonOval>
      </div>
    </form>
  );
};

export default PopupEditDeals;
