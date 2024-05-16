import {
    CSSProperties,
    ReactNode,
    Dispatch
} from "react";
import {
    IIOCoreIconPropsType,
    SelectObjectType
} from "../../types";

export type SelectDialogStylerParams = {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    childrenStyleProp?: any;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

export type SelectDialogStylerResult = {
    contentContainerStyle: CSSProperties;
    buttonsContainerProps: CSSProperties;
    searchContainerProps: CSSProperties;
    clearButtonProps: CSSProperties;
    clearIcon: IIOCoreIconPropsType;
    inputIconProps: CSSProperties;
    okButtonProps: CSSProperties;
    childrenStyle: CSSProperties;
    primaryButton: CSSProperties;
    container: CSSProperties;
    content: CSSProperties;
    bottom: CSSProperties;
    header: CSSProperties;
    clearButton: any;
};

export type SelectedItem = {
    title: string;
    key: string;
};

interface ISelectDialogProps<T, K extends T & SelectObjectType> {
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
    }) => ReactNode;
    onSearch?: (searchText: string) => void;
    selectedItems: Array<SelectedItem>;
    childrenStyle?: CSSProperties;
    isLoadingOKButton?: boolean;
    onOverlayPress?: () => void;
    headerComponent?: ReactNode;
    isHeaderShown?: boolean;
    isNeedConfirm?: boolean;
    isSearchable?: boolean;
    multiSelect?: boolean;
    initialData: Array<T>;
    autoHeight?: boolean;
    fullScreen?: boolean;
    inputTitle?: string;
    onClose: () => void;
    maxChoice?: number;
    minChoice?: number;
    isVisible: boolean;
    snapPoint?: number;
    data: Array<K>;
    title: string;
};
export default ISelectDialogProps;
