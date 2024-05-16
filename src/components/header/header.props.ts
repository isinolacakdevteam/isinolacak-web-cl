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
    colors: IOCore.ColorsType;
    renderBottom?: ReactNode;
    titleColor: string;
};

export type HeaderStylerResult = {
    bottomContainerStyle: CSSProperties;
    customTitleStyle: CSSProperties;
    headerRightStyler: CSSProperties;
    container: CSSProperties;
};

export default IHeaderProps;
