import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from '../components/Home'
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from '../components/i18n/en/en.json';
import esTranslation from '../components/i18n/ru/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: esTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });
const Root = () => {
  return (
    <BrowserRouter>
     <I18nextProvider i18n={i18n}>

        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </I18nextProvider>
    </BrowserRouter>
  )
}

export default Root