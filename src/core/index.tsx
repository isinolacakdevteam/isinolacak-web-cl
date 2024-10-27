import {
    ReactNode
} from "react";
import Context from "./context";
import useStyles from "./stylesheet";
import "./stylesheet";

class IOCoreInheritance {
    IOCoreContext: Context;

    constructor() {
        this.IOCoreContext = new Context({
            key: "IOCore"
        });
    }

    Provider = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const IOCoreContext = this.IOCoreContext;

        const classes = useStyles();

        return <IOCoreContext.Provider>
            <header>
                <link rel="stylesheet" href="https://cdn.isinolacak.com/assets/fonts/iocore.css"/>
            </header>
            <span className={classes.hide}></span>
            {children}
        </IOCoreContext.Provider>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
