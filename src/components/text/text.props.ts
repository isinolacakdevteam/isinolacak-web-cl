import {
    CSSProperties,
    ReactNode,
    RefObject
} from "react";

interface ITextProps {
    reference?: RefObject<HTMLSpanElement>;
    variant?: keyof IOCore.TypographyType;
    color?: keyof IOCore.ColorsType;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
};
export default ITextProps;