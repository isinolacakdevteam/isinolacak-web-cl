import React from "react";
import {
    Story,
    Meta
} from "@storybook/react";
import DateTimePicker from "./dateTimePicker";
import IDateTimePickerProps from "./dateTimePicker.props";
import {
    IIOCoreIconPropsType
} from "../../types";
import {
    EyeOpenedIcon,
    ClearIcon
} from "../../assets/svgr";

export default {
    title: "Components/DateTimePicker",
    component: DateTimePicker,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N DateTimePicker page."
            }
        },
        layout: "centered"
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
        isError: {
            control: "boolean"
        },
        infoText: {
            control: "text"
        },
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
                "eyeOpenedIcon": ({
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

const Template: Story<IDateTimePickerProps> = (args) => <div
    style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
        width: "100%"
    }}
>
    <DateTimePicker {...args} min="2018-07-15" max="2019-05-05" />
</div>;

export const Default = Template.bind({
});
Default.args = {
    placeholder: "Please enter text"
};

export const Disabled = Template.bind({
});
Disabled.args = {
    placeholder: "Please choose any date",
    title: "Date Time Picker",
    disabled: true
};
