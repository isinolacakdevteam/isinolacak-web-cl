import {
    FC
} from "react";
import {
    IBadgeHOCProps 
} from "./badgeHOC.props";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text/text";
import useStyles, {
    badgeHOCStyler 
} from "./badgeHOC.stylesheet";

const BadgeHOC: FC<IBadgeHOCProps> = ({
    spreadBehaviour = "baseline",
    isActive = true,
    borderWidth,
    borderColor,
    size = 20,
    children,
    color,
    count,
    style,
    ...props
}) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const classes = useStyles();

    const coordinationToken = (size / 2) * -1;

    const {
        location= {
            top: coordinationToken + (size / 4),
            right: coordinationToken
        }
    } = props;

    const {
        badgeContainer,
        container
    } = badgeHOCStyler({
        spreadBehaviour,
        borderColor,
        borderWidth,
        radiuses,
        location,
        borders,
        spaces,
        colors,
        count,
        color,
        size
    });

    const renderBadge = () => {
        if(!isActive) {
            return null;
        }
        return <div
            className={classes.badgeContainer}
            style={{
                ...badgeContainer,
            }}
        >
            {count ? 
                <Text
                    className={classes.count}
                    variant="body4-medium"
                    color="textWhite"
                >
                    {count}
                </Text>
                : null    
            }
        </div>;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            ...style,
            display: "inline-block"
        }}
    >
        {children}
        {renderBadge()}
    </div>;
};
export default BadgeHOC;
