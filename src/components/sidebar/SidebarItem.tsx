import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routesType } from '../../utils/constants/sidebarItems';

interface SidebarItemProps {
  data: routesType;
}

const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
  const { path, title, menuImage } = data;

  return (
    <NavLink to={path} className="sidebar-item" title={title}>
      {({ isActive }) => (isActive ? menuImage?.active : menuImage?.normal)}
    </NavLink>
  );
};

export default SidebarItem;
