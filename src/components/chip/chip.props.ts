import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "src/types";

export type ChipSpreadBehaviour = "baseline" | "stretch" | "free";
export type ChipTypes = "filled" | "outline" | "inverted";
export type ChipSizes = "small" | "medium" | "large" | "xLarge";

export type ChipStylerParams = {
    backgroundColor?: keyof IOCore.ColorsType;
    notSelectedColor?: keyof IOCore.ColorsType;
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
    shape: "pill" | 'square';
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

interface IChipProps {
    notSelectedColor?: keyof IOCore.ColorsType;
    backgroundColor?: keyof IOCore.ColorsType;
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    iconDirection?: "left" | "right";
    color?: keyof IOCore.ColorsType;
    shape?: 'pill' | 'square';
    isCancelable?: boolean;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    onClick?: () => void;
    variant?: ChipTypes;
    className?: string;
    selected?: boolean;
    disabled?:boolean;
    size?: ChipSizes;
    title: string;
};
export default IChipProps;
