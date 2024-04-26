import {
    CSSProperties
} from "react";

interface ISwitcherProps {
    indicatorStyle?: CSSProperties;
    onChange?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
    isActive: boolean;
};

export type SwitcherStylerParams = {
    disabledStyle: IOCore.DisabledTokens;
    indicatorStyle?: CSSProperties;
    spaces: IOCore.SpacesTokens;
    style?: CSSProperties;
    colors: IOCore.Colors;
    disabled?: boolean;
    isActive: boolean;
};

export type SwitcherStylerResult = {
    indicator: CSSProperties;
    container: CSSProperties;
};
export default ISwitcherProps;
