import {
    Story,
    Meta
} from "@storybook/react";
import lightTheme from "../../core/theme/variants/light";
import IHeaderProps from "./header.props";
import Header from "./header";
import {
    ChevronRightIcon
} from "../../assets/svgr/index";

export default {
    title: "Components/Header",
    component: Header,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE Header page."
            }
        }
    },
    argTypes: {
        title: {
            control: "string"
        },
        headerLocation: {
            control: {
                type: "select",
                options: ["left", "center"]
            }
        },
        titleVariant: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.typography)
            }
        },
        titleColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
    },
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Header",
    headerLocation: "center",
    headerLeft: () => <ChevronRightIcon
        color="red"
        size={20}
    />,
    headerRight:  () => <ChevronRightIcon
        color="blue"
        size={20}
    />
};
