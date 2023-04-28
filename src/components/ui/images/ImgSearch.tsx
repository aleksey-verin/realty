import { FC } from 'react';

interface ImgSearchProps {}

const ImgSearch: FC<ImgSearchProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.58342 18.1248C4.87508 18.1248 1.04175 14.2915 1.04175 9.58317C1.04175 4.87484 4.87508 1.0415 9.58342 1.0415C14.2917 1.0415 18.1251 4.87484 18.1251 9.58317C18.1251 14.2915 14.2917 18.1248 9.58342 18.1248ZM9.58342 2.2915C5.55841 2.2915 2.29175 5.5665 2.29175 9.58317C2.29175 13.5998 5.55841 16.8748 9.58342 16.8748C13.6084 16.8748 16.8751 13.5998 16.8751 9.58317C16.8751 5.5665 13.6084 2.2915 9.58342 2.2915Z"
        fill="#7E92A2"
      />
      <path
        d="M18.3334 18.9582C18.1751 18.9582 18.0167 18.8998 17.8917 18.7748L16.2251 17.1082C15.9834 16.8665 15.9834 16.4665 16.2251 16.2248C16.4667 15.9832 16.8667 15.9832 17.1084 16.2248L18.7751 17.8915C19.0167 18.1332 19.0167 18.5332 18.7751 18.7748C18.6501 18.8998 18.4917 18.9582 18.3334 18.9582Z"
        fill="#7E92A2"
      />
    </svg>
  );
};

export default ImgSearch;