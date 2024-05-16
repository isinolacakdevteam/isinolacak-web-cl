import {
    CSSProperties 
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    HeaderStylerResult,
    HeaderStylerParams,
    ContentProps,
    TitleProps, 
    IconProps
} from "./header.props";

const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        width: "100%"
    },
    contentContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    headerRight: {
        justifyContent: "flex-end",
        flexDirection: "row",
        flex: 1
    },
    headerLeftToRightNull: {
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        width: 42
    }
}, {
    name: "NCore-StateCard"
});

export const headerStyler = ({
    contentColor,
    titleColor,
    iconColor,
    isAction,
    spaces,
    colors,
    icon
}: HeaderStylerParams): HeaderStylerResult => {
    let container: CSSProperties = {
        marginBottom: spaces.content * 2,
        padding: spaces.container
    };

    let titleProps: TitleProps = {
        variant: "header5-semiBold",
        color: "body",
        style: {
            marginBottom: spaces.inline * 2
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
