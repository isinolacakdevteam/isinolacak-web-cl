import React from 'react';
import {
    Meta,
    Story
} from '@storybook/react';
import RadioButton from './radioButton';
import {
    IRadioButtonProps
} from './radioButton.props';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        onChange: {
            action: 'changed' 
        },
        isSelected: {
            control: "boolean"
        },
        isError: {
            control: "boolean"
        },
        infoText: {
            control: "text"
        },
        direction: {
            control: {
                type: "select",
                options: [
                    "leftToRight",
                    "rightToLeft"
                ]
            }
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

const Template: Story<IRadioButtonProps> = (args) => <div
    style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: 20
    }}
>
    <RadioButton {...args} />
</div>;

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

export const Direction = Template.bind({
});
Direction.args = {
    title: 'Direction',
    direction: "rightToLeft"
};

export const Disabled = Template.bind({
});
Disabled.args = {
    title: 'Option 3',
    disabled: true,
};
