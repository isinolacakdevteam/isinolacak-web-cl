import {
    Story,
    Meta
} from "@storybook/react";
import Chip from "./chip";
import IChipProps from "./chip.props";
import lightTheme from "../../core/theme/variants/light";
import {
    ChevronRightIcon, 
    ClearIcon
} from "../../assets/svgr/index";
import {
    IIOCoreIconPropsType 
} from "src/types";

export default {
    title: "Components/Chip",
    component: Chip,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE Chip page."
            }
        }
    },
    argTypes: {
        color: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        notSelectedColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        variant: {
            control: {
                type: "select",
                options: [
                    "inverted",
                    "outline",
                    "filled"
                ]
            }
        },
        titleColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            }
        },
        backgroundColor: {
            control: {
                type: "select",
                options: ['Not Selected', ...Object.keys(lightTheme.colors)]
            },
            defaultValue: undefined
        },
        isCancelable: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
        },
        selected: {
            control: "boolean"
        },
        size: {
            control: "select",
            options: [
                "small",
                "medium",
                "large",
                "xLarge"
            ]
        },
        shape: {
            control: "select",
            options: [
                "pill",
                "square"
            ]
        },
        iconDirection: {
            control: "select",
            options: [
                "left",
                "right"
            ]
        },
        spreadBehaviour: {
            control: {
                type: "select",
                options: [
                    "baseline",
                    "center",
                    "free"
                ]
            }
        },
        icon: {
            mapping: {
                "undefined": undefined,
                "chevronRightIcon": ({
                    color,
                    size
                }: IIOCoreIconPropsType) => <ChevronRightIcon
                    color={color}
                    size={size}
                />,
                "clearIcon": ({
                    color,
                    size
                }: IIOCoreIconPropsType) => <ClearIcon
                    color={color}
                    size={size}
                />
            },
            control: {
                type: "select",
                options: ["undefined", "chevronRightIcon", "clearIcon"]
            }
        },
    },
} as Meta;

const Template: Story<IChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({
});
Default.args = {
    variant: "filled",
    title: "Chip"
};
