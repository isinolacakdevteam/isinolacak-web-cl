import React, {
    FC
} from "react";
import stickerStyler, {
    useStyles
} from "./sticker.style";
import Text from "../text/text";
import {
    IStickerProps
} from "./sticker.props";
import {
    IOCoreTheme
} from "../../../src/core";

const Sticker: FC<IStickerProps> = ({
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    color = "primary",
    disabled = false,
    type = "filled",
    titleColor,
    onClick,
    title,
    style
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        iconContainerStyle,
        titleProps,
        container,
        iconProps
    } = stickerStyler({
        spreadBehaviour,
        titleColor,
        radiuses,
        spaces,
        colors,
        color,
        style,
        type
    });

    const classes = useStyles();

    const renderTitle = () => {
        return <Text
            color={titleProps.color}
            variant="body4-medium"
            style={
                titleProps.style
            }
        >
            {title}
        </Text>;
    };

    const renderIcon = () => {
        if (!IconComponentProp || disabled) {
            return null;
        }

        return <div
            style={{
                ...iconContainerStyle
            }}
        >
            <IconComponentProp
                {...iconProps}
            />
        </div>;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            pointerEvents: disabled ? "none" : "auto"
        }}
        onClick={disabled ? onClick : undefined}
    >
        {renderIcon()}
        {renderTitle()}
    </div>;
};

export default Sticker;