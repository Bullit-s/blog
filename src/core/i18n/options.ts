import type { InitOptions } from 'i18next';
import { namespaces } from '@/translations/namespaces';

export const defaultNS = 'common';

export const languages = ['ru', 'en'];

export const initOptions: InitOptions = {
  lng: 'ru',
  ns: namespaces,
  defaultNS: defaultNS,
  fallbackLng: 'ru',
  supportedLngs: languages,
};
