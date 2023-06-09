import { FC } from 'react';
import ImgLogo from './ui/images/ImgLogo';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="logo">
      <ImgLogo />
    </div>
  );
};

export default Logo;
