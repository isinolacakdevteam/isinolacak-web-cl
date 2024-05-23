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
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
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
