import {
    FC
} from  "react";
import useStyles, {
    switcherStyler
} from "./switcher.style";
import ISwitcherProps from "./switcher.props";
import {
    IOCoreTheme
} from "../../../src/core";
import Text from "../text/text";

const Switcher: FC<ISwitcherProps> = ({
    renderTitle: renderTitleProp,
    titleDirection= "left",
    indicatorStyle,
    titleStyle,
    className,
    disabled,
    isActive,
    onChange,
    style,
    title
}) => {
    const {
        disabled: disabledStyle,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const classes = useStyles();

    const {
        titleProps,
        indicator,
        container
    } = switcherStyler({
        titleDirection,
        indicatorStyle,
        disabledStyle,
        disabled,
        isActive,
        colors,
        spaces,
        style
    });

    const renderTitle = (direction: "left" | "right") => {
        if(direction !== titleDirection) {
            return null;
        }

        if(!title && !renderTitleProp) {
            return null;
        }

        if(renderTitleProp) {
            return renderTitleProp({
                titleVariant: titleProps.variant,
                color: titleProps.color,
                titleStyle: {
                    ...titleProps.style
                }
            });
        }

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={{
                ...titleProps.style,
                ...titleStyle
            }}
        >
            {title}
        </Text>;
    };

    return <div 
        className={classes.switchComponentContainer}
    >
        {renderTitle("left")}
        <div
            onClick={() => {
                if (onChange && !disabled) onChange();
            }}
            className={[classes.container, className].join(" ")}
            style={{
                ...container 
            }}
        >
            <div className={[classes.indicator].join(" ")} style={{
                ...indicator 
            }}></div>
        </div>
        {renderTitle("right")}
    </div>;
};
export default Switcher;
