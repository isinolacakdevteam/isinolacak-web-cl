import {
    CSSProperties,
    ReactNode
} from "react";
import IOCore from "src/core";

interface ILoadingProps {
    color?: keyof IOCore.ColorsType;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    size?: number;
    id?: string;
};
export default ILoadingProps;