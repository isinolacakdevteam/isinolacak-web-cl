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
        layout: "fullscreen",
        docs: {
            description: {
                component: "Welcome to IOCORE TextArea page."
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
        infoText: {
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

const Template: Story<ITextAreaProps> = (args) => <div
    style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: 20
    }}
>
    <TextArea {...args} />
</div>;

export const Default = Template.bind({
});
Default.args = {
    title: "Text Area",
    placeholder: "Please enter text"
};
