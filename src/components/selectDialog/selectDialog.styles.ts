import {
    createUseStyles
} from "react-jss";
import {
    CSSProperties
} from "react";
import {
    SelectDialogStylerParams,
    SelectDialogStylerResult
} from "./selectDialog.props";
import {
    IIOCoreIconPropsType
} from "../../types";

export const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        display: "flex",
        zIndex: 99996,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlay: {
        position: "fixed",
        zIndex: 99997,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlayTouchableArea: {
        position: "fixed",
        zIndex: 99998,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    contentContainer: {
        justifyContent: "center",
        flexDirection: 'column',
        alignContent: "center",
        position: "relative",
        alignSelf: "center",
        maxHeight: "80%",
        display: "flex",
        maxWidth: "90%",
        minWidth: 250,
        zIndex: 99999
    },
    content: {
        userSelect: "none",
        overflowY: "auto",
        flexWrap: "wrap"
    },
    renderActions: {
        flexDirection: 'row',
        display: 'flex',
    },
    headerContainer: {
        flexDirection: "row",
        alignItems:"center",
        display: "flex",
        width: "100%"
    },
    bottomContainer: {
        userSelect: "none",
        width: "100%"
    },
    bottomContentContainer: {
        justifyContent: "flex-end",
        flexDirection: "row",
        display: "flex"
    },
    cleanButton: {
        position: "absolute",
    }
});

export const selectDialogStyler = ({
    bottomContainerStyle,
    contentContainerStyle,
    headerContainerStyle,
    radiuses,
    colors,
    spaces
}: SelectDialogStylerParams): SelectDialogStylerResult => {

    let container = {
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container
    };

    let header: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingTop: spaces.content,
        ...headerContainerStyle
    };

    let content: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingBottom: spaces.content,
        paddingTop: spaces.content,
        ...contentContainerStyle
    };

    let bottom: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingTop: spaces.content,
        ...bottomContainerStyle
    };

    let primaryButton = {
        marginLeft: spaces.content
    };

    let clearIcon: IIOCoreIconPropsType = {
        color: colors.primary,
    };

    return {
        primaryButton,
        container,
        clearIcon,
        content,
        bottom,
        header
    };
};

