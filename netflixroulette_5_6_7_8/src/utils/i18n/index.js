import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en';

const resources = {
    en: {
        translation: translationEN
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en'
});

export default i18n;
