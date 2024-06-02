import {
    CSSProperties,
    ReactNode
} from "react";
import {
    IOCoreTranslationType,
    IOCoreColorsType
} from "../../types/index";
import IStateCardProps from "../stateCard/stateCard.props";
import {
    DialogStylerParams
} from "../dialog/dialog.props";
import IHeaderProps from "../header/header.props";

interface IStepManagerType<T extends ReactNode, K extends Record<any, any>> {
    finishButtonLocaleKey?: keyof IOCoreTranslationType;
    onUpdateStepData?: (newStepState: K & any) => void;
    nextButtonLocaleKey?: keyof IOCoreTranslationType;
    indicatorContainerStyle?: CSSProperties;
    indicatorFilledColor?: keyof IOCoreColorsType;
    onGoBack?: (isGoBackForPage: boolean) => void;
    indicatorEmptyColor?: keyof IOCoreColorsType;
    finishSheetProps?: DialogStylerParams;
    contentContainerStyle?: CSSProperties;
    isUseRenderBottom?: boolean;
    renderFinish?: (props: {
        onUpdateStepData: (newStepState: any) => void,
        response: Array<K>;
        stepIndex: number;
        stepData: K;
    }) => ReactNode;
    isShowStepIndicator?: boolean;
    finishProps?: IStateCardProps;
    isShowFinishSheet?: boolean;
    headerProps?: IHeaderProps;
    isShowHeader?: boolean;
    onNextStep?: (props: {
        onUpdateStepData: (newStepState: any) => void,
        stepIndex: number;
        stepData: K;
    }) => void;
    onFinish?: (props: {
        onUpdateStepData: (newStepState: any) => void,
        response: Array<K>;
        stepIndex: number;
        stepData: K;
    }) => void;
    components: Array<(props: {
        onUpdateStepData: (newStepState: any) => void,
        goNext: () => void;
        stepIndex: number;
        stepData: K;
    }) => T>;
    style?: CSSProperties;
    data: Array<K>;
    renderBottom?: (props: {
        onUpdateStepData: (newStepState: any) => void,
        goNext: () => void;
        stepIndex: number;
        stepData: K;
    }) => ReactNode;
};

export type StepManagerStylerParams = {
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    components: Array<any>;
};

export type StepManagerStylerResult = {
    backButtonContainer: CSSProperties;
    bottomContainer: CSSProperties;
    containerStyler: CSSProperties;
    pageContainer: CSSProperties;
    headerStyler: CSSProperties;
};

export default IStepManagerType;
