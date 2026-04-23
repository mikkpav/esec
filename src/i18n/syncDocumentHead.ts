import type { Locale } from './locale';
import type { AppDictionary } from './dictionaries';

function setOrCreateMeta(
    where: { name: string } | { property: string },
    content: string
) {
    const isName = 'name' in where;
    const key = isName ? where.name : where.property;
    const simpleSel = isName
        ? `meta[name="${key}"]`
        : `meta[property="${key}"]`;
    let el = document.querySelector(simpleSel) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement('meta');
        if (isName) el.setAttribute('name', key);
        else el.setAttribute('property', key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/**
 * Keeps `document` head in sync with the active locale. Call from `useLayoutEffect`
 * so the first paint matches `getInitialLocale()` (static `index.html` is only
 * a fallback until JS runs).
 */
export function syncDocumentHead(locale: Locale, dt: AppDictionary) {
    if (typeof document === 'undefined') return;

    document.title = dt.htmlTitle;
    document.documentElement.lang = locale === 'et' ? 'et' : 'en';

    setOrCreateMeta({ name: 'description' }, dt.metaDescription);
    setOrCreateMeta({ property: 'og:title' }, dt.htmlTitle);
    setOrCreateMeta({ property: 'og:description' }, dt.metaDescription);
    setOrCreateMeta({ property: 'og:locale' }, locale === 'et' ? 'et_EE' : 'en_US');
    setOrCreateMeta({ name: 'twitter:title' }, dt.htmlTitle);
    setOrCreateMeta({ name: 'twitter:description' }, dt.metaDescription);

    if (typeof window !== 'undefined') {
        setOrCreateMeta({ property: 'og:url' }, window.location.href);
    }
}
