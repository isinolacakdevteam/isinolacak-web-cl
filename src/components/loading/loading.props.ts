import {
    CSSProperties,
    ReactNode
} from "react";

interface ILoadingProps {
    color?: keyof IOCore.ColorsType;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    size?: number;
    id?: string;
};
export default ILoadingProps;