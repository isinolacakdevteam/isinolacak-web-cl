import {
    CSSProperties
} from "react";

interface ITextInputProps {
    spreadBehaviour?: TextInputSpreadBehaviour;
    contentType?: "email" | "text" | "password";
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    initialValue?: string;
    style?: CSSProperties;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder: string;
    multiline?: boolean;
    inputClass?: string;
    disabled?: boolean;
    className?: string;
    password?: boolean;
    title: string;
    id: string;
};

export type TextInputSpreadBehaviour = "baseline" | "stretch" | "free";

export type TextInputStylerParams = {
    spreadBehaviour?: TextInputSpreadBehaviour;
    radiuses: IOCore.RadiusesTokens;
    borders: IOCore.BordersTokens;
    typography: IOCore.Typography;
    disabledStyle: CSSProperties;
    spaces: IOCore.SpacesTokens;
    colors: IOCore.Colors;
    multiline?: boolean;
    isFocused: boolean;
    disabled?: boolean;
    value: string;
};

export type TitleProps = {
    color: keyof IOCore.Colors;
    style: CSSProperties;
};

export type TextInputStylerResult = {
    titleProps: TitleProps;
    container: CSSProperties;
    input: CSSProperties;
    clear: CSSProperties;
};
export default ITextInputProps;
