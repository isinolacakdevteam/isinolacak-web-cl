import {
    useState,
    useRef,
    FC
} from  "react";
import {
    dateTimePickerStyler,
    useStyles
} from "./dateTimePicker.styles";
import IDateTimePickerProps, {
    DateTimePickerTypes 
} from "./dateTimePicker.props";
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

const DateTimePicker: FC<IDateTimePickerProps> = ({
    spreadBehaviour = "baseline",
    infoIcon: InfoIconProp,
    icon: IconComponentProp,
    iconDirection = "left",
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    inputType = "date",
    disabled = false,
    isError = false,
    onChangeText,
    initialValue,
    placeholder,
    iconOnClick,
    inputClass,
    className,
    infoText,
    password,
    style,
    title,
    ...props
}) => {
    if(initialValue && String(new Date(initialValue)) == "Invalid Date") {
        console.error("Invalid Date Format provided for initialValue to Date Time Picker Component.");
    }

    const classes = useStyles();

    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const inputRef = useRef<HTMLInputElement & {
        showPicker: () => void;
            }>(null);

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
        container,
        input,
        clear
    } = dateTimePickerStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        typography,
        isFocused,
        disabled,
        radiuses,
        infoText,
        borders,
        isError,
        colors,
        spaces,
        value
    });

    const onFocus = () => {
        if(onFocusProp) onFocusProp();
        if(inputRef && inputRef.current && inputRef.current.showPicker) inputRef.current?.showPicker();
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
            style={passwordIcon}
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

    const renderInfoText = () => {
        if(!infoText) {
            return null;
        }

        return <div className={classes.infoText}
            style={infoTextContainer}
        >
            {InfoIconProp ? 
                <div
                    style={infoIconStyler} 
                >
                    <InfoIconProp/>
                </div>: <div
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
        if(!finalTitle) {
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
        const inputTypes: Array<DateTimePickerTypes> = [
            "datetime-local",
            "month",
            "week",
            "time",
            "date"
        ];

        const type = inputTypes.indexOf(inputType) === -1 ? "date" : inputType;

        return <input
            {...props}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
            value={value}
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
export default DateTimePicker;
