import {
    Story,
    Meta
} from "@storybook/react";
import IDialogProps from "./dialog.props";
import Dialog from "./dialog";
import {
    IOCoreModal
} from "../../core";

export default {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component: "Welcome to IOCORE Dialog page."
            }
        }
    },
    argTypes: {
        isVisible: {
            control: "boolean"
        },
        variant: {
            control: {
                type: "select",
                options: [
                    "yes-no",
                    "info",
                    "ok"
                ]
            }
        },
        title: {
            control: {
                type: "text"
            }
        },
        content: {
            control: {
                type: "text"
            }
        }
    }
} as Meta;

const Template: Story<IDialogProps> = (args) => {
    return <button
        onClick={() => {
            IOCoreModal.open({
                isVisible: true,
                key: "x1243",
                type: "dialog",
                title: "Test Başlığı",
                content: "Test Metni",
                variant: "yes-no",
                onOverlayPress: () => {
                    IOCoreModal.close({
                        key: "x1243"
                    });
                },
                primaryButtonProps: {
                    onClick: () => {
                        IOCoreModal.close({
                            key: "x1243"
                        });
                    }
                },
                secondaryButtonProps: {
                    onClick: () => {
                        IOCoreModal.close({
                            key: "x1243"
                        });
                    }
                }
            });
        }}
    >
        Dialog Aç
    </button>;
};

export const Default = Template.bind({
});
Default.args = {
    title: "Alert!",
    content: "Hello world!.",
    isVisible: true,
    variant: "info",
    onOverlayPress: () => {
        alert("Overlay pressed.");
    },
    primaryButtonProps: {
        onClick: () => {
            alert("Primary button pressed.");
        }
    },
    secondaryButtonProps: {
        onClick: () => {
            alert("Secondary button pressed.");
        }
    } 
};
