import {
    CSSProperties
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";

export type StickerSpreadBehaviour = "baseline" | "stretch" | "free";
export type Stickertype = "filled" | "outline" | "ghost";

export interface IStickerProps {
    spreadBehaviour?: StickerSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    color?: keyof IOCore.ColorsType;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    onClick?: () => void;
    type?: Stickertype;
    disabled?: boolean;
    title?: string;
};

export type StickerStylerParams = {
    spreadBehaviour?: StickerSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    colors: IOCore.ColorsType;
    style?: CSSProperties;
    type: Stickertype;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type StickerStylerResult = {
    iconContainerStyle: CSSProperties;
    iconProps: IIOCoreIconPropsType;
    container: CSSProperties;
    titleProps: TitleProps;
};