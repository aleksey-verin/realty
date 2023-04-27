import { FC } from 'react';
import ImgLogo from './ui/ImgLogo';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <div className="header-logo">
        <ImgLogo />
      </div>
      <div className="header-menu">MENU</div>
    </header>
  );
};

export default Header;
