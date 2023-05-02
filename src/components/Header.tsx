import { FC } from 'react';
import ImgAdd from './ui/images/ImgAdd';
import ImgSearch from './ui/images/ImgSearch';
import ImgArrowLeft from './ui/images/ImgArrowLeft';
import { Link } from 'react-router-dom';
import ButtonOval from './ui/buttons/ButtonOval';

interface HeaderProps {
  headerTitle: string;
  isButtonVisible: boolean;
  headerButtonTitle?: string;
  isAsideBlockVisible?: boolean;
  pathForButtonBack?: string;
}

const Header: FC<HeaderProps> = ({
  headerTitle,
  isButtonVisible,
  headerButtonTitle,
  isAsideBlockVisible,
  pathForButtonBack
}) => {
  const headerActionsClasses = `header-actions ${isAsideBlockVisible ? 'aside-block' : ''}`;

  const styleUser = {
    backgroundImage: `url('./avatar.jpg')`
  };

  return (
    <header className="header">
      <div className="header-title">
        {pathForButtonBack ? (
          <Link to={pathForButtonBack}>
            <div className="header-title__back">
              <div>
                <ImgArrowLeft />
              </div>
              <div>Back</div>
            </div>
          </Link>
        ) : null}
        <div className="header-title__text">{headerTitle}</div>
      </div>
      <div className={headerActionsClasses}>
        {isButtonVisible && (
          <ButtonOval>
            {headerButtonTitle}
            <ImgAdd />
          </ButtonOval>
          // <div className="header-actions__action button">
          //   <div className="button-title">{headerButtonTitle}</div>
          //   <div className="button-image">
          //     <ImgAdd />
          //   </div>
          // </div>
        )}
        <div className="header-actions__search search">
          <ImgSearch />
        </div>
        <div style={styleUser} className="header-actions__user user"></div>
      </div>
    </header>
  );
};

export default Header;
