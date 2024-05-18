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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    contentContainerStyle: {
        display: "flex",
        justifyContent: "center"
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
        alignItems: "center",
        borderRadius: 100,
        borderWidth: 1,
        height: 42,
        width: 42
    }
}, {
    name: "IOCore-Stepmanager"
});

export const stepManagerStyler = ({
    indicatorEmptyColor,
    indicatorFilledColor,
    components,
    stepIndex,
    colors,
    spaces
}: StepManagerStylerParams): StepManagerStylerResult => {
    let indicatorObject: CSSProperties = {
        /* backgroundColor: index <= stepIndex ? colors[indicatorFilledColor] : colors[indicatorEmptyColor], //TODO: Index issue will fix
        marginRight: index === components.length - 1 ? 0 : spaces.content / 4,
        borderBottomRightRadius: index === components.length - 1 ? 50 : 0,
        borderTopRightRadius: index === components.length - 1 ? 50 : 0,
        marginLeft: index === 0 ? 0 : spaces.content / 4,
        borderBottomLeftRadius: index === 0 ? 50 : 0,
        borderTopLeftRadius: index === 0 ? 50 : 0 */
    };

    let bottomContainer: CSSProperties = {
        padding: spaces.container
    };

    let backButtonContainer: CSSProperties = {
        borderColor: colors.stroke
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
        indicatorObject,
        bottomContainer,
        containerStyler,
        pageContainer,
        headerStyler
    };
};

export default useStyles;
