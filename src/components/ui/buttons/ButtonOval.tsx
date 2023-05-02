import { FC, ReactNode } from 'react';
import style from './ButtonOval.module.css';

interface ButtonOvalProps {
  children: string | ReactNode;
  handleClick?: () => void;
}

const ButtonOval: FC<ButtonOvalProps> = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className={style.button}>
      {children}
    </button>
  );
};

export default ButtonOval;
