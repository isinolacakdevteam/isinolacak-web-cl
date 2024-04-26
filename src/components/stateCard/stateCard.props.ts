import {
    CSSProperties
} from "react";
import {
    IIOCoreIconProps,
    IOCoreIcon 
} from "src/core/types";
import IButtonProps from "../button/button.props";

interface IStateCardProps {
    contentColor?: keyof IOCore.Colors;
    titleColor?: keyof IOCore.Colors;
    iconColor?: keyof IOCore.Colors;
    buttonProps?: IButtonProps;
    style?: CSSProperties;
    className?: string;
    isAction?: boolean;
    icon?: IOCoreIcon;
    content: string;
    title: string;
};

export type StateCardStylerParams = {
    contentColor?: keyof IOCore.Colors;
    titleColor?: keyof IOCore.Colors;
    iconColor?: keyof IOCore.Colors;
    spaces: IOCore.SpacesTokens;
    colors: IOCore.Colors;
    isAction?: boolean;
    icon?: IOCoreIcon;
};

export type TitleProps = {
    variant: keyof IOCore.Typography;
    color: keyof IOCore.Colors;
    style?: CSSProperties;
};

export type ContentProps = {
    variant: keyof IOCore.Typography;
    color: keyof IOCore.Colors;
    style?: CSSProperties;
};

export type IconProps = IIOCoreIconProps & {
    style: CSSProperties;
};

export type StateCardStylerResult = {
    contentProps: ContentProps;
    iconProps: IIOCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export default IStateCardProps;
