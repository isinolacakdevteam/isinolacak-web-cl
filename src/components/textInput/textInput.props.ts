import {
    HTMLAttributes,
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";

export type ITextInputRef = {
    cleanText: () => void;
    updateValue: (text: string) => void;
};

type HTMLInputElementWithoutBase = Omit<HTMLAttributes<HTMLInputElement>, "disabled" | "placeholder" | "title" | "className" | "id" | "style">;

interface ITextInputProps extends HTMLInputElementWithoutBase {
    spreadBehaviour?: TextInputSpreadBehaviour;
    validation?: (text: string) => boolean;
    onChangeText?: (value: string) => void;
    iconDirection?: "left" | "right";
    containerClassName?: string;
    infoIcon?: IOCoreIconType;
    iconOnClick?: () => void;
    secureTextEntry?: boolean;
    clearEnabled?: boolean;
    initialValue?: string;
    icon?: IOCoreIconType;
    style?: CSSProperties;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder?: string;
    multiline?: boolean;
    inputClass?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: string;
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
    iconDirection: string;
    multiline?: boolean;
    isFocused: boolean;
    minHeight?: string;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    title?: string;
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
    iconStyler: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
    input: CSSProperties;
    clear: CSSProperties;
};

export default ITextInputProps;
