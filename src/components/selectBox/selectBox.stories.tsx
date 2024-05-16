import {
    Meta,
    Story
} from '@storybook/react';
import {
    SelectBox,
    Text
} from "../index";
import {
    ISelectBoxProps
} from './selectBox.props';

export default {
    title: 'Components/SelectBox',
    component: SelectBox,
    argTypes: {
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
        disabled: {
            control: {
                type: "boolean"
            }
        },
        multiSelect: {
            control: {
                type: "boolean"
            }
        },
        isClick: {
            control: {
                type: "boolean"
            }
        }
    },
} as Meta;

const Template: Story<ISelectBoxProps<{
    title: "Title"
}>> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({
});
Default.args = {
    isLoadingOKButton: false,
    isNeedConfirm: true,
    multiSelect: false,
    isVisible: false,
    disabled: false,
    isClick: false,
    title: 'Title',
    onOverlayPress: () => {
        alert("Overlay pressed.");
    },
    titleExtractor: (item: any) => {
        return <Text>
            {item.__title}
        </Text>;
    },
    keyExtractor: (item: any) => {
        return item.__key;
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
