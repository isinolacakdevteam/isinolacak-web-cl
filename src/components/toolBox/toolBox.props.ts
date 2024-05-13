import {
    CSSProperties,
    ReactNode 
} from "react";

interface IToolBoxProps {
    children: ReactNode;
    content: ReactNode;
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
