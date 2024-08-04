import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    PaginationStylerParams,
    PaginationStylerResult
} from "./pagination.props";

const useStyles = createUseStyles({
    container: {
        boxSizing: "border-box",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        userSelect: "none",
        display: "flex",
        minWidth: 300
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    chevroLeft: {
        rotate: "180deg"
    },
    fastButtons: {
        flexDirection: "row",
        display: "flex"
    },
    button: {
        height: "40px !important",
        width: "40px !important"
    }
});

export const paginationStyler = ({
    spaces
}: PaginationStylerParams): PaginationStylerResult => {

    let container: CSSProperties = {
    };

    let arrowButton: CSSProperties = {
        paddingBottom: spaces.container / 2,
        paddingRight: spaces.container / 2,
        paddingLeft: spaces.container / 2,
        paddingTop: spaces.container / 2
    };

    let buttonStyle: CSSProperties = {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        height: 34,
        width: 34,
        margin: spaces.content / 2
    };

    return {
        arrowButton,
        buttonStyle,
        container
    };
};

export default useStyles;

