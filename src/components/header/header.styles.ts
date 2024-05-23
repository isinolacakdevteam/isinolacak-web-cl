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
        userSelect: "none",
        width: "100%",
        display: "flex"
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
        display: "flex",
        minWidth: "50px"
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
        bottomContainerStyle,
        headerRightStyler,
        customTitleStyle,
        container
    };
};

export default useStyles;
