import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = [
  'auth',
  'common',
  'headers',
  'home',
  'invite',
  'profile',
  'room',
  'settings',
];
const supportedLngs = ['en'];

i18n.use(initReactI18next).init({
  //debug: true,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  ns,
  supportedLngs,
});

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(`../../../public/locales/${lang}/${n}.json`)
    );
  });
});

export default i18n;
