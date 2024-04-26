import {
    CSSProperties,
    ReactNode
} from "react";

interface IRowProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    titleVariant?: keyof IOCore.Typography;
    redirectIconProps?: {
        color?: keyof IOCore.Colors;
        size?: number;
    };
    rightComponent?: ReactNode;
    color?: keyof IOCore.Colors;
    leftComponent?: ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
    isRedirect?: boolean;
    disabled?: boolean;
    title: string;
};

export type RowStylerParams = {
    disabledStyle: CSSProperties;
    redirectIconProps?: {
        color?: keyof IOCore.Colors;
        size?: number;
    };
    spaces: IOCore.SpacesTokens;
    color: keyof IOCore.Colors;
    colors: IOCore.Colors;
    disabled?: boolean;
};

export type RowStylerResult = {
    _redirectIconProps?: {
        color: string;
        size: number;
    };
    container: CSSProperties;
};
export default IRowProps;
