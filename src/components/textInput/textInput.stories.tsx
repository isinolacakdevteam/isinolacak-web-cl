import {
    Story,
    Meta
} from "@storybook/react";
import TextInput from "./textInput";
import ITextInputProps from "./textInput.props";
import {
    IIOCoreIconPropsType
} from "../../types";
import {
    ClearIcon,
    EyeOpenedIcon 
} from "../../assets/svgr";

export default {
    title: "Components/TextInput",
    component: TextInput,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N TextInput page."
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
        password: {
            control: "boolean"
        },
        isError: {
            control: "boolean"
        },
        errorText: {
            control: "text"
        },
        iconDirection: {
            control: {
                type: "select",
                options: [
                    "left",
                    "right"
                ]
            }
        },
        icon: {
            mapping: {
                "undefined": undefined,
                "EyeOpenedIcon": ({
                    color,
                    size
                }: IIOCoreIconPropsType) => <EyeOpenedIcon
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
                options: ["undefined", "EyeOpenedIcon", "clearIcon"]
            }
        }
    }
} as Meta;

const Template: Story<ITextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Text Input",
    placeholder: "Please enter text"
};

export const Disabled = Template.bind({
});
Disabled.args = {
    title: "Text Input",
    placeholder: "Please enter text",
    disabled: true
};
