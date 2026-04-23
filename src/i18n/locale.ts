export type Locale = 'et' | 'en';

export const LOCALE_STORAGE_KEY = 'esec.locale';

export function isLocale(value: string | null | undefined): value is Locale {
    return value === 'et' || value === 'en';
}
