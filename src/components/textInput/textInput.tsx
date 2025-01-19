import {
    ForwardRefRenderFunction,
    useImperativeHandle,
    forwardRef,
    useState,
    useRef
} from "react";
import {
    textInputStyler,
    useStyles
} from "./textInput.styles";
import ITextInputProps, {
    ITextInputRef
} from "./textInput.props";
import Text from "../text/text";
import {
    EyeOpenedIcon,
    EyeClosedIcon,
    ClearIcon,
    InfoIcon
} from "../../assets/svgr";
import {
    IOCoreTheme
} from "../../../src/core";

interface RefForwardingComponent<T, P = {}> extends ForwardRefRenderFunction<T, P> {};

const TextInput: RefForwardingComponent<ITextInputRef, ITextInputProps> = ({
    spreadBehaviour = "baseline",
    infoIcon: InfoIconProp,
    icon: IconComponentProp,
    iconDirection = "left",
    clearEnabled = false,
    onFocus: onFocusProp,
    containerClassName,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    isError = false,
    onChangeText,
    initialValue,
    placeholder,
    iconOnClick,
    validation,
    inputClass,
    minHeight,
    className,
    infoText,
    password,
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

    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const finalTitle = isRequired ? "* " + title : title;

    const {
        infoTextContainer,
        contentContainer,
        infoIconStyler,
        passwordIcon,
        titleProps,
        iconStyler,
        container,
        input,
        clear
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        iconDirection,
        typography,
        isFocused,
        minHeight,
        disabled,
        radiuses,
        infoText,
        borders,
        isError,
        colors,
        spaces,
        value,
        title
    });

    useImperativeHandle(
        ref,
        () => ({
            cleanText,
            updateValue
        }),
        []
    );

    const cleanText = () => {
        setValue("");
    };
    
    const updateValue = (text: string) => {
        setValue(text);
    };

    const onFocus = () => {
        if(onFocusProp) onFocusProp();
        setIsFocused(true);
    };

    const onBlur = () => {
        if(onBlurProp) onBlurProp();
        setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const renderClearButton = () => {
        if(disabled) {
            return null;
        }

        if(!clearEnabled || !value) {
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
                color={colors.grey200}
                size={18}
            />
        </div>;
    };

    const renderIcon = (direction: "left" | "right") => {
        if (direction !== iconDirection) {
            return null;
        }

        if (!IconComponentProp) {
            return null;
        }

        return <div
            className={classes.iconProps}
            style={iconStyler}
            onClick={iconOnClick}
        >
            <IconComponentProp
                color={colors.primary}
                size={24}
            />
        </div>;
    };

    const renderPasswordIcon = () => {
        if (!password) {
            return null;
        }

        return <div
            style={passwordIcon}
            className={classes.passwordIconContainer}
        >
            <div
                onClick={togglePasswordVisibility}
            >
                {showPassword ?
                    <EyeOpenedIcon color={colors.hideBody} size={18} /> :
                    <EyeClosedIcon color={colors.hideBody} size={18} />
                }
            </div>
        </div>;
    };

    const renderInfoText = () => {
        if (!infoText) {
            return null;
        }

        return <div className={classes.infoText}
            style={infoTextContainer}
        >
            {InfoIconProp ?
                <div
                    style={infoIconStyler}
                >
                    <InfoIconProp />
                </div> : <div
                    style={infoIconStyler}
                >
                    <InfoIcon
                        color={isError ? colors.error : colors.textGrey}
                        size={15}
                    />
                </div>
            }
            <Text
                color={isError ? "error" : "textGrey"}
                variant="body3-regular"
            >
                {infoText}
            </Text>
        </div>;
    };

    const renderTitle = () => {
        if (!finalTitle) {
            return null;
        }

        return <Text
            {...titleProps}
            variant={titleProps.variant}
            color={isError ? "error" : titleProps.color}
        >
            {finalTitle}
        </Text>;
    };

    const renderInput = () => {
        return <input
            {...props}
            type={password && !showPassword ? "password" : "text"}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
            value={value}
            onChange={(e) => {
                const inputValue = e.target.value;

                if (inputValue === "") {
                    setValue("");
                    onChangeText && onChangeText("");
                    return;
                }

                if (validation) {
                    if (validation(inputValue)) {
                        setValue(inputValue);
                        onChangeText && onChangeText(inputValue);
                    }
                } else {
                    setValue(inputValue);
                    onChangeText && onChangeText(inputValue);
                }
            }}
            className={[
                classes.input,
                inputClass
            ].join(" ")}
            style={{
                ...input
            }}
        />;
    };

    return <div
        className={containerClassName}
        onClick={() => {
            inputRef.current?.focus();
        }}
        style={{
            ...style,
            ...container
        }}
    >
        <div
            className={[
                classes.container,
                className
            ].join(" ")}
            style={contentContainer}
        >
            {renderIcon("left")}
            <div
                className={classes.content}
            >
                {renderTitle()}
                {renderInput()}
            </div>
            {renderIcon("right")}
            {renderPasswordIcon()}
            {renderClearButton()}
        </div>
        {renderInfoText()}
    </div>;
};
export default forwardRef(TextInput);
