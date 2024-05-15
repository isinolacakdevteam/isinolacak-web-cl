import {
    useState,
    FC,
    useRef,
    useEffect,
} from "react";
import useStyles, {
    toolTipStyler 
} from "./toolTip.styles";
import Text from "../text/text";
import IToolTipProps from "./toolTip.props";
import {
    IOCoreTheme 
} from "../../core";

/**
 * A generic tooltip
 * @param props {@link IToolTipProps}
 * @returns Element
 */
const ToolTip: FC<IToolTipProps> = ({
    direction,
    children,
    title
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tInfo, setTInfo] = useState({
        w: 50,
        h: 50
    });

    const {
        spaces,
        radiuses,
        colors
    } = IOCoreTheme.useContext();

    const classes = useStyles();

    const {
        toolTipContainer,
        toolTipArrow
    } = toolTipStyler({
        direction,
        radiuses,
        spaces,
        colors,
        tInfo
    });

    const toolTipRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        onResize();

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => {
        if(
            toolTipRef && toolTipRef.current &&
            (
                toolTipRef.current.offsetWidth !== tInfo.w ||
                toolTipRef.current.offsetHeight !== tInfo.h
            )
        ) {
            setTInfo({
                w: toolTipRef.current.offsetWidth,
                h: toolTipRef.current.offsetHeight
            });
        }
    };

    return <div
        className={classes.container}
        onMouseEnter={() => {
            setIsVisible(true);
        }}
        onMouseLeave={() => {
            setIsVisible(false);
        }}
    >
        {children}
        {
            isVisible ?
                <div
                    className={classes.toolTipContainer}
                    ref={(e) => {
                        toolTipRef.current = e;
                        onResize();
                    }}
                    style={{
                        ...toolTipContainer
                    }}
                >
                    <Text color="constrastBody" variant="body3-regular">{title}</Text>
                    <div
                        className={classes.toolTipArrow}
                        style={{
                            ...toolTipArrow
                        }}
                    >
                    </div>
                </div>
                :
                null
        }
    </div>;
};
export default ToolTip;
