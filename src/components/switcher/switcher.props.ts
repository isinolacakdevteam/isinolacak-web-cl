import {
    CSSProperties
} from "react";

interface ISwitcherProps {
    indicatorStyle?: CSSProperties;
    onChange?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
    titleStyle?: any;
    isActive: boolean;
    title: string;
    renderTitle?: (props: {
        titleVariant: keyof IOCore.TypographyType;
        color: keyof IOCore.ColorsType;
        titleStyle?: any;
    }) => JSX.Element;
};

export type SwitcherStylerParams = {
    disabledStyle: IOCore.DisabledTokensType
    spaces: IOCore.SpacesTokensType;
    indicatorStyle?: CSSProperties;
    colors: IOCore.ColorsType;
    style?: CSSProperties;
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
