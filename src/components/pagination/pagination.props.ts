import {
    CSSProperties
} from "react";

export type PaginationButtonType = {
    pageNumber: number;
};

export type PaginationStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
};

export type PaginationStylerResult = {
    arrowButton: CSSProperties;
    buttonStyle: CSSProperties;
    container: CSSProperties;
};

interface IPaginationProps {
    onSelect: (item: PaginationButtonType, index: number) => void;
    totalDataCount: number;
    maxButtonCount: number;
    style?: CSSProperties;
    selectedIndex: number;
    itemPerPage: number;
};
export default IPaginationProps;
