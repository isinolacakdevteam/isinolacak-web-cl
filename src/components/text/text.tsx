import {
    FC
} from  "react";
import {
    useIOCoreTheme 
} from "../../core/context";
import ITextProps from "./text.props";

const Text: FC<ITextProps> = ({
    variant = "body",
    reference,
    children,
    color,
    style,
    ...props
}) => {
    const {
        typography,
        colors
    } = useIOCoreTheme();

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
