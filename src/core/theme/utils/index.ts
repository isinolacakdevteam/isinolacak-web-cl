import designTokens from "../designTokens";
import light from "../variants/light";
import dark from "../variants/dark";

const themes: Array<Required<IOCore.Theme>> = [light, dark];

export const mergeGivenTypographyWithIOCore = (themeKey: IOCore.ThemeKey, customTypography: IOCore.Typography | undefined): IOCore.Typography => {
    const defaultThemeTypography = themes.find(e => e.key === themeKey)?.typography ?? themes[0].typography;

    if(!(customTypography)) {
        return defaultThemeTypography;
    }

    return {
        ...defaultThemeTypography,
        ...customTypography
    };
};

export const mergeGivenColorsWithIOCore = (themeKey: IOCore.ThemeKey, customColors: IOCore.Colors | undefined): IOCore.Colors => {
    const defaultThemeColors = themes.find(e => e.key === themeKey)?.colors ?? themes[0].colors;

    if(!(customColors)) {
        return defaultThemeColors;
    }

    return {
        ...defaultThemeColors,
        ...customColors
    };
};

export const mergeGivenDesignTokensWithIOCore = (customDesignTokens: IOCore.DesignTokens | undefined): Required<IOCore.DesignTokens> => {
    if(!(customDesignTokens)) {
        return designTokens;
    }

    const spaces: IOCore.SpacesTokens = {
        ...designTokens.spaces,
        ...customDesignTokens.spaces ?? designTokens.spaces
    };

    const borders: IOCore.BordersTokens = {
        ...designTokens.borders,
        ...customDesignTokens.borders ?? designTokens.borders
    };

    const radiuses: IOCore.RadiusesTokens = {
        ...designTokens.radiuses,
        ...customDesignTokens.radiuses ?? designTokens.radiuses
    };

    const disabled: IOCore.DisabledTokens = {
        ...designTokens.disabled,
        ...customDesignTokens.disabled ?? designTokens.disabled
    };

    return {
        spaces,
        borders,
        radiuses,
        disabled
    };
};
