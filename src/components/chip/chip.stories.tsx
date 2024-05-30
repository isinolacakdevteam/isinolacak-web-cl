import {
    Story,
    Meta
} from "@storybook/react";
import Chip from "./chip";
import IChipProps from "./chip.props";
import lightTheme from "../../core/theme/variants/light";
import {
    ChevronDownIcon 
} from "../../assets/svgr/index";

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
                "large"
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
        }
    },
} as Meta;

const Template: Story<IChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({
});
Default.args = {
    variant: "filled",
    title: "Chip",
    icon: () => {
        return <ChevronDownIcon
            color="red"
        />;
    }
};
