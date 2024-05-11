import {
    Story,
    Meta
} from "@storybook/react";
import IPageModalProps from "./pageModal.props";
import PageModal from "./pageModal";

export default {
    title: "Components/PageModal",
    component: PageModal,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE PageModal page."
            }
        }
    },
    argTypes: {
        isVisible: {
            control: "boolean"
        }
    }
} as Meta;

const Template: Story<IPageModalProps> = (args) => <PageModal {...args}/>;

export const Default = Template.bind({
});
Default.args = {
    isVisible: true
};
