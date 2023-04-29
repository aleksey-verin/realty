import { FC, useEffect, useState } from 'react';
import ImgAdd from './ui/images/ImgAdd';
import ImgSearch from './ui/images/ImgSearch';
import { useLocation } from 'react-router-dom';
import { getHeaderData } from '../utils/headerData';
import { sidebarRoutes } from '../routes/routes';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  const [headerTitle, setHeaderTitle] = useState<string>('');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
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
    const isThisSidebarPage = sidebarRoutes.findIndex((item) => item.path === pathname);
    isThisSidebarPage >= 0 ? setIsButtonVisible(true) : setIsButtonVisible(false);
  }, [pathname]);

  const styleUser = {
    backgroundImage: `url('./avatar.jpg')`
  };

  return (
    <header className="header">
      <div className="header-title">{headerTitle}</div>
      <div className="header-actions">
        {isButtonVisible && (
          <div className="header-actions__action button">
            <div className="button-title">{headerButtonTitle}</div>
            <div className="button-image">
              <ImgAdd />
            </div>
          </div>
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
