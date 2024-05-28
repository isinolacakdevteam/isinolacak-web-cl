import {
    FC
} from "react";
import useStyles, {
    modalPageStyler
} from "./pageModal.style";
import {
    Portal
} from "../../packages/react-portalize/src/index";
import {
    IOCoreTheme
} from "../../core";
import IPageModalProps from "./pageModal.props";
import SelectBox from "../selectBox/selectBox";
import TextInput from "../textInput/textInput";
import Text from "../text/text";

const PageModal: FC<IPageModalProps> = ({
    contentContainerStyle,
    isVisible = false,
    onOverlayPress,
    content
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const styles = useStyles();

    const {
        content: contentStyle,
        container
    } = modalPageStyler({
        contentContainerStyle,
        radiuses,
        spaces,
        colors
    });

    if(!isVisible) {
        return null;
    }

    const renderTest = () => {
        return <div
            style={{
                backgroundColor: colors.layer1,
                alignContent: "center",
                flexDirection: "row",
                display: "flex",
                padding: 50,
                gap: 5

            }}
        >
            <TextInput
                spreadBehaviour="free"
                title="deneme"
            />
            <SelectBox
                keyExtractor={(e) => e.id}
                titleExtractor={(e) => e.e}
                spreadBehaviour='stretch'
                inputTitle=""
                title=""
                isNeedConfirm={true}
                multiSelect={false}
                disabled={false}
                style={{
                    width: "10rem"
                }}
                onOk={({
                    selectedItems,
                    closeSheet,
                    onSuccess
                }) => {

                    closeSheet();
                    onSuccess();
                }}
                data={[
                    {
                        e: "1",
                        id: "1"
                    },
                    {
                        e: "2",
                        id: "2"
                    }
                ]}
            />
            <SelectBox
                keyExtractor={(e) => e.id}
                titleExtractor={(e) => e.e}
                spreadBehaviour='baseline'
                //@ts-ignore // TODO: will be fixed at the web cl
                onOverlayPress={() => {}}
                inputTitle=""
                title="Area Code"
                isNeedConfirm={true}
                multiSelect={false}
                disabled={false}
                onOk={({
                    selectedItems,
                    closeSheet,
                    onSuccess
                }) => {

                    closeSheet();
                    onSuccess();
                }}
                data={[
                    {
                        e: "1",
                        id: "1"
                    },
                    {
                        e: "2",
                        id: "2"
                    }
                ]}
            />
        </div>;
    };

    return <Portal>
        <div
            className={styles.container}
            style={{
                ...container
            }}
        >
            <div
                className={styles.overlay}
                onClick={() => {
                    if(onOverlayPress) onOverlayPress();
                }}
            >
                <div className={styles.overlayTouchableArea}/>
            </div>
            <div
                className={styles.contentContainer}
                style={{
                    ...container,
                    ...contentStyle,
                    padding: 50
                }}
            >
                {renderTest()}
            </div>
        </div>
    </Portal>;
};
export default PageModal;
