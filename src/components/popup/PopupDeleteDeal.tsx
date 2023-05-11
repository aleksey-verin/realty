import { FC } from 'react';
import ButtonOval from '../ui/buttons/ButtonOval';
import { contentLocal } from '../../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../../store/reducers/localizationSlice';
import { useAppDispatch } from '../../store/store';
import { deleteDeal } from '../../store/reducers/dealsSlice';
import { dealsType } from '../../utils/mockdata/mockDealsRus';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

interface PopupDeleteDealsProps {
  deal: dealsType;
  handleClosePopup: () => void;
}

const PopupDeleteDeal: FC<PopupDeleteDealsProps> = ({ deal, handleClosePopup }) => {
  const dispatch = useAppDispatch();
  const { lang } = useSelector(selectorLocalization);

  const navigate = useNavigate();

  const content = contentLocal.components.popup.dealsDelete;

  const handleSubmit = () => {
    console.log('delete');
    dispatch(deleteDeal(deal));
    handleClosePopup();
    navigate(routes.deals);
  };

  return (
    <div className="popup-delete">
      <ButtonOval styleClass="transparent-red" handleClick={handleClosePopup}>
        {content.footerButtonCancel[lang]}
      </ButtonOval>
      <ButtonOval styleClass="primary-blue" handleClick={handleSubmit}>
        {content.footerButtonDelete[lang]}
      </ButtonOval>
    </div>
  );
};

export default PopupDeleteDeal;
