import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initOptions } from '@/core/i18n/options';
import type { Languages } from '@/core/i18n/types';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: Languages, namespace: string) =>
        import(`@/translations/${language}/${namespace}.json`),
    ),
  )
  .init(initOptions);

export default i18next;
