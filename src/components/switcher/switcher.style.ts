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
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.75
        }
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
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
    isError,
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
        width: SWITCH_AREA,
        height: 10
    };

    let contentContainerStyle = {
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

    if(isError) {
        container.backgroundColor = colors.error;
        indicator.backgroundColor = colors.panel;
        titleProps.color = "error";
    }

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
        contentContainerStyle,
        titleProps,
        indicator,
        container
    };
};
