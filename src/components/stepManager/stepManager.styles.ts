import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    StepManagerStylerResult,
    StepManagerStylerParams
} from "./stepManager.props";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        borderStyle: "solid",
        borderBottomWidth: 1
    },
    indicatorContainer: {
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        width: "100%"
    },
    contentContainerStyle: {
        justifyContent: "center",
        display: "flex"
    },
    indicatorObject: {
        height: 5,
        flex: 1
    },
    componentContainer: {
    },
    bottomContainer: {
    },
    backButtonContainer: {
        justifyContent: "center",
        borderStyle: "solid",
        borderRadius: 100,
        display: "flex",
        borderWidth: 2
    }
}, {
    name: "IOCore-Stepmanager"
});

export const stepManagerStyler = ({
    colors,
    spaces
}: StepManagerStylerParams): StepManagerStylerResult => {
    let bottomContainer: CSSProperties = {
        padding: spaces.container
    };

    let backButtonContainer: CSSProperties = {
        borderColor: colors.stroke,
        padding: spaces.content
    };

    let headerStyler: CSSProperties = {
        borderBottomColor: colors.stroke,
        marginBottom: spaces.container,
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
    };

    let containerStyler: CSSProperties = {
        backgroundColor: colors.layer1
    };

    let pageContainer: CSSProperties = {
        paddingTop: spaces.container / 2,
        paddingLeft: spaces.container,
        paddingRight: spaces.container,
        backgroundColor: colors.layer1
    };

    return {
        backButtonContainer,
        bottomContainer,
        containerStyler,
        pageContainer,
        headerStyler
    };
};

export default useStyles;
