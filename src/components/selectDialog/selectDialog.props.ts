import {
    CSSProperties,
    ReactNode,
    Dispatch
} from "react";
import {
    IIOCoreIconPropsType,
    SelectObjectType
} from "../../types";
import IPaginationProps from "../pagination/pagination.props";
import {
    SelectDialogSize
} from "../selectBox/selectBox.props";

export type SelectDialogStylerParams = {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    childrenStyleProp?: any;
    size?: SelectDialogSize;
    fullScreen?: boolean;
};

export type SelectDialogStylerResult = {
    clearIcon: IIOCoreIconPropsType;
    notTitleStyle: CSSProperties;
    primaryButton: CSSProperties;
    container: CSSProperties;
    content: CSSProperties;
    bottom: CSSProperties;
    header: CSSProperties;
};

export type SelectedItem = {
    __originalIndex: number;
    __title: string;
    __key: string;
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
    validation?: (text: string) => boolean;
    selectedItems: Array<SelectedItem>;
    paginationProps?: IPaginationProps;
    emptyContent?: () => JSX.Element;
    childrenStyle?: CSSProperties;
    isLoadingOKButton?: boolean;
    onOverlayPress?: () => void;
    headerComponent?: ReactNode;
    selectDialogTitle?: string;
    isSearchLoading?: boolean;
    isHeaderShown?: boolean;
    isNeedConfirm?: boolean;
    size?: SelectDialogSize;
    isSearchable?: boolean;
    initialData?: Array<T>;
    multiSelect?: boolean;
    fullScreen?: boolean;
    inputTitle?: string;
    onClose: () => void;
    maxChoice?: number;
    minChoice?: number;
    isVisible: boolean;
    snapPoint?: number;
    data: Array<K>;
    title?: string;
};
export default ISelectDialogProps;
