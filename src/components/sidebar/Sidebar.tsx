import { sidebarRoutes } from '../../utils/constants/sidebarItems';
import SidebarItem from './SidebarItem';

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
