import {
    useState,
    FC
} from "react";
import useStyles, {
    accordionCardStyler
} from "./accordionCard.stylesheet";
import IAccordionCard from "./accordionCard.props";
import {
    IOCoreTheme
} from "../../core/index";
import Text from "../text/text";
import {
    ChevronUpIcon
} from "../../assets/svgr/index";

const AccordionCard: FC<IAccordionCard> = ({
    renderTool: renderToolProp,
    isVisible = false,
    content,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const [isShowing, setIsShowing] = useState(isVisible);

    const renderTool = () => {
        if (renderToolProp) {
            return renderToolProp();
        }

        return null;
    };

    const {
        iconFlipper,
        container
    } = accordionCardStyler({
        isShowing,
        radiuses,
        borders,
        spaces,
        colors
    });

    return <div
        className={classes.container}
        onClick={() => {
            setIsShowing(!isShowing);
        }}
        style={{
            ...container,
            ...style
        }}
    >
        <div
            className={classes.headerContainer}
        >
            <Text
                className={classes.title}
                variant="body2-semiBold"
                color="textDark"
            >
                {title}
            </Text>
            <div
                style={iconFlipper}
            >
                {renderTool()}
                <ChevronUpIcon />
            </div>
        </div>
        {isShowing && (
            typeof content === "string" ? (
                <Text
                    variant="body3-regular"
                    color="textGrey"
                >
                    {content}
                </Text>
            ) : (
                content()
            )
        )}
    </div>
};
export default AccordionCard;
