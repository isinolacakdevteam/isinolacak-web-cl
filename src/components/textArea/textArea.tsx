import {
    ForwardRefRenderFunction,
    useImperativeHandle,
    forwardRef,
    useState,
    useRef
} from  "react";
import ITextAreaProps, {
    ITextAreaRef
} from "./textArea.props";
import useStyles, {
    textAreaStyler
} from "./textArea.styles";
import Text from "../text/text";
import {
    ClearIcon
} from "../../assets/svgr";
import {
    IOCoreTheme
} from "../../core";

interface RefForwardingComponent <T, P = {}> extends ForwardRefRenderFunction<T, P> {};

const TextArea: RefForwardingComponent<ITextAreaRef, ITextAreaProps> = ({
    spreadBehaviour = "baseline",
    clearEnabled = false,
    onFocus: onFocusProp,
    isTextLimit = false,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    isError = false,
    textLimit = 0,
    infoTextProps,
    initialValue,
    onChangeText,
    placeholder,
    inputClass,
    className,
    infoText,
    style,
    title,
    ...props
}, ref) => {
    const classes = useStyles();

    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const inputTextAreaRef = useRef<HTMLTextAreaElement>(null);

    const onClickContainer = () => {
        inputTextAreaRef.current?.focus();
    };

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const finalTitle = isRequired ? "* " + title : title;

    const {
        contentContainerStyle,
        titleProps,
        container,
        input,
        clear
    } = textAreaStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        typography,
        isFocused,
        disabled,
        radiuses,
        isError,
        borders,
        colors,
        spaces,
        value
    });

    useImperativeHandle(
        ref,
        () => ({
            cleanText
        }),
        []
    );

    const cleanText = () => {
        setValue("");
    };

    const onFocus = () => {
        setIsFocused(true);
        if(onFocusProp) onFocusProp();
    };

    const onBlur = () => {
        setIsFocused(false);
        if(onBlurProp) onBlurProp();
    };

    const renderClearButton = () => {
        if(disabled) {
            return null;
        }
    
        if(!clearEnabled) {
            return null;
        }

        return <div
            onClick={() => {
                if(onChangeText) {
                    onChangeText("");
                }
                setValue("");
            }}
            className={classes.clearButton}
            style={{
                ...clear
            }}
        >
            <ClearIcon
                color={colors.hideBody}
                size={24}
            />
        </div>;
    };

    const renderInput = () => {
        return <textarea
            {...props}
            ref={inputTextAreaRef}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => {
                if(onChangeText) onChangeText(e.target.value);
                setValue(e.target.value);
            }}
            placeholder={placeholder}
            value={value}
            className={[
                classes.multilineInput,
                inputClass
            ].join(" ")}
            style={{
                ...input
            }}
        />;
    };

    const renderCounter = () => {
        if(!isTextLimit && !textLimit && textLimit < 1) {
            return null;
        } 

        return <Text
            variant="body3-regular"
            color="textSecondary"
            style={{

                display: "flex",
                alignSelf: "flex-end"
            }}
        >
            {value.length} / {textLimit}
        </Text>;
    };

    const renderInfoText = () => {
        if(!infoText) {
            return null;
        }

        const customStyle = infoTextProps && infoTextProps.style ? infoTextProps.style : {
        };

        return <Text
            {...infoTextProps}
            style={{
                marginTop: spaces.content,
                ...customStyle
            }}
        >
            {infoText}
        </Text>;
    };

    return <div
        className={[
            classes.container,
            className
        ].join(" ")}
        onClick={onClickContainer}
        style={{
            ...style,
            ...container
        }}
    >
        <div
            className={classes.contentContainer}
            style={{
                ...contentContainerStyle
            }}
        >
            <div
                className={[
                    classes.content
                ].join(" ")}
            >
                <Text
                    {...titleProps}
                    color={isError ? "error" : titleProps.color}
                >
                    {finalTitle}
                </Text>
                {renderInput()}
                {renderCounter()}
            </div>
            {renderClearButton()}
        </div>
        {renderInfoText()}
    </div>;
};
export default forwardRef(TextArea);
