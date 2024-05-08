import React from "react";
import {
    Story, Meta 
} from "@storybook/react/types-6-0";
import {
    IStickerProps 
} from "./sticker.props";
import Sticker from "./sticker";
import {
    IIOCoreIconPropsType 
} from "../../types";
import {
    ClearIcon 
} from "../../assets/svgr";
import EyeOpenedIcon from "../../assets/svgr/eyeOpened";

export default {
    title: "Components/Sticker",
    component: Sticker,
    argTypes: {
        spreadBehaviour: {
            control: {
                type: "select",
                options: ["baseline", "center", "stretch"],
            },
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
    },
} as Meta;

const Template: Story<IStickerProps> = (args) => <Sticker {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Default Sticker",
    onClick: () => alert("Default Sticker pressed"),
};

export const WithIcon = Template.bind({
});
WithIcon.args = {
    title: "Sticker with Icon",
    onClick: () => alert("Sticker with Icon pressed"),
};

export const Disabled = Template.bind({
});
Disabled.args = {
    title: "Disabled Sticker",
    disabled: true,
};
