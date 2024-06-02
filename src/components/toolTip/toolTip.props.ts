import {
    CSSProperties,
    ReactNode 
} from "react";

interface IToolTipProps {
    direction: ToolTipDirectionProps;
    children?: ReactNode;
    title: String;
};

export type ToolTipDirectionProps = "right" | "left" | "top" | "bottom";

export type ToolTipStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    direction: ToolTipDirectionProps;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    tInfo: any
}

export type ToolTipStylerResult = {
    toolTipArrow: CSSProperties;
    toolTipContainer: CSSProperties;
}

export type TInfoType = {
    w: number,
    h: number
}

export default IToolTipProps;
