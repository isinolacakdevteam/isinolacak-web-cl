import {
    IOCoreIconType
} from "../../types";

export type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    indicatorSize?: number;
    icon?: IOCoreIconType;
    isSelected?: boolean;
    disabled?: boolean;
    titleStyle?: any;
    title?: string;
    style?: any;
};

export type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    disabledStyle: IOCore.DisabledTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    indicatorSize?: number;
    isSelected?: boolean;
    disabled?: boolean;
    titleStyle?: any;
    style?: any;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: any;
};

export type RadioButtonStylerResult = {
    titleProps: TitleProps;
    radioContainer: any;
    radioIndicator: any;
    container: any;
};
