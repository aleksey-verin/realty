import { FC } from 'react';
import { routesType } from '../routes/routes';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  data: routesType;
}

const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
  const { path, title, menuImage } = data;

  return (
    <NavLink to={path} className="sidebar-item" title={title}>
      {({ isActive }) => (isActive ? menuImage.active : menuImage.normal)}
    </NavLink>
  );
};

export default SidebarItem;
