import {
    CSSProperties,
    ReactNode
} from "react";
import {
    IOCoreTranslationType,
    IIOCoreIconPropsType,
    IOCoreColorsType,
    IOCoreIconType
} from "../../types/index";
import IStateCardProps from "../stateCard/stateCard.props";
import {
    DialogStylerParams
} from "../dialog/dialog.props";

interface IStepManagerType<T extends ReactNode, K extends Record<any, any>> {
    finishButtonLocaleKey?: keyof IOCoreTranslationType;
    onUpdateStepData?: (newStepState: K & any) => void;
    nextButtonLocaleKey?: keyof IOCoreTranslationType;
    indicatorContainerStyle?: CSSProperties | CSSProperties[];
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
    contentColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    icon?: IOCoreIconType;
    isAction?: boolean;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type ContentProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style?: CSSProperties;
};

export type IconProps = IIOCoreIconPropsType & {
    style: CSSProperties;
};

export type StepManagerStylerResult = {
    iconProps: IIOCoreIconPropsType;
    contentProps: ContentProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export default IStepManagerType;
