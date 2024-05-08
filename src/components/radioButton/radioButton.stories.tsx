import React from 'react';
import {
    Meta, Story 
} from '@storybook/react';
import {
    IRadioButtonProps 
} from './radioButton.props';
import RadioButton from './radioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        onChange: {
            action: 'changed' 
        },
    },
} as Meta;

const Template: Story<IRadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: 'Option 1',
};

export const Selected = Template.bind({
});
Selected.args = {
    title: 'Option 2',
    isSelected: true,
};

export const Disabled = Template.bind({
});
Disabled.args = {
    title: 'Option 3',
    disabled: true,
};
