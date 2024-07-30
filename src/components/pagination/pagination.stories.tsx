import {
    useState
} from "react";
import {
    Story,
    Meta
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

const Template: Story<IPaginationProps> = (args) => {
    const [currentPage, setSelectedIndex] = useState(1);

    return <Pagination
        {...args}
        currentPage={currentPage}
        onSelect={(item) => {
            setSelectedIndex(item.pageNumber);
        }}
    />;
};

export const Default = Template.bind({
});

Default.args = {
    totalDataCount: 600,
    itemPerPage: 20,
    currentPage: 1
};
