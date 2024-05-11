import {
    CSSProperties,
    Dispatch
} from "react";
import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";

export type SelectSheetStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    childrenStyleProp?: any;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

export type SelectSheetStylerResult = {
    contentContainerStyle: CSSProperties;
    buttonsContainerProps: CSSProperties;
    searchContainerProps: CSSProperties;
    clearButtonProps: CSSProperties;
    inputIconProps: CSSProperties;
    okButtonProps: CSSProperties;
    childrenStyle: CSSProperties;
};

export type SelectedItem = {
    title: string;
    key: string;
};

interface ISelectSheetProps<T, K extends T & SelectObjectType> {
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
    onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
    setSelectedItems: Dispatch<Array<SelectedItem>>;
    onOk?: (props: {
        selectedItems: Array<SelectedItem>;
        closeSheet: () => void;
        onSuccess: () => void;
        data: Array<K>;
    }) => void;
    renderItem?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onClick?: (item: K) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            closeSheet: () => void;
            onSuccess: () => void;
            data: Array<K>;
        }) => void;
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        data: Array<K>;
        item?: K;
    }) => JSX.Element;
    renderIcon?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            closeSheet: () => void;
            onSuccess: () => void;
            data: Array<K>;
        }) => void;
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        data: Array<K>;
        item?: K;
    }) => IOCoreIconType;
    onSearch?: (searchText: string) => void;
    selectedItems: Array<SelectedItem>;
    isLoadingOKButton?: boolean;
    childrenStyle?: CSSProperties;
    isHeaderShown?: boolean;
    isNeedConfirm?: boolean;
    isSearchable?: boolean;
    multiSelect?: boolean;
    initialData: Array<T>;
    autoHeight?: boolean;
    fullScreen?: boolean;
    inputTitle?: string;
    maxChoice?: number;
    minChoice?: number;
    isVisible: boolean;
    snapPoint?: number;
    data: Array<K>;
    title: string;
};
export default ISelectSheetProps;
