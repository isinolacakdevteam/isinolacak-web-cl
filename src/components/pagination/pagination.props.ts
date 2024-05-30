import {
    CSSProperties
} from "react";

interface IPaginationProps {
    onSelect: (item: any, index: number) => void;
    onRight: (index: number) => void;
    onLeft: (index: number) => void;
    totalDataCount: number;
    maxButtonCount: number;
    style?: CSSProperties;
    selectedIndex: number;
    itemPerPage: number;
};

export type PaginationStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType
};

export type PaginationStylerResult = {
    arrowButton: CSSProperties;
    buttonStyle: CSSProperties;
    container: CSSProperties;
};

export default IPaginationProps;