import {
    CSSProperties
} from "react";

interface ITextAreaProps {
    spreadBehaviour?: TextAreaSpreadBehaviour;
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    initialValue?: string;
    style?: CSSProperties;
    isTextLimit?: boolean;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder: string;
    inputClass?: string;
    disabled?: boolean;
    textLimit?: number;
    className?: string;
    isError?: boolean;
    title: string;
    id: string;
};

export type TextAreaSpreadBehaviour = "baseline" | "stretch" | "free";

export type TextAreaStylerParams = {
    spreadBehaviour?: TextAreaSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    disabledStyle: CSSProperties;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    isFocused: boolean;
    disabled?: boolean;
    isError: boolean;
    value: string;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type TextAreaStylerResult = {
    titleProps: TitleProps;
    container: CSSProperties;
    input: CSSProperties;
    clear: CSSProperties;
};
export default ITextAreaProps;
