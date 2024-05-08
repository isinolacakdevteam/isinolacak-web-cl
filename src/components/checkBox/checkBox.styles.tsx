import {
    createUseStyles 
} from "react-jss";

export const useStyles = createUseStyles({
    container: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: 24,
        width: 24
    },
    checkIndicator: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: 24,
        width: 24
    },
    title: {
        textAlignVertical: "center",
        flex: 1
    }
});

export default useStyles;
