import React from "react";
import {
    Story,
    Meta
} from "@storybook/react";
import Switcher from "./switcher";
import ISwitcherProps from "./switcher.props";

export default {
    title: "Components/Switcher",
    component: Switcher,
    parameters: {
        docs: {
            description: {
                component: "Welcome to İOCore Switcher page. Please use with onChange prop on the project."
            }
        }
    },
    argTypes: {
        isActive: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
        },
        titleDirection: {
            control: "select",
            options: [
                "left",
                "right"
            ]
        }
    }
} as Meta;

const Template: Story<ISwitcherProps> = (args) => <Switcher {...args} />;

export const Default = Template.bind({
});
Default.args = {
    isActive: false,
    title: "title"
};
