import {
    Story,
    Meta
} from "@storybook/react";
import SelecetDialog from "./selectDialog";
import ISelectSheetProps from "./selectDialog.props";

export default {
    title: "Components/SelecetBoxDialog",
    component: SelecetDialog,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Dialog page."
            }
        }
    },
    argTypes: {
        isVisible: {
            control: "boolean"
        },
        title: {
            control: "text"
        }
    }
} as Meta;

const Template: Story<ISelectSheetProps> = (args) => <SelecetDialog {...args}/>;

export const Default = Template.bind({
});
Default.args = {
    title: 'SelectDialog',
    isVisible: true
};
