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
        }
    }
} as Meta;

const Template: Story<ISelectDialogProps> = (args) => <SelecetDialog {...args}/>;

export const Default = Template.bind({
});
Default.args = {
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
            __title: "Item 1"
        },
        {
            __key: "2",
            __title: "Item 2"
        },
        {
            __key: "3",
            __title: "Item 3"
        },
        {
            __key: "4",
            __title: "Item 4"
        },
        {
            __key: "5",
            __title: "Item 5"
        },
        {
            __key: "6",
            __title: "Item 6"
        },
        {
            __key: "7",
            __title: "Item 7"
        },
        {
            __key: "8",
            __title: "Item 8"
        },
        {
            __key: "9",
            __title: "Item 9"
        },
        {
            __key: "10",
            __title: "Item 10"
        }
    ]
};