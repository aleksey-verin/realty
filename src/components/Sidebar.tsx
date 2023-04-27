import SidebarItem from './SidebarItem';
import { sidebarRoutes } from '../routes/routes';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {sidebarRoutes.map((item, index) => (
        <SidebarItem key={index} data={item} />
      ))}
    </nav>
  );
};

export default Sidebar;
