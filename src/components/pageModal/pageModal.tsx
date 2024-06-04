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
import StepManager from "../stepManager/stepManager";
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
                    ...contentStyle
                }}
            >
                {/* {content} */}
                <div
                    style={{
                        width: 1000,
                        height: 1000,
                        backgroundColor: "wheat"
                    }}/>
                <StepManager
                    isShowFinishSheet={false}
                    isShowHeader={true}
                    data={[]}
                    components={[
                        () => <div
                            style={{
                                display:"flex",
                                flexDirection:"column"
                            }}
                        >
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                            <Text>
                                    denene
                            </Text>
                        </div>,
                        () => <div
                            style={{
                                display:"flex",
                                flexDirection:"column"
                            }}
                        >
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                            <Text>
                                denene
                            </Text>
                        </div>
                    ]}
                    onFinish={()=> {}}
                />
            </div>
        </div>
    </Portal>;
};
export default PageModal;
