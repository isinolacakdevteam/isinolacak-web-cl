import {
    createUseStyles
} from "react-jss";
import {
    ToolTipStylerParams,
    ToolTipStylerResult 
} from "./toolTip.props";
import {
    CSSProperties 
} from "react";

const useStyles = createUseStyles({
    container: {
        display: "inline-block",
        position: "relative"
    },
    toolTipContainer: {
        //transform: "translateX(-50%)",
        position: "absolute",
        width: "max-content",
        textAlign: "center",
        maxWidth: "250px",
        zIndex: 1,
    },
    toolTipArrow: {
        content: "''",
        position: "absolute",
        borderWidth: "5px",
        borderStyle: "solid",
    }
}, {
    name: "IOCore-ToolTip"
});

export const toolTipStyler = ({
    direction,
    radiuses,
    colors,
    spaces,
    tInfo
}: ToolTipStylerParams): ToolTipStylerResult => {
    let toolTipContainer: CSSProperties = {
        borderRadius: radiuses.quarter * 1.5,
        backgroundColor: colors.secondary,
        padding: spaces.container * .75,
    };

    let toolTipArrow: CSSProperties = {
    };

    if(direction === "left") {
        toolTipContainer = {
            ...toolTipContainer,
            top: `calc(50% + ${(tInfo.h / 2) * -1}px)`,
            left: tInfo.w * -1 - 10,
        };
        
        toolTipArrow = {
            ...toolTipArrow,
            borderColor: "transparent transparent transparent black",
            marginTop: "-5px",
            left: "100%",
            top: `50%`,
        };
    }    
    
    if(direction === "right") {
        toolTipContainer = {
            ...toolTipContainer,
            top: `calc(50% + ${(tInfo.h / 2) * -1}px)`,
            right: tInfo.w * -1 - 10,
        };
        
        toolTipArrow = {
            ...toolTipArrow,
            borderColor: "transparent black transparent transparent",
            marginTop: "-5px",
            right: "100%",
            top: "50%"
        };
    }
    
    if(direction === "bottom") {
        toolTipContainer = {
            ...toolTipContainer,
            left: `calc(50% + ${(tInfo.w / 2) * -1}px)`,
            top: `calc(100% + 10px)`,
        };
        
        toolTipArrow = {
            ...toolTipArrow,
            borderColor: "transparent transparent black transparent",
            marginLeft: "-5px",
            bottom: "100%",
            left: "50%"
        };
    }
    
    if(direction === "top") {
        toolTipContainer = {
            ...toolTipContainer,
            left: `calc(50% + ${(tInfo.w / 2) * -1}px)`,
            bottom: `calc(100% + 10px)`,
        };

        toolTipArrow = {
            ...toolTipArrow,
            borderColor: "black transparent transparent transparent",
            marginLeft: "-5px",
            left: "50%",
            top: "100%"
        };
    }

    return {
        toolTipContainer,
        toolTipArrow
    };
};
export default useStyles;
