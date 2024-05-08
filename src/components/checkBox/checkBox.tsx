import {
    CSSProperties,
    FC
} from "react";
import {
    IOCoreTheme
} from "../../core";
import useStyles from "./checkBox.styles";
import Text from "../text/text";
import {
    CheckIcon 
} from "../../assets/svgr";
import {
    CheckBoxStylerParams,
    CheckBoxStylerResult,
    ICheckBoxProps,
    TitleProps 
} from "./checkBox.props";

const checkBoxStyler = ({
    spreadBehaviour,
    disabledStyle,
    titleStyle,
    disabled,
    radiuses,
    borders,
    colors,
    spaces
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container: CSSProperties = {
        paddingTop: spaces.container / 2,
        paddingBottom: spaces.container / 2,
    };

    let checkContainer: CSSProperties = {
        backgroundColor: colors.backgroundLight,
        borderRadius: radiuses.quarter,
        borderWidth: borders.line,
        borderColor: colors.stroke,
        borderStyle: "solid"
    };

    let checkIndicator: CSSProperties = {
        borderRadius: radiuses.quarter,
        backgroundColor: colors.primary
    };

    let titleProps: TitleProps = {
        color: "body",
        style: {
            marginLeft: spaces.content,
            ...titleStyle
        }
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        checkIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};

const CheckBox: FC<ICheckBoxProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    onChange: onChangeProp,
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
        titleStyle,
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

    const renderRadioContainer = () => {
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
                size={15}
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
        //disabled={disabled}
        onClick={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </div>;
};
export default CheckBox;
