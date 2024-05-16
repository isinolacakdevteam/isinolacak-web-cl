import React, {
    ReactNode,
    useEffect,
    useState
} from "react";
import {
    ChevronLeftIcon
} from "../../assets/svg";
import IStepManagerType from "./stepManager.props";
import useStyles from "./stepManager.styles";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core/index";
import Button from "../button/button";
import StateCard from "../stateCard/stateCard";
import Dialog from "../dialog/dialog";

const StepManager = <T extends ReactNode, K extends Record<any, any>>({
    onUpdateStepData: onUpdateStepDataProp,
    finishButtonLocaleKey = "finish",
    indicatorFilledColor = "primary",
    indicatorEmptyColor = "black100",
    renderBottom: renderBottomProp,
    nextButtonLocaleKey = "next",
    isShowStepIndicator = true,
    isShowFinishSheet = false,
    isUseRenderBottom = true,
    indicatorContainerStyle,
    contentContainerStyle,
    isShowHeader = true,
    finishSheetProps,
    renderFinish,
    headerProps,
    finishProps,
    onNextStep,
    components,
    onGoBack,
    onFinish,
    style,
    data
}: IStepManagerType<T, K>) => {
    const classes = useStyles();

    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const [fDialogVisible, setFDialogVisible] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

    const isFinishStep = stepIndex === components.length - 1;

    useEffect(() => {
        if(stepIndex !== 0) {
            if(onNextStep) onNextStep({
                stepData: data[stepIndex],
                stepIndex: stepIndex,
                onUpdateStepData
            });
        }
    }, [stepIndex]);

    const onUpdateStepData = (newStepState: any) => {
        if(onUpdateStepDataProp) onUpdateStepDataProp({
            ...data[stepIndex],
            ...newStepState
        });
    };

    const onGoNext = () => {
        if(isFinishStep) {
            setFDialogVisible(true);
            if(onFinish) onFinish({
                stepData: data[stepIndex],
                stepIndex: stepIndex,
                onUpdateStepData,
                response: data
            });
        } else {
            setStepIndex(stepIndex + 1);
        }
    };

    const renderStepIndicator = () => {
        if(!isShowStepIndicator) {
            return null;
        }

        return <div
            className={[
                classes.container
            ].join(" ")}
            style={{
                ...style
            }}
        >
            {
                components.map((_, index) => {
                    return <div
                        /* style={[
                            stylesheet.indicatorObject,
                            {
                                backgroundColor: index <= stepIndex ? colors[indicatorFilledColor] : colors[indicatorEmptyColor],
                                marginRight: index === components.length - 1 ? 0 : spaces.content / 4,
                                borderBottomRightRadius: index === components.length - 1 ? 50 : 0,
                                borderTopRightRadius: index === components.length - 1 ? 50 : 0,
                                marginLeft: index === 0 ? 0 : spaces.content / 4,
                                borderBottomLeftRadius: index === 0 ? 50 : 0,
                                borderTopLeftRadius: index === 0 ? 50 : 0
                            }
                        ]} */
                    />;
                })
            }
        </div>;
    };

    const renderComponent = () => {
        return <div
            /* style={{
                ...classes.componentContainer,
                ...contentContainerStyle
            }} */
        >
            {components[stepIndex]({
                stepData: data[stepIndex],
                stepIndex: stepIndex,
                onUpdateStepData,
                goNext: () => {
                    onGoNext();
                }
            })}
        </div>;
    };

    const renderBottom = () => {
        if(!isUseRenderBottom) {
            return null;
        }

        if(renderBottomProp) {
            return renderBottomProp({
                stepData: data[stepIndex],
                stepIndex: stepIndex,
                onUpdateStepData,
                goNext: () => {
                    onGoNext();
                }
            });
        }

        return <div
            /* style={[
                stylesheet.bottomContainer,
                {
                    padding: spaces.container
                }
            ]} */
        >
            <Button
                title={isFinishStep ? localize(finishButtonLocaleKey) : localize(nextButtonLocaleKey)}
                spreadBehaviour="stretch"
                size="medium"
                onClick={() => {
                    onGoNext();
                }}
            />
        </div>;
    };

    const renderFinishSheetComponent = () => {
        if(renderFinish) {
            return renderFinish({
                stepData: data[stepIndex],
                stepIndex: stepIndex,
                onUpdateStepData,
                response: data
            });
        }

        return <StateCard
            title={localize("finish")}
            content={localize("finish")}
            {...finishProps}
        />;
    };

    const renderFinishSheet = () => {
        if(!isShowFinishSheet) {
            return null;
        }

        return <Dialog
            isVisible={fDialogVisible}
            {...finishSheetProps}
        >
            <div>
                {renderFinishSheetComponent()}
            </div>
        </Dialog>;
    };

    const renderHeader = () => {
        if(!isShowHeader) {
            return null;
        }

        return <Header
            {...headerProps}
            headerLeft={headerProps && headerProps.headerLeft ? headerProps.headerLeft : () => {
                return <div
                    onClick={() => {
                        if(stepIndex === 0) {
                            if(onGoBack) onGoBack(true);
                            return;
                        }

                        setStepIndex(stepIndex - 1);
                        if(onGoBack) onGoBack(false);
                    }}
                    /* style={[
                        stylesheet.backButtonContainer,
                        {
                            borderColor: colors.stroke
                        }
                    ]} */
                >
                    <ChevronLeftIcon
                        color={colors.textSecondary}
                    />
                </div>;
            }}
            /* style={{
                ...stylesheet.header,
                borderBottomColor: colors.stroke,
                marginBottom: spaces.container
            }} */
        />;
    };

    return <div
        /* style={[
            stylesheet.container,
            {
                backgroundColor: colors.layer1
            },
            style
        ]} */
    >
        {renderHeader()}
        {renderStepIndicator()}
        {renderComponent()}
        {renderBottom()}
        {renderFinishSheet()}
    </div>;
};
export default StepManager;
