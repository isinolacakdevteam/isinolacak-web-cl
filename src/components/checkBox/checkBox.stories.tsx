import {
    Story,
    Meta
} from "@storybook/react";
import CheckBox from "./checkBox";
import {
    ICheckBoxProps 
} from "./checkBox.props";
import lightTheme from "../../core/theme/variants/light";

export default {
    title: "Components/CheckBox",
    component: CheckBox,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE Checkbox page."
            }
        }
    },
    argTypes: {
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
        isSelected: {
            control: "boolean"
        },
        titleType: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.typography)
            }
        },
        disabled: {
            control: "boolean"
        },
        titleColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        }
    },
} as Meta;

const Template: Story<ICheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "CheckBox"
};
