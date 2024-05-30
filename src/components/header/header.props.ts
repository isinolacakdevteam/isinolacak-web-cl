import {
    CSSProperties,
    ReactNode
} from "react";

interface IHeaderProps {
    titleVariant?: keyof IOCore.TypographyType;
    headerLocation?: "left" | "center";
    headerRight?: () => ReactNode;
    headerLeft?: () => ReactNode;
    renderBottom?: ReactNode;
    customTitle?: ReactNode;
    style?: CSSProperties;
    titleColor?: string;
    title?: string;
};

export type HeaderStylerParams = {
    headerLocation?: "left" | "center"; 
    spaces: IOCore.SpacesTokensType;
    headerLeft?: () => ReactNode;
    colors: IOCore.ColorsType;
    renderBottom?: ReactNode;
    titleColor: string;
};

export type HeaderStylerResult = {
    contentContainerStyler: CSSProperties;
    bottomContainerStyle: CSSProperties;
    headerRightStyler: CSSProperties;
    customTitleStyle: CSSProperties;
    container: CSSProperties;
};

export default IHeaderProps;
