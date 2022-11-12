import i18n from 'i18next'

import Backend from 'i18next-xhr-backend'

import { initReactI18next } from 'react-i18next'
import translationUa from './assets/translations/ua.json'
import translationEn from './assets/translations/en.json'
import translationPl from './assets/translations/pl.json'
// window?.localStorage.setItem('i18nextLng', 'pl')
const resources = {
  ua: {
    translation: translationUa,
  },
  pl: {
    translation: translationPl,
  },
  en: {
    translation: translationEn,
  },
}
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: `${window.localStorage.getItem('language') || 'ua'}`,
    fallbackLng: `${window.localStorage.getItem('language') || 'ua'}`,
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  })
export default i18n
