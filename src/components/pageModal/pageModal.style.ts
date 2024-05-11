import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    PageModalStylerResult,
    PageModalStylerParams
} from "./pageModal.props";

export const modalPageStyler = ({
    contentContainerStyle,
    radiuses,
    spaces,
    colors
}: PageModalStylerParams): PageModalStylerResult => {
    let container: CSSProperties = {
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container
    };

    let content: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingBottom: spaces.content,
        paddingTop: spaces.content,
        ...contentContainerStyle
    };

    return {
        container,
        content
    };
};

const useStyles = createUseStyles({
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
    }
}, {
    name: "IOCore-PageModal"
});
export default useStyles;
