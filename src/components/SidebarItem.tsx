import { FC, useEffect, useRef, useState } from 'react';
import { routesType } from '../routes/routes';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  data: routesType;
}

const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
  const { path, title, menuImage } = data; // will add 'path'
  // const [isActive, setIsActive] = useState(false);
  // const [over, setOver] = useState(false);

  // const myDiv = useRef<HTMLAnchorElement>(null);

  // useEffect(() => {
  //   if (!myDiv.current) return;
  //   if (myDiv.current.classList.contains('active')) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  //   console.log(myDiv.current.classList.contains('sidebar-item')); // change to 'active'
  // }, [myDiv]);

  return (
    <NavLink
      to={path}
      // ref={myDiv}
      // onMouseOver={() => setOver(true)}
      // onMouseOut={() => setOver(false)}
      className="sidebar-item"
      title={title}>
      {({ isActive }) => (isActive ? menuImage.active : menuImage.normal)}
      {/* {isActive ? images.active : images.normal} */}
    </NavLink>
  );
};

export default SidebarItem;
