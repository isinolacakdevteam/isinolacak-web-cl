import {
    FC
} from  "react";
import ILoadingProps from "./loading.props";
import useStyles from "./loading.style";
import {
    IOCoreTheme
} from "../../core/index";
import {
    LoadingDots
} from "../../assets/svgr/index";

const Loading: FC<ILoadingProps> = ({
    color = "primary",
    size = 22,
    className,
    children,
    style,
    ...props
}) => {
    const {
        colors
    } = IOCoreTheme.useContext();

    const classes = useStyles();

    return  <div className={classes.loader}>
        <span className={`${classes.loaderSpan} ${classes.loaderSpanNthChild1}`}>
            <LoadingDots
                color={colors[color]}
                size={size}
                {...props}
            />
        </span>
        <span className={`${classes.loaderSpan} ${classes.loaderSpanNthChild2}`}>
            <LoadingDots
                color={colors[color]}
                size={size}
                {...props}
            />
        </span>
        <span className={`${classes.loaderSpan} ${classes.loaderSpanNthChild3}`}>
            <LoadingDots
                color={colors[color]}
                size={size}
                {...props}
            />
        </span>
    </div>;
};
export default Loading;