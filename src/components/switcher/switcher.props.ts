import {
    CSSProperties
} from "react";
interface ISwitcherProps {
    titleDirection?: "left" | "right";
    indicatorStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    onChange?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
    switchSize?: "small" | "medium",
    isActive: boolean;
    title?: string;
    renderTitle?: (props: {
        titleVariant: keyof IOCore.TypographyType;
        color: keyof IOCore.ColorsType;
        titleStyle?: CSSProperties;
    }) => JSX.Element;
};

export type SwitcherStylerParams = {
    disabledStyle: IOCore.DisabledTokensType
    titleDirection?: "left" | "right";
    spaces: IOCore.SpacesTokensType;
    indicatorStyle?: CSSProperties;
    colors: IOCore.ColorsType;
    style?: CSSProperties;
    switchSize: "small" | "medium",
    disabled?: boolean;
    isActive: boolean;
};

export type SwitcherStylerResult = {
    indicator: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export default ISwitcherProps;
