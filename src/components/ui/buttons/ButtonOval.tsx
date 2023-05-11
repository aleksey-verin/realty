import { FC, ReactNode } from 'react';
import style from './ButtonOval.module.css';

interface ButtonOvalProps {
  children: string | ReactNode;
  handleClick?: () => void;
  styleClass: 'primary-blue' | 'transparent-red';
}

const ButtonOval: FC<ButtonOvalProps> = ({ children, handleClick, styleClass }) => {
  return (
    <button onClick={handleClick} className={`${style.button} ${style[styleClass]}`}>
      {children}
    </button>
  );
};

export default ButtonOval;
