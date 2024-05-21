import {
    CSSProperties 
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    StateCardStylerResult,
    StateCardStylerParams,
    ContentProps,
    TitleProps, 
    IconProps
} from "./stateCard.props";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        userSelect: "none",
        outline: "none",
        display: "flex",
        maxWidth: 300
    },
    content: {
        textAlign: "center"
    }
}, {
    name: "ICore-StateCard"
});

export const stateCardStyler = ({
    contentColor,
    titleColor,
    iconColor,
    isAction,
    spaces,
    colors,
    icon
}: StateCardStylerParams): StateCardStylerResult => {
    let container: CSSProperties = {
        marginBottom: spaces.content * 2,
        padding: spaces.container
    };

    let titleProps: TitleProps = {
        variant: "header5-semiBold",
        color: "body",
        style: {
            marginBottom: spaces.content * 2
        }
    };

    let iconProps: IconProps = {
        color: colors.body,
        size: 65,
        style: {
            marginBottom: spaces.content * 2
        }
    };

    let contentProps: ContentProps = {
        variant: "body2-regular",
        color: "body"
    };

    if(icon) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginLeft: spaces.content
            }
        };
    }

    if(titleColor) {
        titleProps.color = titleColor;
        iconProps.color = titleColor;
    }

    if(iconColor) {
        iconProps.color = iconColor;
    }

    if(contentColor) {
        contentProps.color = contentColor;
    }

    if(isAction) {
        contentProps.style = {
            marginBottom: spaces.content * 2
        };
    }

    return {
        contentProps,
        titleProps,
        iconProps,
        container
    };
};

export default useStyles;
