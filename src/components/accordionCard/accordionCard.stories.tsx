import {
    Story,
    Meta
} from "@storybook/react";
import AccordionCard from "./accordionCard";
import IAccordionCard from "./accordionCard.props";
import Button from "../button/button";

export default {
    title: "Components/AccordionCard",
    component: AccordionCard,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE AccordionCard page."
            }
        }
    },
    argTypes: {
        argTypes: {
            title: {
                control: "text"
            },
        }
    },
} as Meta;

const Template: Story<IAccordionCard> = (args) => <AccordionCard {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Accordion Card",
    content: () => <Button
        onClick={() => { }}
        title="Deneme"
    />,
    isVisible: true
};