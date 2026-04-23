import { isLocale, type Locale, LOCALE_STORAGE_KEY } from './locale';

function readStoredLocale(): Locale | null {
    try {
        const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
        return isLocale(raw) ? raw : null;
    } catch {
        return null;
    }
}

function localeFromNavigator(): Locale {
    const list = [navigator.language, ...(navigator.languages ?? [])];
    for (const tag of list) {
        const base = tag.split('-')[0]?.toLowerCase();
        if (base === 'et') return 'et';
    }
    return 'en';
}

/**
 * 1) localStorage, if present and valid
 * 2) Otherwise: Estonian if any of navigator’s languages is et / et-*, else English
 */
export function getInitialLocale(): Locale {
    return readStoredLocale() ?? localeFromNavigator();
}

export function persistLocale(locale: Locale) {
    try {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
        /* ignore */
    }
}
