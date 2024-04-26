import {
    en
} from "../locales";

export type LocalesStore = {
    activeLocale: string;
    switchLocale: (localizationKey: string) => void;
    isRTL: boolean;
    localize: (localizationKey: keyof IOCore.Translation, params?: Array<string>) => string;
    currentLocalizationData: Record<keyof IOCore.Translation, string>;
};

export type LocaleConfig = {
    code: string;
    isRTL: boolean;
    translations: Record<keyof IOCore.Translation, string>;
};

export type useIOCoreLocalizationReturnType = Omit<LocalesStore, "currentLocalizationData">;

const localesStore: LocalesStore = {
    currentLocalizationData: en.translations,
    switchLocale: () => {},
    activeLocale: "en",
    localize: () => "",
    isRTL: false
};
export default localesStore;
