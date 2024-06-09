import {
    FC
} from  "react";
import useStyles, {
    stateCardStyler 
} from "./stateCard.styles";
import IStateCardProps from "./stateCard.props";
import Button from "../button/button";
import Text from "../text/text";
import {
    IOCoreTheme 
} from "../../core";

/**
 * A generic stateCard
 * @param props {@link IStateCardProps}
 * @returns Element
 */
const StateCard: FC<IStateCardProps> = ({
    icon: IconComponentProp,
    contentColor,
    buttonProps,
    titleColor,
    className,
    iconColor,
    isAction,
    content,
    style,
    title,
    ...props
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
    } = stateCardStyler({
        icon: IconComponentProp,
        contentColor,
        titleColor,
        iconColor,
        isAction,
        colors,
        spaces
    });

    const renderIcon = () => {
        if(!IconComponentProp) {
            return null;
        }

        return <div
            style={iconProps.style}
        >
            <IconComponentProp
                {...iconProps}
            />
        </div>;
    };

    const renderTitle = () => {
        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={titleProps.style}
        >
            {title}
        </Text>;
    };

    const renderContent = () => {
        return <Text
            variant={contentProps.variant}
            className={classes.content}
            color={contentProps.color}
            style={contentProps.style}
        >
            {content}
        </Text>;
    };

    const renderAction = () => {
        if(!isAction) {
            return null;
        }

        return <Button
            {...buttonProps}
            onClick={() => {
                if(buttonProps?.onClick) buttonProps.onClick();
            }}
        />;
    };

    return <div
        {...props}
        className={[
            classes.container,
            className
        ].join(" ")}
        style={{
            ...style,
            ...container
        }}
    >
        {renderIcon()}
        {renderTitle()}
        {renderContent()}
        {renderAction()}
    </div>;
};
export default StateCard;
