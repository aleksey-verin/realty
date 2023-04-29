import SidebarItem from './SidebarItem';
import { sidebarRoutes } from '../routes/routes';

const Sidebar = () => {
  console.log('sidebar');
  const sidebarItems = sidebarRoutes.filter((item) => item.isMainPage);

  return (
    <nav className="sidebar">
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index} data={item} />
      ))}
    </nav>
  );
};

export default Sidebar;
