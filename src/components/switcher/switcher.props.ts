import {
    CSSProperties
} from "react";
import ITextProps from "../text/text.props";

export type SwitcherStylerParams = {
    disabledStyle: IOCore.DisabledTokensType
    titleDirection?: "left" | "right";
    spaces: IOCore.SpacesTokensType;
    indicatorStyle?: CSSProperties;
    switchSize: "small" | "medium";
    colors: IOCore.ColorsType;
    style?: CSSProperties;
    disabled?: boolean;
    isError?: boolean;
    isActive: boolean;
};

export type SwitcherStylerResult = {
    contentContainerStyle: CSSProperties;
    indicator: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

interface ISwitcherProps {
    titleDirection?: "left" | "right";
    indicatorStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    infoTextProps?: ITextProps;
    onChange?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
    infoText?: string;
    isError?: boolean;
    switchSize?: "small" | "medium",
    isActive: boolean;
    title?: string;
    renderTitle?: (props: {
        titleVariant: keyof IOCore.TypographyType;
        color: keyof IOCore.ColorsType;
        titleStyle?: CSSProperties;
    }) => JSX.Element;
};
export default ISwitcherProps;
