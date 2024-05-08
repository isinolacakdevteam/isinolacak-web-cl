import {
    createUseStyles
} from "react-jss";
import {
    SwitcherStylerParams, SwitcherStylerResult, 
    TitleProps
} from "./switcher.props";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.5s !important",
        alignSelf: "baseline",
        position: "relative",
        alignItems: "center",
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
    name: "NCore-Switcher"
});
export default useStyles;

const SWITCH_AREA = 30;
const INDICATOR_WIDTH = 20;

export const switcherStyler = ({
    indicatorStyle,
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
            marginRight: spaces.content
        },
        variant: "body2-regular",
        color: "textGrey"
    };

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