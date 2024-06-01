import {
    CSSProperties
} from "react";
import {
    IOCoreIconType
} from "../../types";

export type CheckBoxSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ICheckBoxProps {
    spreadBehaviour?: CheckBoxSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    titleColor?: keyof IOCore.ColorsType;
    checkDirection?: "left" | "right";
    titleStyle?: CSSProperties;
    style?: CSSProperties;
    icon?: IOCoreIconType;
    isSelected?: boolean;
    disabled?: boolean;
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
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type CheckBoxStylerResult = {
    checkContainer: CSSProperties;
    checkIndicator: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
};
