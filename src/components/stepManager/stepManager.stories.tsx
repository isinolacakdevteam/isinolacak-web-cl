import {
    Story,
    Meta
} from "@storybook/react";
import Text from "../text/text";
import StepManager from "./stepManager";
import IStepManagerType from "./stepManager.props";

export default {
    title: "Components/StepManager",
    component: StepManager,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE StepManager page."
            }
        }
    },
    argTypes: {
        
    },
} as Meta;

const Template: Story<IStepManagerType> = (args) => <StepManager {...args} />;

export const Default = Template.bind({
});
Default.args = {
    finishButtonLocaleKey: "finish",
    isShowFinishSheet: true,
    data: [
        {
            key: 0
        },
        {
            key: 1
        }
    ],
    components:[
        () => <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
        }}>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>
            <Text> Component 1 </Text>

        </div>,
        () => <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
        }}>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            <Text> Component 2 </Text>
            
        </div>
    ],
    headerProps: {
        title: "Header",
        headerLocation: "center"
    }
};
