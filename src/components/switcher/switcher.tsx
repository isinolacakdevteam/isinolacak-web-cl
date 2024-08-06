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
    switchSize = "medium",
    indicatorStyle,
    infoTextProps,
    titleStyle,
    className,
    infoText,
    disabled,
    isActive,
    onChange,
    isError,
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
        contentContainerStyle,
        titleProps,
        indicator,
        container
    } = switcherStyler({
        titleDirection,
        indicatorStyle,
        disabledStyle,
        switchSize,
        disabled,
        isActive,
        isError,
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

    const renderInfoText = () => {
        if(!infoText) {
            return null;
        }

        const customStyle = infoTextProps && infoTextProps.style ? infoTextProps.style : {
        };

        return <Text
            {...infoTextProps}
            style={{
                marginTop: spaces.content,
                ...customStyle
            }}
        >
            {infoText}
        </Text>;
    };

    return <div 
        className={classes.switchComponentContainer}
        onClick={() => {
            if (onChange && !disabled) onChange();
        }}
    >
        <div
            className={classes.contentContainer}
            style={{
                ...contentContainerStyle
            }}
        >
            {renderTitle("left")}
            <div>
                <div
                    className={[classes.container, className].join(" ")}
                    style={{
                        ...container 
                    }}
                >
                    <div className={[classes.indicator].join(" ")} style={{
                        ...indicator 
                    }}></div>
                </div>
            </div>
            {renderTitle("right")}
        </div>
        {renderInfoText()}
    </div>;
};
export default Switcher;
