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
        userSelect: "none",
        position: "fixed",
        display: "flex",
        zIndex: 99996,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
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
        maxHeight: "90%",
        display: "flex",
        maxWidth: "95%",
        // minWidth: "20%",
        minHeight: "50%",
        zIndex: 99999
    },
    content: {
        userSelect: "none",
        overflowY: "auto",
        flexWrap: "wrap"
    },
    innerContent: {
        minHeight: "200px"
    },
    paginationContainer: {
        justifyContent: "center",
        display: "flex"
    },
    renderActions: {
        flexDirection: 'row',
        display: 'flex',
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
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
        position: "absolute"
    }
});

export const selectDialogStyler = ({
    bottomContainerStyle,
    contentContainerStyle,
    headerContainerStyle,
    radiuses,
    colors,
    spaces,
    size
}: SelectDialogStylerParams): SelectDialogStylerResult => {
    let containerMinWidthValue = '35%';

    if (size === 'small') {
        containerMinWidthValue = "25%";
    } else if (size === 'medium') {
        containerMinWidthValue = "35%";
    } else if (size === "large") {
        containerMinWidthValue = "45%";
    } else if (size === 'xLarge') {
        containerMinWidthValue = "50%";
    } else {
        if (size?.endsWith('%')) {
            containerMinWidthValue = size;
        }
    }

    let container = {
        minWidth: containerMinWidthValue,
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container,
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

    let notTitleStyle = {
        marginBottom: spaces.container * 2
    };

    return {
        notTitleStyle,
        primaryButton,
        container,
        clearIcon,
        content,
        bottom,
        header
    };
};

