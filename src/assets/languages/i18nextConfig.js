import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ES from './es/translations.json'
import EN from './en/translations.json'

const i18config = () => {
  return i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: {
        es: { translation: ES },
        en: { translation: EN }
      },
      supportedLngs: ['es', 'en'],
      fallbackLng: 'es',
      detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'subdomain', 'path'],
        caches: ['cookie']
      },
      react: { useSuspense: false }
    })
}

export default i18config
