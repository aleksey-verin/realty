import { FC } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';

interface PopupEditDealsProps {}

const PopupEditDeals: FC<PopupEditDealsProps> = () => {
  return (
    <form className="form-deal" action="#">
      <div className="form-deal__single">
        <label htmlFor="dealImage">Room Image</label>
        <input id="dealImage" type="file" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealAddress">Address</label>
        <input type="text" id="dealAddress" />
        <div className="form-deal__triple">
          <input type="text" id="dealAddress" />
          <input type="text" id="dealAddress" />
          <input type="text" id="dealAddress" />
        </div>
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealArea">Address</label>
          <input type="text" id="dealArea" />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPeople">Address</label>
          <input type="text" id="dealPeople" />
        </div>
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealDate">Appointment Date</label>
        <input type="datetime-local" id="dealDate" />
      </div>
      <div className="form-deal__single">
        <label htmlFor="dealInstruction">Special Instructions</label>
        <input type="text" id="dealInstruction" placeholder="Leave a special instructions" />
      </div>
      <div className="form-deal__double">
        <div className="form-deal__single">
          <label htmlFor="dealAccess">Room Access</label>
          <input type="text" id="dealAccess" />
        </div>
        <div className="form-deal__single">
          <label htmlFor="dealPrice">Price ($)</label>
          <input type="text" id="dealPrice" placeholder="5000" />
        </div>
      </div>
      <div className="form-deal__footer">
        <div>
          <label htmlFor="dealProgress">Progress</label>
          <input type="text" id="dealProgress" />
        </div>
        <ButtonOval>Done</ButtonOval>
      </div>
    </form>
  );
};

export default PopupEditDeals;
