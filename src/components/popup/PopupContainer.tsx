import { FC, ReactNode } from 'react';
import ImgClose from '../ui/images/ImgClose';

interface PopupContainerProps {
  children: ReactNode;
  handleClosePopup: () => void;
  title: string;
}

const PopupContainer: FC<PopupContainerProps> = ({ children, handleClosePopup, title }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-title">
          <div>{title}</div>
          <button onClick={handleClosePopup}>
            <ImgClose />
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default PopupContainer;
