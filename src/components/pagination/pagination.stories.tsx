import React, {
    useState
} from 'react';
import {
    Meta,
    Story
} from '@storybook/react';
import Pagination from './pagination';
import IPaginationProps from './pagination.props';

const [page, setPage] = useState(1);

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
    maxButtonCount: 5,
    selectedIndex:page,
    onSelect: (_, index) => {
        setPage(_);
    },
    onRight:(index) => {
        if (page !== 100) {
            setPage(index);
        }
    },
    onLeft:(index) => {
        if (page !== 1) {
            setPage(index);
        }
    },
    itemPerPage: 20,
    itemNumber: 600 
});

Default.args = {
    
};

