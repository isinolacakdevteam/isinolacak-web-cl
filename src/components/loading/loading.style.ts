import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        display: 'flex',
        zIndex: 20
    },
    loaderSpan: {
        animation: '$dots_411 1.5s infinite ease-in-out',
        margin: '-5px',
        height: '25px',
        width: '25px',
    },
    loaderSpanNthChild1: {
        animationDelay: '-0.40s',
    },
    loaderSpanNthChild2: {
        animationDelay: '-0.25s',
    },
    loaderSpanNthChild3: {
        animationDelay: '-0.10s',
    },
    '@keyframes dots_411': {
        '0%': {
            transform: 'scale(0)',
        },
        '5%': {
            opacity: 0,
        },
        '40%': {
            transform: 'scale(0.8)',
        },
        '80%': {
            transform: 'scale(0)',
        },
        '100%': {
            transform: 'scale(0)',
        },
    }
}, {
    name: "ICore-Loading"
});
export default useStyles;