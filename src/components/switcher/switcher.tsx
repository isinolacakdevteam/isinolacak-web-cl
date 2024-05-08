import {
    FC
} from  "react";
import ISwitcherProps from "./switcher.props";
import useStyles, {
    switcherStyler 
} from "./switcher.style";
import {
    IOCoreTheme 
} from "../../../src/core";
import Text from "../text/text";

const Switcher: FC<ISwitcherProps> = ({
    renderTitle: renderTitleProp,
    indicatorStyle,
    titleStyle,
    className,
    disabled,
    isActive,
    onChange,
    style,
    title,
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
        indicatorStyle,
        disabledStyle,
        disabled,
        isActive,
        colors,
        spaces,
        style
    });

    const renderTitle = () => {
        if(!title && !renderTitleProp) {
            return null;
        }

        if(renderTitleProp) {
            return renderTitleProp({
                titleVariant: titleProps.variant,
                color: titleProps.color,
                titleStyle: [
                    titleProps.style
                ]
            });
        }

        return <Text
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
        <div 
            style={{
                marginRight: spaces.inline
            }}>
            {renderTitle()}
        </div>
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
    </div>;
};
export default Switcher;
