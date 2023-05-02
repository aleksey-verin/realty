import { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';
import ImgUndo from './ui/images/ImgUndo';
import ButtonOval from './ui/buttons/ButtonOval';
import ImgDeals from './ui/images/sidebar/ImgDeals';

interface UnderConstructionProps {}

const UnderConstruction: FC<UnderConstructionProps> = () => {
  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <p>The page is under construction. You can go to the "Deals" page</p>
      <Link to={routes.deals} className="button">
        <ButtonOval>
          <ImgUndo />
          Go to Deals
          <ImgDeals />
        </ButtonOval>
      </Link>
    </div>
  );
};

export default UnderConstruction;
