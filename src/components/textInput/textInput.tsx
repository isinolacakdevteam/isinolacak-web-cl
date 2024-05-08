import {
    useState,
    useRef,
    FC
} from  "react";
import {
    textInputStyler,
    useStyles
} from "./textInput.styles";
import ITextInputProps from "./textInput.props";
import Text from "../text/text";
import {
    IOCoreTheme
} from "../../../src/core";
import {
    EyeOpenedIcon,
    EyeClosedIcon,
    ClearIcon,
    InfoIcon
} from "../../assets/svgr";

const TextInput: FC<ITextInputProps> = ({
    spreadBehaviour = "baseline",
    errorIcon: ErrorIconProp,
    icon: IconComponentProp,
    iconDirection = "left",
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    isError = false,
    onChangeText,
    initialValue,
    placeholder,
    iconOnClick,
    inputClass,
    className,
    errorText,
    password,
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

    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const finalTitle = isRequired ? "* " + title : title;

    const {
        titleProps,
        container,
        input,
        clear
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        typography,
        isFocused,
        disabled,
        radiuses,
        borders,
        isError,
        colors,
        spaces,
        value
    });

    const onFocus = () => {
        if(onFocusProp) onFocusProp();
        setIsInputFocused(true);
        setIsFocused(true);
    };

    const onBlur = () => {
        if(onBlurProp) onBlurProp();
        setIsInputFocused(false);
        setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
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

    const renderIcon = (direction: "left" | "right") => {
        if(direction !== iconDirection) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <div
            className={classes.ıconProps}
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
    
        return<div
            className={classes.passwordIconContainer}
        >
            <div
                onClick={togglePasswordVisibility}
            >
                {showPassword ? 
                    <EyeOpenedIcon color={colors.hideBody} size={24} /> :
                    <EyeClosedIcon color={colors.hideBody} size={24} />
                }
            </div>
        </div>;
    };



    const renderErrorText = () => {
        if(!errorText) {
            return null;
        }

        return <div className={classes.errorText}>
            {ErrorIconProp ? 
                <div
                    style={{
                        marginRight: spaces.content
                    }}
                >
                    <ErrorIconProp
                    /> 
                </div>
                : 
                <div
                    style={{
                        marginRight: spaces.content
                    }} 
                >
                    <InfoIcon
                        color={colors.error}
                        size={15}
                    />
                </div>
            }
            <Text
                color={"error"}
                variant="body3-regular"
            >
                {errorText}
            </Text>
        </div>;
    };

    const renderInput = () => {
        return <input
            type={password && !showPassword ? "password" : "text"}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
            value={value}
            {...props}
            onChange={(e) => {
                if(onChangeText) onChangeText(e.target.value);
                setValue(e.target.value);
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
        className={[
            classes.container,
            className
        ].join(" ")}
        style={{
            ...style,
            ...container
        }}
    >
        {renderIcon("left")}
        <div
            className={[
                classes.content
            ].join(" ")}
        >
            <Text
                {...titleProps}
                color={isError ? "error" : titleProps.color}
                variant={isInputFocused ? "body2-bold" : "body-bold"}
            >
                {finalTitle}
            </Text>
            {renderInput()}
        </div>
        {renderIcon("right")}
        {renderPasswordIcon()}
        {renderClearButton()}
        {renderErrorText()}
    </div>;
};
export default TextInput;
