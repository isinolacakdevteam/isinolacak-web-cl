import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";

interface IButtonProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    iconColor?: keyof IOCore.ColorsType;
    textColor?: keyof IOCore.ColorsType;
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
export type ButtonVariant = "filled" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    textColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    disabledStyle: CSSProperties;
    colors: IOCore.ColorsType;
    variant: ButtonVariant;
    icon?: IOCoreIconType;
    disabled: boolean;
    loading?: boolean;
    size: ButtonSize;
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
export default IButtonProps;