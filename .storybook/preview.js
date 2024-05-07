import {
    IOCore
} from "../src";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Docs',
                [
                    'Intro',
                    'Getting Started',
                    [
                        'Quick Start',
                        'Schemes',
                        'Configs'
                    ]
                ],
                'Components',
                [
                    'Dialog',
                    '*'
                ],
                '*'
            ]
        }
    }
};

export const decorators = [
    (Story) => <IOCore.Provider>
        <Story/>
    </IOCore.Provider>
];
