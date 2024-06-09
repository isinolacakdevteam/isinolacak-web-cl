import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "src/types";
import IButtonProps from "../button/button.props";

interface IStateCardProps {
    contentColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    buttonProps?: IButtonProps;
    icon?: IOCoreIconType;
    style?: CSSProperties;
    className?: string;
    isAction?: boolean;
    content: string;
    title: string;
};

export type StateCardStylerParams = {
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

export type StateCardStylerResult = {
    iconProps: IconProps;
    contentProps: ContentProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export default IStateCardProps;
