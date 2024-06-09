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
        alignContent: "baseline",
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.75
        }
    },
    container: {
        transition: "transform 0.5s !important",
        position: "relative",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        display: "flex",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.75
        }
    },
    indicator: {
        position: "absolute",
        borderRadius: 10
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
    switchSize,
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
        height: 10,
        width: SWITCH_AREA
    };

    let indicator = {
        ...indicatorStyle,
        transform: `translateX(${isActive ? activeTransformX : 0}px)`,
        backgroundColor: colors.panel,
        left: spaces.content / 2,
        height: 20,
        width: INDICATOR_WIDTH
    };

    let titleProps: TitleProps = {
        style: {
            marginRight: switchSize === "medium" ? spaces.content : spaces.content / 2,
            alignSelf: "center",
            display: "flex"
        },
        variant: "header4-regular",
        color: "textGrey"
    };

    if(titleDirection === "right") {
        titleProps.style.marginLeft= switchSize === "medium" ? spaces.content : spaces.content / 2,
        titleProps.style.marginRight = 0;
    }

    if(switchSize == "small") {
        indicator.transform = `translateX(${isActive ? activeTransformX / 2 : 0}px)`;
        container.padding= spaces.content / 2;
        indicator.width = INDICATOR_WIDTH / 2;
        indicator.left = spaces.content / 4;
        container.width= SWITCH_AREA / 2;
        indicator.height= 20 / 2;
        container.height= 5;
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