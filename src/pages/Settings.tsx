import React, { FC, SelectHTMLAttributes, useState } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import {
  languagesType,
  selectorLocalization,
  setLanguage
} from '../store/reducers/localizationSlice';
import { useAppDispatch } from '../store/store';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const { lang } = useSelector(selectorLocalization);
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState(lang);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as languagesType;
    setSelectValue(value);
    dispatch(setLanguage(value));
  };

  return (
    <div className="content">
      <Header headerTitle="Settings" isButtonVisible={false} />
      <main>
        <UnderConstruction />
        <div style={{ marginTop: 20 }}>
          <label>
            Choose language:
            <select name="lang" id="lang" value={selectValue} onChange={handleSelect}>
              <option value="rus">Русский</option>
              <option value="eng">English</option>
            </select>
          </label>
        </div>
      </main>
    </div>
  );
};

export default Settings;
