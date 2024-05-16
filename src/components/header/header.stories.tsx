import {
    Story,
    Meta
} from "@storybook/react";
import IHeaderProps from "./header.props";
import Header from "./header";
import {
    ClearIcon 
} from "../../assets/svgr";

export default {
    title: "Components/StateCard",
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
    },
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Data Not Found",
};
