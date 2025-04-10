import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Define the types for translations
interface Resources {
  [key: string]: {
    translation: {
      [key: string]: string;
    };
  };
}

// Language translations
const resources: Resources = {
  en: {
    translation: {
      welcome: 'Welcome to Truth Check Nigeria',
      description: 'Your one-stop solution for verifying the truth behind Nigerian news and events.',
      button: 'Click Me'
    }
  },
  ig: {
    translation: {
      welcome: 'Nnọọ na Truth Check Nigeria',
      description: 'Ngwọta gị zuru oke maka ịnweta eziokwu banyere akụkọ na mmejọ Nigeria.',
      button: 'Pịa M'
    }
  },
  ha: {
    translation: {
      welcome: 'Barka da zuwa Truth Check Nigeria',
      description: 'Mafi kyau wurin tantance gaskiyar bayanan labarai da abubuwan da ke faruwa a Najeriya.',
      button: 'Danna Ni'
    }
  },
  yo: {
    translation: {
      welcome: 'Ẹ ku abo si Truth Check Nigeria',
      description: 'Ojutu rẹ ti o peye fun ṣiṣe ayẹwo otitọ ti awọn iroyin ati iṣẹlẹ ti o ṣẹlẹ ni Naijiria.',
      button: 'Tẹ Mi'
    }
  }
}

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    keySeparator: false, // We use simple key-value pairs (no nested keys)
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n
