import {
    CSSProperties,
    ReactNode
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "src/types";

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
    contentColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    icon?: IOCoreIconType;
    isAction?: boolean;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type ContentProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type IconProps = IIOCoreIconPropsType & {
    style: CSSProperties;
};

export type HeaderStylerResult = {
    iconProps: IIOCoreIconPropsType;
    contentProps: ContentProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export default IHeaderProps;
