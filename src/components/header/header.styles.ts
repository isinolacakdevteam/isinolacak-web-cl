import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    HeaderStylerResult,
    HeaderStylerParams
} from "./header.props";

const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        boxSizing: "border-box",
        userSelect: "none",
        display: "flex",
        width: "100%"
    },
    contentContainer: {
        alignItems: "center",
        flexDirection: "row",
        display: "flex"
    },
    headerRight: {
        justifyContent: "flex-end",
        flexDirection: "row",
        maxWidth: "200px",
        minWidth: "50px",
        display: "flex"
    },
    headerLeftToRightNull: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        maxWidth: "200px",
        display: "flex",
        minWidth: "50px"
    }
}, {
    name: "IOCore-Header"
});

export const headerStyler = ({
    headerLocation,
    renderBottom,
    headerLeft,
    titleColor,
    spaces,
    colors
}: HeaderStylerParams): HeaderStylerResult => {
    let container: CSSProperties = {
        paddingBottom: renderBottom ? 0 : spaces.container,
        borderBottomColor: colors.seperator,
        backgroundColor: colors.white,
        paddingTop: spaces.container
    };

    let contentContainerStyler: CSSProperties = {
        paddingRight: spaces.content
    };

    let bottomContainerStyle: CSSProperties = {
        marginTop: spaces.content * 2
    };

    let customTitleStyle : CSSProperties = {
        textAlign: "left"
    };

    let headerRightStyler: CSSProperties = {
        position: "absolute",
        right: spaces.container
    };

    if(headerLocation === "center") {
        customTitleStyle.alignSelf = "center";
        customTitleStyle.textAlign = "center";
        customTitleStyle.color = titleColor;
        customTitleStyle.width = "100%";
    }

    if(headerLeft && headerLocation === "left") {
        customTitleStyle.marginLeft = spaces.container * 3;
    }

    return {
        contentContainerStyler,
        bottomContainerStyle,
        headerRightStyler,
        customTitleStyle,
        container
    };
};

export default useStyles;
