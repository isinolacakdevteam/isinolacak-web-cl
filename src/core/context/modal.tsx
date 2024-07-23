import {
    ReactNode
} from "react";
import IOCoreContext, {
    ConfigType
} from "ncore-context";
import {
    ModalContextType,
    ModalDataType
} from "../../types";
import Dialog from "../../components/dialog/dialog";

const isDialog = (object: any): object is ModalDataType["type"] => {
    return 'dialog' in object;
};

class ModalContextInheritance extends IOCoreContext<ModalContextType, ConfigType<ModalContextType>> {
    constructor(config: ConfigType<ModalContextType>) {
        super({
            close: () => {},
            open: () => {},
            data: []
        }, config);

        this.setState({
            data: []
        });
    }

    open = (modalData: ModalDataType) => {
        let _state = this.state;
        
        _state.data.push(modalData);
    };

    close = ({
        index,
        key
    }: {
        index?: number;
        key?: string;
    }) => {
        if(key) {
            const keyIndex = this.state.data.findIndex((modal) => modal.key === key);
            if(keyIndex !== -1) {
                this.state.data.splice(keyIndex, 1);
                this.setState(this.state);
            }
            return;
        }

        if(index !== undefined) {
            this.state.data.splice(index, 1);
            this.setState(this.state);
            return;
        }

        this.state.data.pop();
    };

    renderDialogs = () => {
        if(!this.state || !this.state.data) {
            return null;
        }

        return this.state.data.map(modal => {
            if(!isDialog(modal.type)) {
                return null;
            }

            return <Dialog
                {...modal}
            />;
        });
    };

    Render = ({
        children
    }: {
        children: ReactNode
    }) => {
        const Provider = this.Provider;

        return <Provider>
            {children}
            {this.renderDialogs()}
        </Provider>;
    };
};
export default ModalContextInheritance;
