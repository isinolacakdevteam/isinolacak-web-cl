import {
    Story,
    Meta
} from "@storybook/react";
import SelecetDialog from "./selectDialog";
import ISelectDialogProps from "./selectDialog.props";
import Text from "../text/text";

export default {
    title: 'Components/SelecetDialog',
    component: SelecetDialog,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCore Dialog page."
            }
        }
    },
    argTypes: {
        isVisible: {
            control: "boolean"
        },
        title: {
            control: "text"
        },
        isSearchLoading: {
            control: "boolean"
        },
        size: {
            control: "text"
        },
    }
} as Meta;

const Template: Story<ISelectDialogProps> = (args) => <SelecetDialog {...args} />;

export const Default = Template.bind({
});
Default.args = {
    selectDialogTitle: 'SelectDialog',
    isLoadingOKButton: false,
    isSearchLoading: false,
    title: 'SelectDialog',
    isNeedConfirm: true,
    isSearchable: true,
    multiSelect: true,
    selectedItems: [],
    isVisible: true,
    emptyContent: () => {
        return <Text>
            merhaba
        </Text>;
    },
    size: 'medium',
    onClose: () => {
        alert("Close Button pressed.");
    },
    onOk: () => {
        alert("onOk Button pressed.");
    },
    onOverlayPress: () => {
        alert("Overlay pressed.");
    },
    setSelectedItems: () => {
    },
    data: [
        {
            __key: "1",
            __title: "İstanbul"
        },
        {
            __key: "2",
            __title: "istanbul"
        },
        {
            __key: "3",
            __title: "Istanbul"
        },
        {
            __key: "4",
            __title: "ıstanbul"
        }
    ]
};