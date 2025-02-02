import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    ChipStylerParams, ChipStylerResult, TitleProps 
} from "./chip.props";
import {
    IIOCoreIconPropsType 
} from "../../types/index";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        boxSizing: "border-box",
        justifyContent: "center",
        flexDirection: "row",
        borderStyle: "solid",
        alignItems: "center",
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
    },
    title: {
        whiteSpace: "nowrap"
    }
}, {
    name: "IOCore-Chip"
});

type ChipStyle = {
    container: CSSProperties;
    title: {
        size: keyof IOCore.TypographyType;
    };
    cancelIcon: {
        size: number;
    },
    icon: {
        size: number;
    };
};

export type ChipStyleMappingType = {
    small: ChipStyle;
    medium: ChipStyle;
    large: ChipStyle;
    xLarge: ChipStyle;
};

export const SIZE_TO_STYLE_MAPPING: ChipStyleMappingType = {
    "small": {
        container: {
            paddingRight: 10,
            paddingBottom: 4,
            paddingLeft: 10,
            paddingTop: 4,
            borderRadius: 40
        },
        title: {
            size: "body3-regular"
        },
        cancelIcon: {
            size: 12
        },
        icon: {
            size: 12
        }
    },
    "medium": {
        container: {
            paddingRight: 14,
            paddingBottom: 6,
            paddingLeft: 14,
            paddingTop: 6,
            borderRadius: 50
        },
        title: {
            size: "body2-regular"
        },
        cancelIcon: {
            size: 14
        },
        icon: {
            size: 14
        }
    },
    "large": {
        container: {
            paddingBottom: 8,
            paddingRight: 18,
            paddingLeft: 18,
            paddingTop: 8,
            borderRadius: 60
        },
        title: {
            size: "body-regular"
        },
        cancelIcon: {
            size: 16
        },
        icon: {
            size: 16
        }
    },
    "xLarge": {
        container: {
            paddingBottom: 12,
            paddingRight: 18,
            paddingLeft: 18,
            paddingTop: 12,
            borderRadius: 60
        },
        title: {
            size: "body2-medium"
        },
        cancelIcon: {
            size: 16
        },
        icon: {
            size: 16
        }
    }
};
export default useStyles;

export const chipStyler = ({
    notSelectedColor,
    backgroundColor,
    spreadBehaviour,
    disabledStyle,
    iconDirection,
    isCancelable,
    titleColor,
    iconColor,
    disabled,
    radiuses,
    selected,
    borders,
    variant,
    spaces,
    colors,
    color,
    shape,
    icon,
    size
}: ChipStylerParams): ChipStylerResult => {
    let container: CSSProperties = {
        backgroundColor: colors.white,
        borderColor: colors.stroke,
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator,
        borderRadius: shape === 'pill' ? radiuses.half * 1.5 : radiuses.half
    };

    let titleProps: TitleProps = {
        color: "body",
        variant: SIZE_TO_STYLE_MAPPING[size].title.size
    };

    let iconProps: IIOCoreIconPropsType = {
        size: SIZE_TO_STYLE_MAPPING[size].icon.size,
        color: "body"
    };

    let cancelIconProps: IIOCoreIconPropsType = {
        size: SIZE_TO_STYLE_MAPPING[size].cancelIcon.size,
        color: colors.body
    };

    if(variant === "outline") {
        container.backgroundColor = "transparent";
        cancelIconProps.color = colors[color];
        titleProps.color = color;
        iconProps.color = color;
    }

    if(variant === "inverted") {
        container.backgroundColor = `${colors[color]}44`;
        container.borderColor = "transparent";
        cancelIconProps.color = colors[color];
        titleProps.color = color;
        iconProps.color = color;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(icon) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginLeft: iconDirection === "left" ? spaces.content : 0,
                marginRight: iconDirection === "right" ? spaces.content : 0
            }
        };
    }

    if(isCancelable) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginRight: spaces.content
            }
        };
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop",
            transform: "none"
        };
    }

    if(selected) {
        if(color) {
            container.backgroundColor = colors[color];
            container.borderColor = colors[color];
            titleProps.color = "white";
        } else {
            container.backgroundColor = colors.primary;
            container.borderColor = colors.primary;
            titleProps.color = "white";
        }
    } else if(color) {
        titleProps.color = "textDark";
    }

    if(selected && variant === 'outline') {
        if(color) {
            container.backgroundColor = "transparent";
            container.borderColor = colors[color];
            titleProps.color = color;
        } else {
            container.borderColor = colors.primary;
            titleProps.color = color;
        }
    }

    if(backgroundColor) {
        container.backgroundColor = colors[backgroundColor];
    }

    if(!selected && notSelectedColor) {
        container.borderColor = colors[notSelectedColor];
        titleProps.color = notSelectedColor;
    }

    if(titleColor) {
        cancelIconProps.color = colors[titleColor];
        titleProps.color = titleColor;
        iconProps.color = titleColor;
    }

    if(iconColor) {
        iconProps.color = iconColor;
    }

    return {
        cancelIconProps,
        titleProps,
        iconProps,
        container
    };
};
