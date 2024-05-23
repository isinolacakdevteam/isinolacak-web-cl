import {
    CSSProperties,
    ReactNode
} from "react";
import {
    ButtonDisplayBehaviourWhileLoading
} from "../../components/button/button.props";
import {
    PortalizedComponentProps,
    IIOCoreIconPropsType
} from "../../types";

export type DialogStylerParams = {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
};

export type DialogStylerResult = {
    clearIcon: IIOCoreIconPropsType;
    primaryButton: CSSProperties;
    clearButton: CSSProperties;
    container: CSSProperties;
    content: CSSProperties;
    bottom: CSSProperties;
    header: CSSProperties;
};

export type DialogVariant = "yes-no" | "ok" | "info";

type DialogButton = {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    onClick?: () => void;
    loading?: boolean;
    title?: string;
};

interface IDialogProps extends PortalizedComponentProps {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    secondaryButtonProps?: DialogButton;
    primaryButtonProps?: DialogButton;
    onOverlayPress?: () => void;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    variant?: DialogVariant;
    children?: ReactNode;
    content?: string;
    title?: string;
};
export default IDialogProps;
