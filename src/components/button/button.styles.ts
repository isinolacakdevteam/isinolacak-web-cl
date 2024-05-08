import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    ButtonStylerParams,
    ButtonStylerResult,
    TitleProps
} from "./button.props";
import {
    IIOCoreIconPropsType
} from "../../types";
import {
    SIZE_TO_STYLE_MAPPING 
} from "./constants";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        alignItems: "center",
        borderStyle: "solid",
        flexDirection: "row",
        userSelect: "none",
        outline: "none",
        display: "flex",
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            // cursor: (props: { disabled: boolean; }) => props.disabled ? "no-drop" : "pointer",
            opacity: 0.75
        },
        "&:active": {
            transform: "translateY(1px)",
            // transform: (props: { disabled: boolean; }) => props.disabled ? "none" : "translateY(1px)",
            transition: "transform 0.1s"
        }
    }
}, {
    name: "IOCore-Button"
});

type ButtonStyle = {
    container: CSSProperties;
    title: {
        size: keyof IOCore.TypographyType;
    };
    loading: {
        containerSize: keyof IOCore.TypographyType;
    },
    icon: {
        size: number;
    };
};

export type ButtonStyleMappingType = {
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};

export const buttonStyler = ({
    displayBehaviourWhileLoading,
    spreadBehaviour,
    disabledStyle,
    iconDirection,
    textColor,
    iconColor,
    disabled,
    radiuses,
    borders,
    loading,
    variant,
    spaces,
    colors,
    color,
    title,
    icon,
    size
}: ButtonStylerParams): ButtonStylerResult => {
    let container: CSSProperties = {
        backgroundColor: variant === "filled" ? colors[color] : "transparent",
        borderColor: variant !== "ghost" ? colors[color] : "transparent",
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator,
        borderRadius: radiuses.half
    };

    let titleColor: keyof IOCore.ColorsType = textColor ? textColor : "body";

    let titleProps: TitleProps = {
        color: titleColor,
        variant: size === "xSmall" ? "body3-medium" : "body2-medium",
        style: {
            margin: "0 auto"
        }
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container = {
                ...container,
                ...disabledStyle,
                cursor: "no-drop",
                transform: "none",
                opacity: 0.5
            };
            titleProps = {
                ...titleProps,
                style: {
                    ...titleProps.style,
                    marginLeft: spaces.content * 2
                }
            };
        }
    }

    if(loading && spreadBehaviour === "stretch") {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                margin: "initial",
                marginLeft: spaces.content
            }
        };
    }

    if(icon && !loading) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                margin: "initial",
                marginLeft: spaces.content
            }
        };
    }

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = color;
        } else {
            titleColor = "constrastBody";
        }
        titleProps.color = titleColor;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.justifyContent = "center";
        container.width = "100%";
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop",
            transform: "none"
        };
    }

    if(icon && title) {
        if(iconDirection === "left") {
            titleProps.style = {
                ...titleProps.style,
                marginLeft: spaces.inline
            };
        } else {
            titleProps.style = {
                ...titleProps.style,
                marginRight: spaces.inline
            };
        }
    }

    let iconProps: IIOCoreIconPropsType = {
        size: 18,
        color: iconColor ? colors[iconColor] : colors[titleColor]
    };

    return {
        titleProps,
        iconProps,
        container
    };
};

export default useStyles;