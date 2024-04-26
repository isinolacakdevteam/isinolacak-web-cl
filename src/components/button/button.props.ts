import {
    CSSProperties
} from "react";
import {
    IIOCoreIconProps,
    IOCoreIcon
} from "../../core/types";

interface IButtonProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    iconColor?: keyof IOCore.Colors;
    textColor?: keyof IOCore.Colors;
    color?: keyof IOCore.Colors;
    titleStyle?: CSSProperties;
    variant?: ButtonVariant;
    style?: CSSProperties;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    icon?: IOCoreIcon;
    title?: string;
};

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";
export type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
export type ButtonVariant = "filled" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: IOCore.RadiusesTokens;
    textColor?: keyof IOCore.Colors;
    iconColor?: keyof IOCore.Colors;
    borders: IOCore.BordersTokens;
    disabledStyle: CSSProperties;
    spaces: IOCore.SpacesTokens;
    color: keyof IOCore.Colors;
    variant: ButtonVariant;
    colors: IOCore.Colors;
    disabled: boolean;
    loading?: boolean;
    icon?: IOCoreIcon;
    size: ButtonSize;
};

export type TitleProps = {
    color: keyof IOCore.Colors;
    variant: keyof IOCore.Typography;
    style?: CSSProperties;
};

export type ButtonStylerResult = {
    iconProps: IIOCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};
export default IButtonProps;
