import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2">
      <button 
        className="bg-blue-500 text-white p-2 rounded" 
        onClick={() => changeLanguage('en')}>
        English
      </button>
      <button 
        className="bg-green-500 text-white p-2 rounded" 
        onClick={() => changeLanguage('ig')}>
        Igbo
      </button>
      <button 
        className="bg-red-500 text-white p-2 rounded" 
        onClick={() => changeLanguage('ha')}>
        Hausa
      </button>
      <button 
        className="bg-yellow-500 text-white p-2 rounded" 
        onClick={() => changeLanguage('yo')}>
        Yoruba
      </button>
    </div>
  );
};

export default LanguageSwitcher;
