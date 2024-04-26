import {
    addons
} from '@storybook/addons';
import iocoreThemeForStorybook from './iocoreThemeForStorybook';
import favicon from './logo.ico';

addons.setConfig({
    theme: iocoreThemeForStorybook
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
