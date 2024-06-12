import {
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";

interface ITextInputProps {
    spreadBehaviour?: TextInputSpreadBehaviour;
    onChangeText?: (value: string) => void;
    iconDirection?: "left" | "right";
    infoIcon?: IOCoreIconType;
    iconOnClick?: () => void;
    secureTextEntry?: boolean;
    clearEnabled?: boolean;
    initialValue?: string;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder?: string;
    multiline?: boolean;
    inputClass?: string;
    disabled?: boolean;
    className?: string;
    password?: boolean;
    infoText?: string;
    isError?: boolean;
    title?: string;
    id?: string;
};

export type TextInputSpreadBehaviour = "baseline" | "stretch" | "free";

export type TextInputStylerParams = {
    spreadBehaviour?: TextInputSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    spaces: IOCore.SpacesTokensType;
    disabledStyle: CSSProperties;
    colors: IOCore.ColorsType;
    multiline?: boolean;
    isFocused: boolean;
    infoText?: string;
    disabled?: boolean;
    isError?: boolean;
    value: string;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type TextInputStylerResult = {
    infoTextContainer: CSSProperties;
    contentContainer: CSSProperties;
    infoIconStyler: CSSProperties;
    passwordIcon: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
    input: CSSProperties;
    clear: CSSProperties;
};

export default ITextInputProps;
