import {
    HTMLAttributes,
    CSSProperties
} from "react";
import ITextProps from "../text/text.props";

export type ITextAreaRef = {
    cleanText: () => void;
};

type HTMLInputElementWithoutBase = Omit<HTMLAttributes<HTMLTextAreaElement>, "disabled" | "placeholder" | "title" | "className" | "id" | "style">;

interface ITextAreaProps extends HTMLInputElementWithoutBase {
    spreadBehaviour?: TextAreaSpreadBehaviour;
    onChangeText?: (value: string) => void;
    infoTextProps?: ITextProps;
    clearEnabled?: boolean;
    initialValue?: string;
    style?: CSSProperties;
    isTextLimit?: boolean;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder?: string;
    inputClass?: string;
    disabled?: boolean;
    textLimit?: number;
    className?: string;
    infoText?: string;
    isError?: boolean;
    title?: string;
    id?: string;
};

export type TextAreaSpreadBehaviour = "baseline" | "stretch" | "free";

export type TextAreaStylerParams = {
    spreadBehaviour?: TextAreaSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    spaces: IOCore.SpacesTokensType;
    disabledStyle: CSSProperties;
    colors: IOCore.ColorsType;
    isFocused: boolean;
    disabled?: boolean;
    isError: boolean;
    value: string;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type TextAreaStylerResult = {
    contentContainerStyle: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
    input: CSSProperties;
    clear: CSSProperties;
};
export default ITextAreaProps;
