import {
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";
import ITextProps from "../text/text.props";

export type CheckBoxSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ICheckBoxProps {
    spreadBehaviour?: CheckBoxSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    titleColor?: keyof IOCore.ColorsType;
    checkDirection?: "left" | "right";
    infoTextProps?: ITextProps;
    titleStyle?: CSSProperties;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    isSelected?: boolean;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    title?: string;
};

export type CheckBoxStylerParams = {
    spreadBehaviour: CheckBoxSpreadBehaviour;
    disabledStyle: IOCore.DisabledTokensType;
    titleColor: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    checkDirection: "left" | "right";
    titleStyle?: CSSProperties;
    colors: IOCore.ColorsType;
    isSelected?: boolean;
    disabled?: boolean;
    isError?: boolean;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type CheckBoxStylerResult = {
    contentContainerStyle: CSSProperties;
    checkContainer: CSSProperties;
    checkIndicator: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
};
