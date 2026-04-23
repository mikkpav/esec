import { useI18n } from '../i18n/I18nProvider';
import type { Locale } from '../i18n/locale';

export default function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    function select(next: Locale) {
        if (next !== locale) setLocale(next);
    }

    return (
        <div
            className='flex items-center gap-2 text-sm font-medium font-inter'
            role='group'
            aria-label='Language'
        >
            <button
                type='button'
                className={`rounded px-1.5 py-0.5 transition-colors ${
                    locale === 'et' ? 'font-black text-gray-900' : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => select('et')}
                aria-pressed={locale === 'et'}
            >
                ET
            </button>
            <span className='text-gray-300' aria-hidden>
                |
            </span>
            <button
                type='button'
                className={`rounded px-1.5 py-0.5 transition-colors ${
                    locale === 'en' ? 'font-black text-gray-900' : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => select('en')}
                aria-pressed={locale === 'en'}
            >
                EN
            </button>
        </div>
    );
}
