import { FC, useEffect, useState } from 'react';
import Logo from './header/Logo';
import ImgAdd from './ui/images/ImgAdd';
import ImgSearch from './ui/images/ImgSearch';
import { useLocation } from 'react-router-dom';
import { getHeaderData } from '../utils/headerData';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [headerTitle, setHeaderTitle] = useState<string>('');
  const [headerButtonTitle, setHeaderButtonTitle] = useState<string>('');

  useEffect(() => {
    if (!pathname) return;
    const info = getHeaderData(pathname);
    if (info) {
      setHeaderTitle(info.title);
    }
    if (info?.headerButtonTitle) {
      setHeaderButtonTitle(info.headerButtonTitle);
    }
  }, [pathname]);

  const styleUser = {
    backgroundImage: `url('./avatar.jpg')`
  };

  return (
    <header className="header">
      <Logo />
      <div className="header-title">{headerTitle}</div>
      <div className="header-actions">
        <div className="header-actions__action button">
          <div className="button-title">{headerButtonTitle}</div>
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
