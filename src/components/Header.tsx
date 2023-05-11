import { FC } from 'react';
import ImgAdd from './ui/images/ImgAdd';
import ImgSearch from './ui/images/ImgSearch';
import ImgArrowLeft from './ui/images/ImgArrowLeft';
import { Link } from 'react-router-dom';
import ButtonOval from './ui/buttons/ButtonOval';

interface HeaderProps {
  headerTitle: string;
  isButtonVisible: boolean;
  handleButtonClick?: () => void;
  headerButtonTitle?: string;
  isAsideBlockVisible?: boolean;
  pathForButtonBack?: string;
  headerButtonBackTitle?: string;
}

const Header: FC<HeaderProps> = ({
  headerTitle,
  isButtonVisible,
  handleButtonClick,
  headerButtonTitle,
  isAsideBlockVisible,
  pathForButtonBack,
  headerButtonBackTitle
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
              <div>{headerButtonBackTitle}</div>
            </div>
          </Link>
        ) : null}
        <div className="header-title__text">{headerTitle}</div>
      </div>
      <div className={headerActionsClasses}>
        {isButtonVisible && (
          <ButtonOval handleClick={handleButtonClick} styleClass="primary-blue">
            {headerButtonTitle}
            <ImgAdd />
          </ButtonOval>
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
