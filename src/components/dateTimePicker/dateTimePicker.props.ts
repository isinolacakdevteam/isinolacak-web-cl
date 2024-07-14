import {
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";

interface IDateTimePickerProps {
    spreadBehaviour?: DateTimePickerBehaviour;
    onChangeText?: (value: string) => void;
    iconDirection?: "left" | "right";
    inputType?: DateTimePickerTypes;
    infoIcon?: IOCoreIconType;
    iconOnClick?: () => void;
    secureTextEntry?: boolean;
    clearEnabled?: boolean;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    initialValue?: string;
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

export type DateTimePickerTypes = "datetime-local" | "month" | "time" | "week" | "date";

export type DateTimePickerBehaviour = "baseline" | "stretch" | "free";

export type DateTimePickerStylerParams = {
    spreadBehaviour?: DateTimePickerBehaviour;
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

export type DateTimePickerStylerResult = {
    infoTextContainer: CSSProperties;
    contentContainer: CSSProperties;
    infoIconStyler: CSSProperties;
    passwordIcon: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
    input: CSSProperties;
    clear: CSSProperties;
};

export default IDateTimePickerProps;
