import {
    CSSProperties 
} from "react";
import {
    IOCoreColorsType
} from "../../types";

export type BadgeHOCSpreadBehaviour = "baseline" | "stretch" | "free";
export interface IBadgeHOCProps {
    spreadBehaviour?: BadgeHOCSpreadBehaviour;
    children: JSX.Element | JSX.Element[];
    borderColor?: keyof IOCoreColorsType;
    color?: keyof IOCoreColorsType;
    location?: LocationType,
    style?: CSSProperties;
    borderWidth?: number;
    isActive?: Boolean;
    count?: number;
    size?: number;
};

export type BadgeHOCStylerParams = {
    spreadBehaviour?: BadgeHOCSpreadBehaviour;
    borderColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    color?: keyof IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType
    location?: LocationType;
    borderWidth?: number;
    count?: number;
    size: number;
};

export type BadgeHOCStylerResult = {
    badgeContainer: CSSProperties;
    container: CSSProperties;
};

export type LocationType = {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
}
