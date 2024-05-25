import React from 'react';
import {
    Meta,
    Story
} from '@storybook/react';
import Pagination from './pagination';
import IPaginationProps from './pagination.props';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {
        onChange: {
            action: 'changed' 
        },
        spreadBehaviour: {
            control: {
                type: "select",
                options: [
                    "baseline",
                    "stretch",
                    "free"
                ]
            }
        }
    },
} as Meta;

const Template: Story<IPaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({
});

Default.args = {
    buttonCount: 10,
    selectedIndex: 2
};

