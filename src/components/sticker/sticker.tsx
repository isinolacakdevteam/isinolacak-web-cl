import React, {
    FC
} from "react";
import {
    IStickerProps 
} from "./sticker.props";
import {
    IOCoreTheme 
} from "../../../src/core";
import stickerStyler, {
    useStyles 
} from "./sticker.style";
import Text from "../text/text";

const Sticker: FC<IStickerProps> = ({
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    color = "accent",
    disabled = true,
    type = "filled",
    titleColor,
    onClick,
    title,
    style
}) => {
    const classes = useStyles();
    
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
        if(!IconComponentProp) {
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
    >
        <div
            style={{
                ...container
            }}
            onClick={onClick ? onClick : undefined}
        >
            {renderIcon()}
            {renderTitle()}
        </div>
    </div>;
};

export default Sticker;