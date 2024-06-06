import {
    createUseStyles
} from "react-jss";
import {
    SwitcherStylerParams, 
    SwitcherStylerResult, 
    TitleProps
} from "./switcher.props";

const useStyles = createUseStyles({
    switchComponentContainer: {
        flexDirection: "row",
        display: "flex"
    },
    container: {
        transition: "transform 0.5s !important",
        position: "relative",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        display: "flex",
        height: 10,
        "&:hover": {
            cursor: "pointer",
            opacity: 0.75
        }
    },
    indicator: {
        position: "absolute",
        borderRadius: 10,
        height: 20
    }
}, {
    name: "IOCore-Switcher"
});
export default useStyles;

const SWITCH_AREA = 30;
const INDICATOR_WIDTH = 20;

export const switcherStyler = ({
    indicatorStyle,
    titleDirection,
    disabledStyle,
    isActive,
    disabled,
    colors,
    spaces,
    style
}: SwitcherStylerParams): SwitcherStylerResult => {
    const totalWidth = (spaces.content * 2) + SWITCH_AREA;
    const activeUsageAreaWidth = spaces.content + INDICATOR_WIDTH;
    const activeTransformX = totalWidth - activeUsageAreaWidth;

    let container = {
        ...style,
        backgroundColor: colors.gray80,
        padding: spaces.content,
        width: SWITCH_AREA
    };

    let indicator = {
        ...indicatorStyle,
        transform: `translateX(${isActive ? activeTransformX : 0}px)`,
        backgroundColor: colors.panel,
        left: spaces.content / 2,
        width: INDICATOR_WIDTH
    };

    let titleProps: TitleProps = {
        style: {
            marginRight: spaces.content,
            alignSelf: "center",
            display: "flex"
        },
        variant: "header4-regular",
        color: "textGrey"
    };

    if(titleDirection === "right") {
        titleProps.style.marginLeft= spaces.content,
        titleProps.style.marginRight = 0;
    }

    if(isActive) {
        container.backgroundColor = colors.primary;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop",
        };
    }

    return {
        titleProps,
        indicator,
        container
    };
};