import {
    Story,
    Meta
} from "@storybook/react";
import lightTheme from "../../core/theme/variants/light";
import BadgeHOC from "./badgeHOC";
import {
    NotificationIcon 
} from "../../assets/svgr";
import {
    IBadgeHOCProps 
} from "./badgeHOC.props";

export default {
    title: "Components/BadgeHOC",
    component: BadgeHOC,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE BadgeHOC page."
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
        count: {
            control: "number"
        },
        size: {
            control: "number"
        },
        isActive: {
            control: "boolean"
        }
    },
} as Meta;

const Template: Story<IBadgeHOCProps> = (args) => <BadgeHOC {...args} />;

export const Icon = Template.bind({
});
Icon.args = {
    color: "accent",
    count: 5,
    size: 15,
    children: <NotificationIcon
        size={30}
    />
};