import {
    useState,
    FC,
    useRef,
    useEffect,
} from "react";
import {
    IOCoreTheme 
} from "../../core";
import useStyles, {
    toolBoxStyler 
} from "./toolBox.styles";
import IToolBoxProps from "./toolBox.props";

/**
 * A generic toolbox
 * @param props {@link IToolBoxProps}
 * @returns Element
 */
const ToolBox: FC<IToolBoxProps> = ({
    children,
    content
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tInfo, setTInfo] = useState({
        windowHeight: 0,
        windowWidth: 0,
        w: 0,
        h: 0,
        x: 0,
        y: 0
    });

    const testRef = useRef<null | HTMLDivElement>(null);
    const classes = useStyles();

    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        toolBoxContainer,
    } = toolBoxStyler({
        radiuses,
        spaces,
        colors,
        tInfo
    });

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => {
        if(!(testRef && testRef.current)) {
            return;
        }
        const position = testRef.current.getBoundingClientRect();
        if(
            position.width !== tInfo.w ||
            position.height !== tInfo.h ||
            position.y !== tInfo.y ||
            position.x !== tInfo.x
        ) {
            setTInfo({
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth,
                h: position.height,
                w: position.width,
                y: position.y,
                x: position.x,
            });
        }
    };

    return <div
        className={classes.container}
        onClick={() => {
            setIsVisible(prev => {
                if(prev) {
                    setTInfo(c_prev => {
                        return {
                            ...c_prev,
                            x: 0,
                            y: 0
                        };
                    });
                }
                return !prev;
            });
        }}
    >
        {children}
        {
            isVisible ?
                <div
                    className={classes.toolBoxContainer}
                    ref={(e) => {
                        testRef.current = e;
                        onResize();
                    }}
                    style={{
                        ...toolBoxContainer,
                    }}
                >
                    {content}
                </div>
                :
                null
        }
    </div>;
};
export default ToolBox;
