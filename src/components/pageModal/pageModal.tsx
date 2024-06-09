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
import RadioButton from "../radioButton/radioButton";

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
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "wheat"
                    }}
                >
                    <div
                        style={{
                            display:"flex",
                            flexDirection: "row"
                        }}
                    >
                        <RadioButton
                            isSelected
                            title="Deneme"
                        />
                        <RadioButton
                            title="Deneme"
                        />
                    </div>

                </div>
            </div>
        </div>
    </Portal>;
};
export default PageModal;
