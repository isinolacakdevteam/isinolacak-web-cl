import {
    CSSProperties,
    useState,
    useRef,
    FC
} from  "react";
import ITextAreaProps, {
    TextAreaStylerParams,
    TextAreaStylerResult,
    TitleProps
} from "./textArea.props";
import useStyles from "./textArea.styles";
import {
    ClearIcon
} from "../../assets/svgr";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text/text";

const textAreaStyler = ({
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    isError,
    borders,
    colors,
    spaces,
    value
}: TextAreaStylerParams): TextAreaStylerResult => {
    console.log(isError ? colors.error : isFocused ? colors.primary : colors.stroke);
    console.log(borders.line);
    let container: CSSProperties = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.content * 1.5,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line,
        borderStyle: "solid"
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
            marginBottom: spaces.inline
        }
    };

    let input: CSSProperties = {
        backgroundColor: "transparent",
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography["body-regular"],
        lineHeight: undefined,
        height: 60
    };

    let clear: CSSProperties = {
        marginTop: spaces.content * 1.5,
        marginLeft: spaces.content,
        alignSelf: "flex-start"
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop"
        };
        input = {
            backgroundColor: "transparent",
            cursor: "no-drop",
            height: "auto",
            resize: "none"
        };
    }

    return {
        titleProps,
        container,
        input,
        clear
    };
};

const TextArea: FC<ITextAreaProps> = ({
    spreadBehaviour = "baseline",
    clearEnabled = false,
    onFocus: onFocusProp,
    isTextLimit = false,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    isError = false,
    textLimit = 0,
    initialValue,
    onChangeText,
    placeholder,
    inputClass,
    className,
    style,
    title,
    id,
    ...props
}) => {
    const classes = useStyles({
        // disabled
    });

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
    
        if(value?.length === 0) {
            return null;
        }

        return <div
            onClick={() => setValue("")}
            className={[
                classes.clearButton
            ].join(" ")}
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
                alignSelf: "flex-end"
            }}
        >
            {value.length} / {textLimit}
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
    </div>;
};
export default TextArea;
