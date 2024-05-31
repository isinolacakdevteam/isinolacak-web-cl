import {
    FC
} from "react";
import {
    IOCoreTheme
} from "../../core";
import useStyles, {
    checkBoxStyler
} from "./checkBox.styles";
import Text from "../text/text";
import {
    CheckIcon
} from "../../assets/svgr";
import {
    ICheckBoxProps
} from "./checkBox.props";

const CheckBox: FC<ICheckBoxProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    onChange: onChangeProp,
    checkDirection = "left",
    titleColor = "body",
    isSelected = false,
    disabled = false,
    titleStyle,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    } = checkBoxStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        checkDirection,
        titleStyle,
        titleColor,
        isSelected,
        radiuses,
        disabled,
        borders,
        colors,
        spaces
    });

    const onChange = () => {
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = (direction: "left" | "right") => {
        if(direction !== checkDirection) {
            return null;
        }

        return <div
            className={classes.checkContainer}
            style={{
                ...checkContainer,
            }}
        >
            {renderIndicator()}
        </div>;
    };

    const renderIndicator = () => {
        if(!isSelected) {
            return null;
        }

        return <div
            className={classes.checkIndicator}
            style={{
                ...checkIndicator
            }}
        >
            <CheckIcon
                size={12}
                color="#fff"
            />
        </div>;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            color={titleProps.color}
            variant={titleType}
            className={classes.title}
            style={{
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            ...style,
        }}
        onClick={onChange}
    >
        {renderRadioContainer("left")}
        {renderTitle()}
        {renderRadioContainer("right")}
    </div>;
};
export default CheckBox;
