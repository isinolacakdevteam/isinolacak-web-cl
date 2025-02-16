import {
    CSSProperties,
    FC
} from  "react";
import IChipProps from "./chip.props";
import useStyles, {
    chipStyler
} from "./chip.styles";
import Text from "../text/text";
import {
    ClearIcon 
} from "../../assets/svgr";
import {
    IOCoreTheme 
} from "../../core";

/**
 * A generic chip
 * @param props {@link IChipProps}
 * @returns Element
 */
const Chip: FC<IChipProps> = ({
    spreadBehaviour = "free",
    icon: IconComponentProp,
    iconDirection = "left",
    variant = "filled",
    color = "primary",
    disabled = false,
    notSelectedColor,
    selected = false,
    backgroundColor,
    shape = 'pill',
    size = "small",
    isCancelable,
    titleColor,
    className,
    iconColor,
    onClick,
    style,
    title,
    ...props
}) => {
    const classes = useStyles();

    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        cancelIconProps,
        container,
        iconProps,
        titleProps
    } = chipStyler({
        disabledStyle: designTokensDisabled,
        icon: IconComponentProp,
        notSelectedColor,
        backgroundColor,
        spreadBehaviour,
        iconDirection,
        isCancelable,
        titleColor,
        iconColor,
        selected,
        radiuses,
        disabled,
        borders,
        variant,
        spaces,
        colors,
        color,
        shape,
        size
    });

    const renderIcon = (direction: "left" | "right") => {
        if(direction !== iconDirection) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        let textStyle: CSSProperties = {
        };

        if(IconComponentProp) {
            textStyle.marginLeft = spaces.content;
        }

        return <Text
            variant={titleProps.variant}
            className={classes.title}
            color={titleProps.color}
            style={{
                ...textStyle,
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    const renderCancelIcon = () => {
        if(!isCancelable) {
            return null;
        }

        return <ClearIcon
            {...cancelIconProps}
        />;
    };

    return <div
        style={{
            display: "flex"
        }}
    >
        <div
            {...props}
            className={[
                classes.container,
                className
            ].join(" ")}
            onClick={disabled ? () => null : onClick}
            style={{
                ...style,
                ...container
            }}
        >
            {renderIcon("left")}
            {renderTitle()}
            {renderIcon("right")}
            {renderCancelIcon()}
        </div>
    </div>;
};
export default Chip;
