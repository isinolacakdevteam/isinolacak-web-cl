import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "src/types";

interface IChipProps {
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    iconDirection?: "left" | "right";
    color?: keyof IOCore.ColorsType;
    isCancelable?: boolean;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    onClick?: () => void;
    variant?: ChipTypes;
    className?: string;
    selected?: boolean;
    disabled:boolean;
    size?: ChipSizes;
    title: string;
};

export type ChipSpreadBehaviour = "baseline" | "center" | "free";

export type ChipStylerParams = {
    spreadBehaviour: ChipSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    iconColor?: keyof IOCore.ColorsType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    iconDirection: "left" | "right";
    color: keyof IOCore.ColorsType;
    disabledStyle: CSSProperties;
    colors: IOCore.ColorsType;
    isCancelable?: boolean;
    icon?: IOCoreIconType;
    variant: ChipTypes;
    selected?: boolean;
    disabled: boolean;
    loading?: boolean;
    size: ChipSizes;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type ChipStylerResult = {
    cancelIconProps: IIOCoreIconPropsType;
    iconProps: IIOCoreIconPropsType;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type ChipTypes = "filled" | "outline" | "inverted";
export type ChipSizes = "small" | "medium" | "large";
export default IChipProps;
