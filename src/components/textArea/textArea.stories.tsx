import {
    Story,
    Meta
} from "@storybook/react";
import TextArea from "./textArea";
import ITextAreaProps from "./textArea.props";

export default {
    title: "Components/TextArea",
    component: TextArea,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N TextArea page."
            }
        }
    },
    argTypes: {
        title: {
            control: "text"
        },
        placeholder: {
            control: "text"
        },
        clearEnabled: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
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
        isRequired: {
            control: "boolean"
        },
        isError: {
            control: "boolean"
        },
        isTextLimit: {
            control: "boolean"
        },
        textLimit: {
            control: "number"
        }
    }
} as Meta;

const Template: Story<ITextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Text Area",
    placeholder: "Please enter text"
};
