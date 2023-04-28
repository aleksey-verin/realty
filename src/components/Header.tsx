import { FC } from 'react';
import Logo from './header/Logo';
import ImgAdd from './ui/images/ImgAdd';
import ImgSearch from './ui/images/ImgSearch';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const styleUser = {
    backgroundImage: `url('./public/avatar.jpg')`
  };

  return (
    <header className="header">
      <Logo />
      <div className="header-title">Deals</div>
      <div className="header-actions">
        <div className="header-actions__action button">
          <div className="button-title">Add New Deal</div>
          <div className="button-image">
            <ImgAdd />
          </div>
        </div>
        <div className="header-actions__search search">
          <ImgSearch />
        </div>
        <div style={styleUser} className="header-actions__user user"></div>
      </div>
    </header>
  );
};

export default Header;
