import {
    CSSProperties,
    ReactNode,
    RefObject
} from "react";

interface ITextProps {
    reference?: RefObject<HTMLSpanElement>;
    variant?: keyof IOCore.Typography;
    color?: keyof IOCore.Colors;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
};
export default ITextProps;
