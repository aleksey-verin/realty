import { FC, useEffect, useRef, useState } from 'react';
import ImgArrowDown from './images/ImgArrowDown';
import ImgArrowUp from './images/ImgArrowUp';

interface SelectSortingProps {
  menuItems: Array<{ value: string; name: string }>;
  activeOption: string; // new
  handleSorting: (optionType: string) => void; // new
}

const SelectSorting: FC<SelectSortingProps> = ({ menuItems, activeOption, handleSorting }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(activeOption);

  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeDropdownMenu(event: MouseEvent): void {
      if (menu.current && !menu.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('click', closeDropdownMenu);
    console.log('here');
    return () => {
      document.removeEventListener('click', closeDropdownMenu);
    };
  }, [menu]);

  const openMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const handleMenuItemClick = (type: string) => {
    if (type !== activeItem) {
      setActiveItem(type);
      handleSorting(type);
      setMenuOpen(false);
    }
  };

  const titleActiveItem = menuItems.find((item) => item.value === activeItem)?.name;

  return (
    <div ref={menu} className="sorting">
      <div className={`sorting-select ${activeItem !== 'none' ? 'active' : ''}`} onClick={openMenu}>
        <div className="sorting-select__text">{titleActiveItem}</div>
        <div className="sorting-select__image">{menuOpen ? <ImgArrowUp /> : <ImgArrowDown />}</div>
      </div>
      {menuOpen && (
        <div className="sorting-menu">
          <div className="sorting-menu__menu">
            {menuItems.map(({ value, name }) => (
              <div
                key={value}
                className={`sorting-menu__item ${activeItem === value ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(value)}>
                {name}
              </div>
            ))}
            {/* {Object.entries(menuItems).map(([key, value]) => (
              <div
                key={key}
                className={`sorting-menu__item ${activeItem === key ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(key as keyof ISortingDataDeals)}>
                {value.name}
              </div>
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectSorting;
