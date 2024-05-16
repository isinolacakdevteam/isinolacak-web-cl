import {
    FC
} from  "react";
import Text from "../text/text";
import {
    IOCoreTheme 
} from "../../core";
import IHeaderProps from "./header.props";
import useStyles, {
    headerStyler 
} from "./header.styles";

const Header: FC<IHeaderProps> = ({
    titleVariant = "header5-semiBold",
    headerLocation = "left",
    titleColor = "primary",
    renderBottom,
    headerRight,
    customTitle,
    headerLeft,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        contentProps,
        titleProps,
        container,
        iconProps
    } = headerStyler({
        icon: IconComponentProp,
        contentColor,
        titleColor,
        iconColor,
        isAction,
        colors,
        spaces
    });

    const renderBottomContainer = () => {
        if(!renderBottom) {
            return null;
        }

        return <div
            style={{
                marginTop: spaces.content * 2
            }}
        >
            {renderBottom}
        </div>;
    };

    return (
        <div
            className={
                classes.container
                /* {
                    paddingBottom: renderBottom ? 0 : spaces.container,
                    paddingHorizontal: spaces.container,
                    borderBottomColor: colors.seperator,
                    backgroundColor: colors.white,
                    paddingTop: spaces.container
                },
                style */
            }
            style={{

                paddingBottom: renderBottom ? 0 : spaces.container,
                paddingLeft: spaces.container,
                paddingRight: spaces.container,
                borderBottomColor: colors.seperator,
                backgroundColor: colors.white,
                paddingTop: spaces.container,
                ...style
            }}
        >
            <div className={classes.contentContainer}>
                {
                    headerLeft ?
                        headerLeft()
                        :
                        !headerLeft && !headerRight ?
                            <div 
                                className={classes.headerLeftToRightNull}
                            />
                            :
                            null
                }
                {
                    customTitle ?
                        customTitle
                        :
                        <Text
                            variant={titleVariant}
                            /* style={{
                                headerLocation === "center" ? {
                                    textAlign: "center",
                                    color: titleColor,
                                    flex: 1
                                } : null
                            }} */
                        >
                            {title}
                        </Text>
                }
                <div
                    /* style={[
                        stylesheet.headerRight,
                        headerLocation === "center" ? {
                            position: "absolute",
                            flex: undefined,
                            right: -10
                        } : null
                    ]} */
                >
                    {headerRight ? headerRight() : null}
                </div>
            </div>
            <div
                className={classes.container}
            >
                {renderBottomContainer()}
            </div> 
        </div>
    );

};
export default Header;
