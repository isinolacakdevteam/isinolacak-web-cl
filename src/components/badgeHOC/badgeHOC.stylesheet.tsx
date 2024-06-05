import {
    CSSProperties 
} from "react";
import {
    BadgeHOCStylerParams,
    BadgeHOCStylerResult
} from "./badgeHOC.props";
import {
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        position: "relative"
    },
    badgeContainer: {
        justifyContent: "center",
        borderStyle: "solid",
        alignItems: "center",
        position: "absolute",
        display: "flex",
        zIndex: 99
    },
    count: {
        textAlign: "center"
    }
});

export const badgeHOCStyler = ({
    spreadBehaviour,
    borderColor,
    borderWidth,
    location,
    radiuses,
    borders,
    colors,
    spaces,
    count,
    color,
    size
}: BadgeHOCStylerParams): BadgeHOCStylerResult => {

    let container: CSSProperties = {
    };

    let badgeContainer: CSSProperties = {
        backgroundColor: colors.primary,
        borderRadius: radiuses.hard * 3,
        borderColor: colors.white,
        borderWidth: borders.line,
        paddingBottom: 0,
        minWidth: size,
        paddingTop: 0,
        height: size,
        ...location,
    };

    if(color) {
        badgeContainer.backgroundColor = colors[color];
    }

    if(count !== undefined) {
        badgeContainer.padding = spaces.content / 4;
    }

    if(borderColor) {
        badgeContainer.borderColor = colors[borderColor];
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(borderWidth) {
        badgeContainer.borderWidth = borderWidth;
    }
    return {
        badgeContainer,
        container
    };
};
export default useStyles;
