import { FC, ReactNode } from 'react';
import ImgClose from '../ui/images/ImgClose';

interface PopupContainerProps {
  children: ReactNode;
  handleClosePopup: () => void;
}

const PopupContainer: FC<PopupContainerProps> = ({ children, handleClosePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-title">
          <div>Edit Deal</div>
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
