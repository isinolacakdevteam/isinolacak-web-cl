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
                    "stretch",
                    "free"
                ]
            }
        },
        isSelected: {
            control: "boolean"
        },
        isError: {
            control: "boolean"
        },
        infoText: {
            control: "text"
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
        },
        checkDirection: {
            control: {
                type: "select",
                options: [
                    "left",
                    "right"
                ]
            }
        }
    },
} as Meta;

const Template: Story<ICheckBoxProps> = (args) => <div
    style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: 20
    }}
>
    <CheckBox {...args} />
</div>;

export const Default = Template.bind({
});
Default.args = {
    title: "CheckBox"
};
