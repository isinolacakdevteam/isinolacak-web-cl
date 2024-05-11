import React, {
    FC
} from  "react";
import ITextProps from "./text.props";
import {
    IOCoreTheme
} from "../../core";

const Text: FC<ITextProps> = ({
    variant = "body-regular",
    reference,
    children,
    color,
    style,
    ...props
}) => {
    const {
        typography,
        colors
    } = IOCoreTheme.useContext();

    return <span
        {...props}
        ref={reference}
        style={{
            ...style,
            ...typography[variant],
            color: color ? colors[color] : colors.body
        }}
    >
        {children}
    </span>;
};
export default Text;