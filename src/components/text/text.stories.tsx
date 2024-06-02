import {
    Story,
    Meta
} from "@storybook/react";
import Text from "./text";
import ITextProps from "./text.props";
import lightTheme from "../../core/theme/variants/light";

export default {
    title: "Components/Text",
    component: Text,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE Text page."
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
                options: Object.keys(lightTheme.typography)
            }
        }
    },
} as Meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({
});

Default.args = {
    variant: "body-regular",
    children: "Body"
};
