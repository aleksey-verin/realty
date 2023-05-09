import { FC, ReactNode } from 'react';
import style from './ButtonOval.module.css';

interface ButtonOvalProps {
  children: string | ReactNode;
  handleClick?: () => void;
  styleClass?: 'cancel';
}

const ButtonOval: FC<ButtonOvalProps> = ({ children, handleClick, styleClass }) => {
  return (
    <button onClick={handleClick} className={`${style.button} ${styleClass ? style.cancel : ''}`}>
      {children}
    </button>
  );
};

export default ButtonOval;
