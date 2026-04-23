import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import type { Locale } from './locale';
import { t, type AppDictionary } from './dictionaries';
import { getInitialLocale, persistLocale } from './readInitialLocale';

type I18nContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    dt: AppDictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

    const setLocale = useCallback((next: Locale) => {
        persistLocale(next);
        setLocaleState(next);
    }, []);

    useEffect(() => {
        document.documentElement.lang = locale === 'et' ? 'et' : 'en';
    }, [locale]);

    const dt = useMemo(() => t(locale), [locale]);

    const value = useMemo(
        () => ({ locale, setLocale, dt }),
        [locale, setLocale, dt]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return ctx;
}
