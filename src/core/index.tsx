import {
    ReactNode,
    FC
} from "react";
import IOCoreContext from "./context";
import {
    IOCoreConfig 
} from "./types";
import useStyles from "./style";
import "./style";

type IOCoreProvider = {
    config?: IOCoreConfig;
    children: ReactNode;
};

const IOCoreProvider: FC<IOCoreProvider> = ({
    children,
    config
}) => {
    const classes = useStyles();

    return <IOCoreContext
        config={config}
    >
        <header>
            <link rel="stylesheet" href="https://cdn.isinolacak.com/assets/fonts/iocore.css"/>
        </header>
        <span className={classes.hide}></span>
        {children}
    </IOCoreContext>;
};
export default IOCoreProvider;
