import common from '@/translations/ru/common.json';

export type I18NextResources = {
  common: typeof common;
};

export const namespaces: (keyof I18NextResources)[] = ['common'];
