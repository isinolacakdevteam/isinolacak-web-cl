import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    AccordionCardStylerParams,
    AccordionCardStylerResult
} from "./accordionCard.props";

const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        boxSizing: "border-box",
        userSelect: "none",
        display: "flex"
    },
    headerContainer: {
        flexDirection: "row",
        display: "flex"
    },
    title: {
        width: "100%"
    }
});

export const accordionCardStyler = ({
    isShowing,
    radiuses,
    colors,
    spaces
}: AccordionCardStylerParams): AccordionCardStylerResult => {

    let container: CSSProperties = {
        backgroundColor: colors.grey25,
        padding: spaces.content * 1.5,
        borderRadius: radiuses.hard
    };

    let iconFlipper: CSSProperties ={
        rotate: "0deg"
    };

    if(isShowing) {
        iconFlipper.rotate= "180deg";
    }

    return {
        iconFlipper,
        container
    };
};
export default useStyles;
