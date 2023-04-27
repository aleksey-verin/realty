import { FC, useEffect, useReducer, useRef, useState } from 'react';
import ImgDashboard from './ui/sidebar/ImgDashboard';
import ImgDashboard2 from './ui/sidebar/ImgDashboardActive';
import { routesType } from '../routes/routes';

interface SidebarItemProps {
  data: routesType;
}

const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
  const { path, title, images } = data;
  const [isActive, setIsActive] = useState(false);
  const [over, setOver] = useState(false);

  const myDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!myDiv.current) return;
    if (myDiv.current.classList.contains('active')) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    console.log(myDiv.current.classList.contains('sidebar-item')); // change to 'active'
  }, [myDiv]);

  return (
    <div
      ref={myDiv}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      className="sidebar-item"
      title={title}>
      {isActive ? images.active : over ? images.active : images.normal}
    </div>
  );
};

export default SidebarItem;
