import {
    ReactNode,
    FC
} from "react";
import Context from "./context";
import {
    Host 
} from "../packages/react-portalize/src/Host";

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
        
        //@ts-ignore
        return <IOCoreContext.Provider>
            {/* @ts-ignore */}
            <this.ContextApi>
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
