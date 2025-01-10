import {
    CSSProperties,
    ReactNode
} from "react";

interface IAccordionCard {
    content: string | (() => ReactNode);
    renderTool?: () => ReactNode;
    style?: CSSProperties;
    isVisible?: boolean; 
    title: string;
};

export type AccordionCardStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    isShowing: boolean;
};

export type AccordionCardStylerResult = {
    iconFlipper: CSSProperties;
    container: CSSProperties;
};

export default IAccordionCard;
