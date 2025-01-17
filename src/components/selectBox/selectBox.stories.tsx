import {
    Meta,
    Story
} from '@storybook/react';
import {
    SelectBox
} from "../index";
import {
    ISelectBoxProps,
    ISelectBoxRefProps
} from './selectBox.props';
import {
    useRef
} from 'react';

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
        },
        isError: {
            control: {
                type: "boolean"
            }
        },
        infoText: {
            control: "text"
        }
    },
} as Meta;

const MOCK_DATA = [
    {
        id: "34534w534ste",
        title: "istanbul"
    },
    {
        id: "34534w^356574534ste",
        title: "Istanbul"
    },
    {
        id: "34534568443w534ste",
        title: "İstanbul"
    },
    {
        id: "34534w5547)W(+=987634ste",
        title: "ıstanbul"
    }
];

const Template: Story<ISelectBoxProps<{
    title: string;
    id: string;
}>> = (args) => {
    const rrr = useRef<ISelectBoxRefProps<typeof MOCK_DATA[0]>>(null);

    return <div>
        <SelectBox {...args} ref={rrr} />
    </div>;
};

export const Default = Template.bind({
});
Default.args = {
    selectDialogTitle: "DENEME",
    isLoadingOKButton: false,
    isNeedConfirm: true,
    isSearchable: true,
    multiSelect: false,
    isVisible: false,
    disabled: false,
    isClick: false,
    title: 'Title',
    titleExtractor: (item: {
        title: string;
        id: string;
    }) => {
        return item.title;
    },
    keyExtractor: (item: any) => {
        return item.id;
    },
    data: MOCK_DATA
};
