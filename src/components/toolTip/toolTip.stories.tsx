import {
    Story,
    Meta
} from "@storybook/react";
import ToolTip from "./toolTip";
import IToolTipProps from "./toolTip.props";
import Text from "../text/text";

export default {
    title: "Components/ToolTip",
    component: ToolTip,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE ToolTip page."
            }
        }
    },
    argTypes: {
        title: {
            control: "text"
        },
        direction: {
            control: "select",
            options: [
                "bottom",
                "right",
                "left",
                "top"
            ]
        }
    }
} as Meta;

const Template: Story<IToolTipProps> = (args) => <ToolTip {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "ToolTip title is visible!",
    children: <Text>Click me!</Text>,
    direction: "left"
};
