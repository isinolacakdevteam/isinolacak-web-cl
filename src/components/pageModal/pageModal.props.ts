import {
    CSSProperties,
    ReactElement
} from "react";
import {
    PortalizedComponentProps
} from "../../types";

export type PageModalStylerParams = {
    contentContainerStyle?: CSSProperties;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
};

export type PageModalStylerResult = {
    container: CSSProperties;
    content: CSSProperties;
};

interface IPageModalProps extends PortalizedComponentProps {
    contentContainerStyle?: CSSProperties;
    onOverlayPress?: () => void;
    content: ReactElement;
};
export default IPageModalProps;
