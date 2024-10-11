import {
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";
import ITextProps from "../text/text.props";

export type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    direction?: "leftToRight" | "rightToLeft";
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    titleColor?: keyof IOCore.ColorsType;
    infoTextProps?: ITextProps;
    indicatorSize?: number;
    icon?: IOCoreIconType;
    isSelected?: boolean;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    titleStyle?: any;
    title?: string;
    style?: any;
};

export type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    direction?: "leftToRight" | "rightToLeft";
    disabledStyle: IOCore.DisabledTokensType;
    titleColor?: keyof IOCore.ColorsType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    indicatorSize?: number;
    isSelected?: boolean;
    disabled?: boolean;
    isError?: boolean;
    titleStyle?: any;
    style?: any;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: any;
};

export type RadioButtonStylerResult = {
    contentContainerStyle: CSSProperties;
    titleProps: TitleProps;
    radioContainer: any;
    radioIndicator: any;
    container: any;
};
