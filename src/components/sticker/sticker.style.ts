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
        display: "flex",
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
        paddingRight: spaces.inline * 1.5,
        paddingLeft: spaces.inline * 1.5,
        borderRadius: radiuses.quarter,
        paddingBottom: spaces.inline,
        paddingTop: spaces.inline
    };

    let titleProps: TitleProps = {
        color: "textWhite",
        style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        }
    };

    let iconContainerStyle = {
        marginRight: spaces.inline,
    };

    let iconProps: IIOCoreIconPropsType = {
        color: colors[titleProps.color],
        size: 10
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
