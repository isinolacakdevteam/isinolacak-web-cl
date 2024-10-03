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
        boxShadow: "0px 4px 4px 0px #00000040",
        transition: "all .03s ease",
        position: "absolute",
        width: "max-content",
        textAlign: "center",
        maxWidth: "500px",
        top: "100%",
        zIndex: 999
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
        backgroundColor: colors.layer2,
        padding: spaces.container * .75,
        right: 0
    };
    if(tInfo.x < 0) {
        toolBoxContainer = {
            ...toolBoxContainer,
            right: toolBoxContainer.right ? toolBoxContainer.right : 0  + tInfo.x,
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
