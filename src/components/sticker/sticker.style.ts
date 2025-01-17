import {
    createUseStyles
} from "react-jss";
import {
    StickerStylerParams,
    StickerStylerResult,
    TitleProps
} from "./sticker.props";
import {
    IIOCoreIconPropsType
} from "../../types";

export const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        width: "min-content",
        flexDirection: "row",
        borderStyle: "solid",
        alignItems: "center",
        display: "flex"
    }
}, {
    name: "IOCore-Sticker"
});

export const stickerStyler = ({
    spreadBehaviour,
    titleColor,
    radiuses,
    spaces,
    colors,
    color,
    style,
    type
}: StickerStylerParams): StickerStylerResult => {
    let container = {
        ...style,
        borderColor: type === "outline" ? colors[color] : (type === "ghost" ? colors[color] : "transparent"),
        backgroundColor: type === "filled" ? colors[color] : "transparent",
        borderWidth: type === "outline" ? 1 : 0,
        paddingRight: spaces.container / 2.6,
        paddingLeft: spaces.container / 2.6,
        paddingBottom: spaces.container / 4,
        paddingTop: spaces.container / 4,
        borderRadius: radiuses.quarter
    };

    let titleProps: TitleProps = {
        color: "textWhite",
        style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    };

    let iconContainerStyle = {
        marginRight: spaces.inline / 2,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    };

    let iconProps: IIOCoreIconPropsType = {
        color: colors[titleProps.color],
        size: 14
    };

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(type !== "filled") {
        iconProps.color = colors[color];
        titleProps.color = color;
    }

    if(titleColor) {
        iconProps.color = colors[titleColor];
        titleProps.color = titleColor;
    }

    return {
        iconContainerStyle,
        titleProps,
        container,
        iconProps
    };
};
export default stickerStyler;
