import { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';
import ImgUndo from './ui/images/ImgUndo';
import ButtonOval from './ui/buttons/ButtonOval';
import ImgDeals from './ui/images/sidebar/ImgDeals';
import { contentLocal } from '../utils/constants/contentLocal';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../store/reducers/localizationSlice';

interface UnderConstructionProps {}

const UnderConstruction: FC<UnderConstructionProps> = () => {
  const { lang } = useSelector(selectorLocalization);

  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <p>{contentLocal.components.underConstruction.text[lang]}</p>
      <Link to={routes.deals} className="button">
        <ButtonOval>
          <ImgUndo />
          {contentLocal.components.underConstruction.button[lang]}
          <ImgDeals />
        </ButtonOval>
      </Link>
    </div>
  );
};

export default UnderConstruction;
