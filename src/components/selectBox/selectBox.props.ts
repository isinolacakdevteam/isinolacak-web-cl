import {
    CSSProperties,
    ReactNode
} from "react";
import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";
import IPaginationProps from "../pagination/pagination.props";

export type SelectedItem = {
    __originalIndex: number;
    __title: string;
    __key: string;
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
    customIcon?: () => JSX.Element;
    renderIcon?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
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
    }) => ReactNode;
    onSearch?: (searchText: string) => void;
    titleExtractor: (item: T, index: number) => string;
    keyExtractor: (item: T, index: number) => string;
    initialSelectedItems?: Array<T & {
        originalIndex?: number;
    }>;
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<SelectObjectType>) => void;
    onOk?: (props: {
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        closeSheet: () => void;
        onSuccess: () => void;
    }) => void;
    spreadBehaviour?: SelectBoxSpreadBehaviour,
    paginationProps?: IPaginationProps;
    emptyContent?: () => JSX.Element;
    isLoadingOKButton?: boolean;
    onOverlayPress?: () => void;
    isSearchLoading?: boolean;
    infoIcon?: IOCoreIconType;
    isNeedConfirm?: boolean;
    isSearchable?: boolean;
    multiSelect?: boolean;
    style?: CSSProperties;
    isVisible?: boolean,
    inputTitle: string;
    disabled?: boolean;
    isError?: boolean;
    isClick?: boolean;
    infoText?: string;
    data: Array<T>;
    title?: string;
};

export type SelectBoxStylerParams = {
    spreadBehaviour: SelectBoxSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    style?: CSSProperties;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    isClick?: boolean;
    title?: string;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
};

export type ContentProps = {
    color: keyof IOCore.ColorsType;
    style: CSSProperties;
};

export type SelectBoxStylerResult = {
    infoTextContainer: CSSProperties;
    infoIconStyler: CSSProperties;
    iconContainer: CSSProperties;
    contentProps: ContentProps;
    titleStyle: CSSProperties;
    container: CSSProperties;
    titleProps: TitleProps;
};
