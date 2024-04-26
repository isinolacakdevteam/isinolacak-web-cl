import {
    CSSProperties
} from "react";
import {
    IIOCoreIconProps,
    IOCoreIcon 
} from "src/core/types";

interface IChipProps {
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof IOCore.Colors;
    iconColor?: keyof IOCore.Colors;
    color?: keyof IOCore.Colors;
    isCancelable?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
    variant?: ChipTypes;
    className?: string;
    disabled?:boolean;
    icon?: IOCoreIcon;
    size?: ChipSizes;
    title: string;
};

export type ChipSpreadBehaviour = "baseline" | "center" | "free";

export type ChipStylerParams = {
    spreadBehaviour: ChipSpreadBehaviour;
    titleColor?: keyof IOCore.Colors;
    iconColor?: keyof IOCore.Colors;
    borders: IOCore.BordersTokens;
    disabledStyle: CSSProperties;
    spaces: IOCore.SpacesTokens;
    color: keyof IOCore.Colors;
    isCancelable?: boolean;
    colors: IOCore.Colors;
    variant: ChipTypes;
    disabled: boolean;
    loading?: boolean;
    icon?: IOCoreIcon;
    size: ChipSizes;
};

export type TitleProps = {
    variant: keyof IOCore.Typography;
    color: keyof IOCore.Colors;
    style?: CSSProperties;
};

export type ChipStylerResult = {
    cancelIconProps: IIOCoreIconProps;
    iconProps: IIOCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type ChipTypes = "filled" | "outline" | "inverted";
export type ChipSizes = "small" | "medium" | "large";
export default IChipProps;
