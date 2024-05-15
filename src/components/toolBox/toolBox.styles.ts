import {
    createUseStyles
} from "react-jss";
import {
    ToolBoxStylerParams,
    ToolBoxStylerResult 
} from "./toolBox.props";
import {
    CSSProperties 
} from "react";

const useStyles = createUseStyles({
    container: {
        display: "inline-block",
        position: "relative",
        userSelect: "none",
        transition: "none",
        cursor: "pointer",
    },
    toolBoxContainer: {
        transition: "all .03s ease",
        position: "absolute",
        width: "max-content",
        textAlign: "center",
        maxWidth: "500px",
        top: "100%",
        zIndex: 1
    }
}, {
    name: "IOCore-ToolBox"
});

export const toolBoxStyler = ({
    radiuses,
    colors,
    spaces,
    tInfo
}: ToolBoxStylerParams): ToolBoxStylerResult => {
    let toolBoxContainer: CSSProperties = {
        borderRadius: radiuses.quarter * 1.5,
        backgroundColor: colors.secondary,
        padding: spaces.container * .75,
        right: 0
    };
    if(tInfo.x < 0) {
        toolBoxContainer = {
            ...toolBoxContainer,
            right: toolBoxContainer.right + tInfo.x,
        };
    }

    if(tInfo.y + tInfo.h + 20 > tInfo.windowHeight) {
        toolBoxContainer = {
            ...toolBoxContainer,
            top: tInfo.h * -1,
        };
    }

    return {
        toolBoxContainer
    };
};
export default useStyles;
