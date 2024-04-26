import designTokens from "../theme/designTokens";
import lightTheme from "../theme/variants/light";

export type ThemeStore = {
    activeTheme: IOCore.ThemeKey;
    switchTheme: (themeKey: IOCore.ThemeKey) => void;
    typography: IOCore.Typography;
    colors: IOCore.Colors;
    spaces: IOCore.SpacesTokens;
    borders: IOCore.BordersTokens;
    radiuses: IOCore.RadiusesTokens;
    disabled: IOCore.DisabledTokens;
    isSetInitialHooks: boolean;
};

export type ThemeStoreReducer = Partial<ThemeStore>;
export type useIOCoreThemeReturnType = ThemeStore;

const themeStore: ThemeStore = {
    activeTheme: "light",
    switchTheme: () => {},
    isSetInitialHooks: false,
    typography: lightTheme.typography,
    colors: lightTheme.colors,
    spaces: designTokens.spaces,
    borders: designTokens.borders,
    radiuses: designTokens.radiuses,
    disabled: designTokens.disabled
};
export default themeStore;
