import {
    useState,
    useRef,
    FC
} from  "react";
import ITextInputProps from "./textInput.props";
import Text from "../text/text";
import {
    ClearIcon,
    EyeClosedIcon,
    EyeOpenedIcon,
    InfoIcon
} from "../../assets/svgr";
import {
    textInputStyler,
    useStyles
} from "./textInput.styles";
import {
    IOCoreTheme
} from "../../../src/core";

const TextInput: FC<ITextInputProps> = ({
    spreadBehaviour = "baseline",
    errorIcon: ErrorIconProp,
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    isError = false,
    onChangeText,
    initialValue,
    placeholder,
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

    const renderPasswordIcon = () => {
        if (!password) {
            return null;
        }

        const PasswordIcon = showPassword ? EyeOpenedIcon : EyeClosedIcon;

        return (
            <div
                onClick={togglePasswordVisibility}
            >
                <PasswordIcon color={colors.hideBody} size={24} />
            </div>
        );
    };

    const renderTitle = () => {
        return <Text
            color={isError ? "error" : titleProps.color}
            variant="body-bold"
        >
            {finalTitle}
        </Text>;
    };

    const renderErrorText = () => {
        if(!errorText) {
            return null;
        }

        return <div>
            {
                ErrorIconProp
                    ?
                    <ErrorIconProp/> 
                    :
                    <InfoIcon
                        color={isError ? colors.error : colors.greyBase}
                        size={15}
                    />
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
            type={showPassword ? "text" : "password"}
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
            placeholder={placeholder}
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
        <div
            className={[
                classes.content
            ].join(" ")}
        >
            <Text
                {...titleProps}
            >
                {finalTitle}
            </Text>
            {renderTitle()}
            {renderInput()}
            {renderPasswordIcon()}
        </div>
        {renderErrorText()}
        {renderClearButton()}
    </div>;
};
export default TextInput;