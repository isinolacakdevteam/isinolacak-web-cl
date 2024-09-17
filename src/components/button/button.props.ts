import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";

interface IButtonProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    textVariant?: keyof IOCore.TypographyType;
    backgroundColor?: keyof IOCore.ColorsType;
    spreadBehaviour?: ButtonSpreadBehaviour;
    textColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    iconDirection?: "left" | "right";
    color?: keyof IOCore.ColorsType;
    titleStyle?: CSSProperties;
    icon?: IOCoreIconType;
    variant?: ButtonVariant;
    style?: CSSProperties;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    title?: string;
};

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";
export type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
export type ButtonSize = "small" | "medium" | "large" | "xSmall";
export type ButtonVariant = "filled" | "outline" | "ghost";

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    textVariant?: keyof IOCore.TypographyType;
    backgroundColor?: keyof IOCore.ColorsType;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    textColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    borders: IOCore.BordersTokensType;
    iconDirection?: "left" | "right";
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    disabledStyle: CSSProperties;
    colors: IOCore.ColorsType;
    variant: ButtonVariant;
    icon?: IOCoreIconType;
    disabled: boolean;
    loading?: boolean;
    size: ButtonSize;
    title?: string;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type ButtonStylerResult = {
    iconProps: IIOCoreIconPropsType;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type ButtonStyle = {
    container: CSSProperties;
};

export type ButtonStyleMappingType = {
    xSmall: ButtonStyle;
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};

export default IButtonProps;