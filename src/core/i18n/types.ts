import { languages } from '@/core/i18n/options';
import { namespaces } from '@/translations/namespaces';

export type Namespaces = (typeof namespaces)[number];
export type Languages = (typeof languages)[number];

// region UntranslatableStr
export type UntranslatableStr = string & { __type: 'UntranslatableStr' };
export const ut = (str: string): UntranslatableStr => str as UntranslatableStr;
// endregion

// region TranslatedStr
export type TranslatedStr = UntranslatableStr | (string & { __type: 'TranslatedStr' });
// endregion
