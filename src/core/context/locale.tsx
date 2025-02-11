import IOCoreContext, {
    ConfigType
} from "ncore-context";
import {
    en,
    tr
} from "../locales";
import {
    LocaleContextType,
    LanguageType
} from "../../types";
import Text from "../../components/text/text";
import {
    uuid
} from "../../utils";

const languages = [
    en,
    tr
];

class LocaleContextInheritance<T extends LanguageType> extends IOCoreContext<LocaleContextType, ConfigType<LocaleContextType>> {
    locales = languages;

    constructor(initialState: T, config: ConfigType<LocaleContextType>) {
        super({
            localize: (translationKey: keyof IOCore.TranslationType) => {
                const resp = en.translations[translationKey];

                if(!resp) {
                    return translationKey;
                }

                return resp;
            },
            localizeWithObject: (translationKey: keyof IOCore.TranslationType) => {
                const resp = en.translations[translationKey];

                if(!resp) {
                    return translationKey;
                }

                return resp;
            },
            translations: en.translations,
            activeLocale: en.code,
            isRTL: en.isRTL
        }, config);

        this.prepare(initialState);
    }

    switchLocale = (localeCode: string) => {
        const selectedLanguageData = this.locales.find(e => e.code === localeCode) ?? en;

        if(!selectedLanguageData) {
            throw Error(`Can not find a locale for the given code: ${localeCode}`);
        }

        const translations = {
            ...en.translations,
            ...selectedLanguageData.translations
        };

        const newState = {
            activeLocale: localeCode,
            isRTL: selectedLanguageData.isRTL,
            translations: translations,
            localize: (translationKey: keyof IOCore.TranslationType, parameters?: Array<any>) => {
                try {
                    let resp = translations[translationKey];

                    if(!resp) {
                        return translationKey;
                    }

                    if(parameters && parameters.length) {
                        parameters.forEach((item, index) => {
                            resp = resp.replace(`{{${index}}}`, item);
                        });
                    }

                    return resp;
                } catch(e) {
                    console.log(e);
                    return translationKey;
                }
            },
            localizeWithObject: (translationKey: keyof IOCore.TranslationType, parameters: Array<any>, props: Array<any>) => {
                try {
                    let resp = translations[translationKey];

                    if(!resp) {
                        return translationKey;
                    }

                    if(parameters && parameters.length) {
                        parameters.forEach((_item, index) => {
                            // @ts-ignore
                            resp = resp.split(`{{${index}}}`).flatMap((item) => [item, props && props[index] ? <Text key={uuid()} {...props[index]}>{parameters[index]}</Text> : <Text key={uuid()}>{parameters[index]}</Text>]).slice(0, -1);
                        });
                    }

                    return resp;
                } catch(e) {
                    console.log(e);
                    return translationKey;
                }
            }
        };

        // @ts-ignore
        this.state = newState;
        this.setState(newState);
    };

    localize = (localeCode: keyof IOCore.TranslationType, parameters?: Array<any>) => {
        if(!this.state) {
            return "localize-context-is-not-ready";
        }

        if(parameters && parameters.length) {
            try {
                let newResp = this.state.translations[localeCode];

                if(!newResp) {
                    return localeCode;
                }

                parameters.forEach((item, index) => {
                    newResp.replace(`{{${index}}}`, item);
                });

                return newResp;
            } catch {
                return localeCode;
            }
        }

        return this.state.translations[localeCode];
    };

    localizeWithObject = (localeCode: keyof IOCore.TranslationType, parameters: Array<any>, props: Array<any>) => {
        if(!this.state) {
            return "localize-context-is-not-ready";
        }

        if(parameters && parameters.length) {
            try {
                let newResp = this.state.translations[localeCode];

                if(!newResp) {
                    return localeCode;
                }

                parameters.forEach((_item, index) => {
                    // @ts-ignore
                    newResp = newResp.split(`{{${index}}}`).flatMap((item) => [item, props && props[index] ? <Text key={uuid()} {...props[index]}>{parameters[index]}</Text> : <Text key={uuid()}>{parameters[index]}</Text>]).slice(0, -1);
                });

                return newResp;
            } catch {
                return localeCode;
            }
        }

        return this.state.translations[localeCode];
    };

    prepare = (initialState: LanguageType) => {
        if(initialState.locales) {
            let newLangData: typeof languages = [];

            initialState.locales.forEach((lang) => {
                const alreadyExistsData = this.locales.find(_lang => _lang.code === lang.code);

                if(alreadyExistsData) {
                    newLangData.push({
                        ...alreadyExistsData,
                        ...lang,
                        translations: {
                            ...alreadyExistsData.translations,
                            ...lang.translations
                        }
                    });
                } else {
                    newLangData.push(lang);
                }
            });

            this.locales = newLangData;
        }

        if(initialState.initialLanguage) {
            this.switchLocale(initialState.initialLanguage);
            return;
        }

        this.switchLocale("en");
    };
};
export default LocaleContextInheritance;
