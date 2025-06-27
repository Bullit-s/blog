import { defaultNS } from '@/core/i18n/options';
import { TranslatedStr } from '@/core/i18n/types';
import { I18NextResources } from '@/translations/namespaces';

type TransformStrings<T> = T extends object
  ? { [K in keyof T]: TransformStrings<T[K]> }
  : T extends string
    ? TranslatedStr
    : T;

type FullyResolved<T> = { [K in keyof T]: T[K] };

type TransformedI18NextResources = FullyResolved<TransformStrings<I18NextResources>>;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: TransformedI18NextResources;
  }
}
