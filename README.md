<p align="center">
    <img
        width="450"
        height="450"
        src="https://cdn.isinolacak.com/assets/images/darklogo.png"
    />
    <br/>
    <span style="font-size: 24px; font-weight: bold; text-align: center; width: 100%;">Olacak Bilgi Teknolojileri | IOCore Web - Component Library</span>
    <br/>
    <br/>
</p>

### Documentation

Please visit for docs: [IOCore Web](https://iocore.isinolacak.com/web)

### Dependencies

If you install with yarn these packages will already be installed.

- react-jss

### Base Library

-   The library is exporting sample base components to be used in react project you can test it like this :
    -   NPM: `npm install isinolacak-web --save`
    -   YARN: `yarn add isinolacak-web`

```js
import {
    IOCoreProvider,
    useIOCoreTheme,
    Button
} from 'isinolacak-web';

const Home = () => {
    const {
        activeTheme
    } = useIOCoreTheme();

    return <div>
        Welcome to Home Page. Your theme is: {activeTheme}
    </div>;
};

const App = () => {
    return <IOCoreProvider>
        <div className="App">
            <Button title="hi" />
        </div>
    </IOCoreProvider>;
}
```
