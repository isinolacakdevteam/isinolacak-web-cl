import {
    ReactNode,
    FC
} from "react";
import Context from "./context";
import {
    Host 
} from "../packages/react-portalize/src/Host";
import useStyles from "./stylesheet";
import "./stylesheet";

class IOCoreInheritance {
    IOCoreContext;

    constructor() {
        this.IOCoreContext = new Context({
            key: "IOCore"
        });
    }

    ContextApi: FC = ({
        //@ts-ignore
        children
    }) => {
        return <Host>
            {children}
        </Host>;
    };

    Provider = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const IOCoreContext = this.IOCoreContext;

        const classes = useStyles();
        
        //@ts-ignore
        return <IOCoreContext.Provider>
            {/* @ts-ignore */}
            <this.ContextApi>
                <header>
                    <link rel="stylesheet" href="https://cdn.isinolacak.com/assets/fonts/iocore.css"/>
                </header>
                <span className={classes.hide}></span>
                {children}
            </this.ContextApi>
        </IOCoreContext.Provider>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
