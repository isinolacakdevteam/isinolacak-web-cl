import {
    Story,
    Meta
} from "@storybook/react";
import Button from "./button";
import IButtonProps from "./button.props";
import {
    ChevronRightIcon,
    ClearIcon
} from "../../assets/svgr";
import {
    IIOCoreIconPropsType
} from "../../types";
import lightTheme from "../../core/theme/variants/light";
export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "Welcome to IOCore Button page."
            }
        }
    },
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large", "xSmall"],
            },
        },
        variant: {
            control: {
                type: "select",
                options: ["filled", "outline", "ghost"]
            }
        },
        disabled: {
            control: "boolean"
        },
        spreadBehaviour: {
            control: {
                type: "select",
                options: ["free", "baseline", "stretch"]
            }
        },
        textColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        backgroundColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        textVariant: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.typography)
            }
        },
        loading: {
            control: {
                type: "boolean"
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
        iconDirection: {
            control: {
                type: "select",
                options: ["left", "right"]
            }
        }
    },
} as Meta;

const Template: Story<IButtonProps> = (args) => <div
    style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: 20
    }}
>
    <Button {...args} />
</div>;

export const Icon = Template.bind({
});
Icon.args = {
    title: "Button"
};