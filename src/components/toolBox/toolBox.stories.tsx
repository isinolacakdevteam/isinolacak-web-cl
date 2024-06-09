import {
    Story,
    Meta
} from "@storybook/react";
import ToolBox from "./toolBox";
import IToolBoxProps from "./toolBox.props";
import Text from "../text/text";

export default {
    title: "Components/ToolBox",
    component: ToolBox,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE ToolBox page."
            }
        }
    },
    argTypes: {
        title: {
            control: "text"
        },
        direction: {
            control: "select",
            options: [
                "bottom",
                "right",
                "left",
                "top"
            ]
        }
    }
} as Meta;

const Template: Story<IToolBoxProps> = (args) => <ToolBox {...args} />;

export const Default = Template.bind({
});
Default.args = {
    children: <Text>Click me!</Text>,
    content: <div
        style={{
            display: "flex",
            flexDirection: "column"
        }}
    >
        <div
            style={{
                flexDirection: "row",
                padding: "10px 10px",
                display: "flex",
            }}
        >
            <Text color="textDark" >Random content row</Text>
        </div>
        <div
            style={{
                flexDirection: "row",
                padding: "10px 10px",
                display: "flex"
            }}
        >
            <Text color="textDark" >Random content row</Text>
        </div>
        <div
            style={{
                flexDirection: "row",
                padding: "10px 10px",
                display: "flex"
            }}
        >
            <Text color="textDark" >Random content row</Text>
        </div>
        <div
            style={{
                flexDirection: "row",
                padding: "10px 10px",
                display: "flex"
            }}
        >
            <Text color="textDark" >Random content row</Text>
        </div>
    </div>
};
