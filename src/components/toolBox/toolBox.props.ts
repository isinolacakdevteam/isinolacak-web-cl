import {
    CSSProperties,
    ReactNode
} from "react";

interface IToolBoxProps {
    style?: CSSProperties;
    children: ReactNode;
    content: ReactNode;
    hover?: boolean;
};

export type ToolBoxDirectionProps = "right" | "left" | "top" | "bottom";

export type ToolBoxStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    tInfo: TInfoType
}

export type ToolBoxStylerResult = {
    toolBoxContainer: CSSProperties;
}

export type TInfoType = {
    windowHeight: number,
    windowWidth: number,
    w: number,
    h: number,
    x: number,
    y: number
}

export default IToolBoxProps;
