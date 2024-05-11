import {
    createUseStyles
} from "react-jss";
import {

} from "./selectDialog.stories";
import {
    CSSProperties
} from "react";
import {
    SelectSheetStylerParams,
    SelectSheetStylerResult 
} from "./selectDialog.props";


export const useStyles = createUseStyles({
    modalStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    rootStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        zIndex: 99
    },
    childrenStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    contentContainerStyle: {
        flex: 1
    },
    buttonContainerStyle: {
        flexDirection: "row"
    },
    okButtonStyle: {
        flex: 1
    },
    inputStyle: {
    },
    selectItemContainer: {
        flex: 1
    },
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
        flexDirection: "column",
        overflow: "hidden",
        position: "fixed",
        maxHeight: "80%",
        display: "flex",
        maxWidth: "85%",
        zIndex: 99999
    },
    content: {
        userSelect: "none",
        overflowY: "auto",
        flexWrap: "wrap"
    },
    headerContainer: {
        userSelect: "none",
        paddingBottom: 0,
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
    }
});

export const selectSheetStyler = ({
    childrenStyleProp,
    fullScreen,
    autoHeight,
    radiuses,
    colors,
    spaces
}: SelectSheetStylerParams): SelectSheetStylerResult => {
    const contentContainerStyle: CSSProperties = {
    };

    const pageContainerStyle = {
        borderTopRightRadius: radiuses.hard,
        borderTopLeftRadius: radiuses.hard,
        paddingVertical: spaces.container,
        backgroundColor: colors.white,

    };

    const childrenStyle = {
        ...childrenStyleProp
    };

    const modalStyle = {
        backgroundColor: "transparent",
    };

    const rootStyle = {
    };

    let searchContainerProps: CSSProperties = {
        marginBottom: spaces.content,
    };

    let buttonsContainerProps: CSSProperties = {
        marginBottom: spaces.content,    
    };

    let clearButtonProps: CSSProperties = {
        marginRight: spaces.inline
    };

    let okButtonProps: CSSProperties = {
    };

    let inputIconProps: CSSProperties = {
        marginRight: spaces.inline,
    };

    if(autoHeight) {
        contentContainerStyle.flex = undefined;
    }

    if(fullScreen) {
        childrenStyle.borderTopLeftRadius = 0;
        childrenStyle.borderTopRightRadius = 0;

        pageContainerStyle.borderTopLeftRadius = 0;
        pageContainerStyle.borderTopRightRadius = 0;
    }

    return {
        contentContainerStyle,
        buttonsContainerProps,
        searchContainerProps,
        pageContainerStyle,
        clearButtonProps,
        inputIconProps,
        childrenStyle,
        okButtonProps,
        modalStyle,
        rootStyle
    };
};

