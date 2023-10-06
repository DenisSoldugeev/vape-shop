export const isValidLocale = (AllLocales: Locales, locale: string) => {
    return AllLocales.some((cur) => cur === locale);
}