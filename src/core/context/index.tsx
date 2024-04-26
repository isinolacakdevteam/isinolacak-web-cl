import {
    useContext,
    ReactNode,
    FC
} from "react";
import LocalesProvider, {
    LocalesContext
} from "./locales";
import ThemeProvider, {
    ThemeContext
} from "./theme";
import {
    useIOCoreLocalizationReturnType,
    useIOCoreThemeReturnType
} from "../constants";
import {
    Host
} from "../../packages/react-portalize/src";
import {
    IOCoreConfig 
} from "../types";

type IOCoreContext = {
    config?: IOCoreConfig;
    children: ReactNode;
};

const IOCoreContext: FC<IOCoreContext> = ({
    children,
    config
}) => {
    return <ThemeProvider
        initialThemeKey={config?.initialThemeKey}
        themes={config?.themes}
        designTokens={config?.designTokens}
    >
        <LocalesProvider
            initialLanguage={config?.initialLanguage}
            locales={config?.locales}
        >
            <Host>
                {children}
            </Host>
        </LocalesProvider>
    </ThemeProvider>;
};

export const useIOCoreTheme = (): useIOCoreThemeReturnType => useContext(ThemeContext);
export const useIOCoreLocalization = (): useIOCoreLocalizationReturnType => {
    const {
        activeLocale,
        switchLocale,
        isRTL,
        currentLocalizationData
    } = useContext(LocalesContext);

    return {
        localize: (localizationKey: keyof IOCore.Translation, params?: Array<string>): string => {
            if(!params) {
                return currentLocalizationData[localizationKey];
            }

            let returnString = currentLocalizationData[localizationKey];
            params.forEach((item, index) => {
                const pattern = `\\$\\{${index}\\}`;
                const regex = new RegExp(pattern, "g");
                returnString = returnString.replace(regex, item);
            });
            return returnString;
        },
        activeLocale,
        switchLocale,
        isRTL
    };
};
export default IOCoreContext;
