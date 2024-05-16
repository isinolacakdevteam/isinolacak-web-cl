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
        width: "100%"
    },
    contentContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    headerRight: {
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    headerLeftToRightNull: {
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        width: 42
    }
}, {
    name: "IOCore - Header"
});

export const headerStyler = ({
    headerLocation,
    renderBottom,
    titleColor,
    spaces,
    colors
}: HeaderStylerParams): HeaderStylerResult => {
    let container: CSSProperties = {
        paddingBottom: renderBottom ? 0 : spaces.container,
        borderBottomColor: colors.seperator,
        paddingRight: spaces.container,
        paddingLeft: spaces.container,
        backgroundColor: colors.white,
        paddingTop: spaces.container
    };

    let bottomContainerStyle: CSSProperties = {
        marginTop: spaces.content * 2
    };

    let customTitleStyle : CSSProperties = {
    };

    let headerRightStyler: CSSProperties = {
    };

    if(headerLocation === "center") {
        customTitleStyle.textAlign = "center";
        customTitleStyle.color = titleColor;
        headerRightStyler.position = "absolute";
        headerRightStyler.right = -10;
    }

    return {
        bottomContainerStyle,
        headerRightStyler,
        customTitleStyle,
        container
    };
};

export default useStyles;
