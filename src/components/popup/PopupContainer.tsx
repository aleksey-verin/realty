import { FC, ReactNode } from 'react';
import style from './PopupContainer.module.css';
import ImgClose from '../ui/images/ImgClose';

interface PopupContainerProps {
  children: ReactNode;
}

const PopupContainer: FC<PopupContainerProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.popup}>
        <div className={style.title}>
          <div className={style.titleText}>Add New Deal</div>
          <div className={style.titleClose}>
            <ImgClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContainer;
