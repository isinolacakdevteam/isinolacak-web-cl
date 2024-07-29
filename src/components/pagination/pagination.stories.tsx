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
    const [selectedIndex, setSelectedIndex] = useState(1);

    return <Pagination
        {...args}
        selectedIndex={selectedIndex}
        onSelect={(item) => {
            setSelectedIndex(item.pageNumber);
        }}
    />;
};

export const Default = Template.bind({
});

Default.args = {
    totalDataCount: 600,
    selectedIndex: 1,
    itemPerPage: 20
};
