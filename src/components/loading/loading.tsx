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
    color = "body",
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
                size={22}
            />
        </span>
        <span className={`${classes.loaderSpan} ${classes.loaderSpanNthChild2}`}>
            <LoadingDots/>
        </span>
        <span className={`${classes.loaderSpan} ${classes.loaderSpanNthChild3}`}>
            <LoadingDots/>
        </span>
    </div>;
};
export default Loading;