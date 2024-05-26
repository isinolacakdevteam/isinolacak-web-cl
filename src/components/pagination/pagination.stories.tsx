import {
    Meta,
    Story
} from '@storybook/react';
import Pagination from './pagination';
import IPaginationProps from './pagination.props';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCore Pagination page."
            }
        }
    },
    argTypes: {
    }
} as Meta;

const Template: Story<IPaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({
});

Default.args = {
    maxButtonCount: 5,
    selectedIndex: 1,
    itemPerPage: 20,
    itemNumber: 600
};

