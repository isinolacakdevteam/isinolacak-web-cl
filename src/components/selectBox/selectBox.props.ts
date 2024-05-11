import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";

export type SelectedItem = {
    title: string;
    key: string;
};
export type SelectBoxSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ISelectBoxProps<T> {
    onClick?: (selectedItems: Array<SelectedItem>, data: Array<SelectObjectType>) => void;
    renderItem?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onClick?: (item: T & SelectObjectType) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            data: Array<T & SelectObjectType>;
            closeSheet: () => void;
            onSuccess: () => void;
        }) => void;
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        item?: T | SelectObjectType;
        isSelected?: boolean;
        index?: number;
    }) => JSX.Element;
    renderIcon?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onClick?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            data: Array<T & SelectObjectType>;
            closeSheet: () => void;
            onSuccess: () => void;
        }) => void;
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        item?: T | SelectObjectType;
        isSelected?: boolean;
        index?: number;
    }) => IOCoreIconType;
    titleExtractor: (item: T, index: number) => string;
    keyExtractor?: (item: T, index: number) => string;
    initialSelectedItems?: Array<T & {
        originalIndex: number;
    }>;
    isClick?: boolean;
    spreadBehaviour: SelectBoxSpreadBehaviour,
    multiSelect?: boolean;
    disabled?: boolean;
    data: Array<T>;
    title: string;
    style?: any;
};

export type SelectBoxStylerParams = {
    spreadBehaviour: SelectBoxSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabled?: boolean;
    isClick?: boolean;
    style?: any;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
};

export type ContentProps = {
    color: keyof IOCore.ColorsType;
    style: any;
};

export type SelectBoxStylerResult = {
    contentProps: ContentProps;
    titleProps: TitleProps;
    container: any;
};
