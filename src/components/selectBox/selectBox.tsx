import {
    useEffect,
    useState
} from "react";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import {
    selectBoxStyler,
    useStyles
} from "./selectBox.styles";
import SelectDialog from "../selectDialog/selectDialog";
import Text from "../text/text";
import {
    SelectObjectType
} from "../../types";
import {
    ISelectBoxProps,
    SelectedItem
} from "./selectBox.props";
import {
    ChevronDownIcon,
    InfoIcon
} from "../../assets/svgr";

const SelectBox = <T extends {}>({
    customIcon: CustomIconComponentProp,
    spreadBehaviour = "free",
    renderIcon: RenderIcon,
    infoIcon: InfoIconProp,
    initialSelectedItems,
    multiSelect = false,
    isLoadingOKButton,
    data: initialData,
    disabled = false,
    paginationProps,
    isClick = false,
    isSearchLoading,
    onOverlayPress,
    titleExtractor,
    keyExtractor,
    isNeedConfirm,
    isSearchable,
    emptyContent,
    inputTitle,
    renderItem,
    onSearch,
    infoText,
    onChange,
    isError,
    onClick,
    style,
    title,
    onOk
}: ISelectBoxProps<T>) => {
    const classes = useStyles();

    const [data, setData] = useState<Array<T & SelectObjectType>>([]);
    const [isVisible, setIsVisible] = useState(false);

    const {
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        infoTextContainer,
        infoIconStyler,
        iconContainer,
        contentProps,
        titleProps,
        titleStyle,
        container
    } = selectBoxStyler({
        spreadBehaviour,
        infoText,
        radiuses,
        disabled,
        isClick,
        borders,
        isError,
        spaces,
        colors,
        style
    });

    const {
        localize
    } = IOCoreLocale.useContext();

    const [
        selectedItems,
        setSelectedItems
    ] = useState<Array<SelectedItem> | []>([]);

    useEffect(() => {
        if (!initialData || !initialData.length) {
            return;
        }

        const newData: Array<T & {
            __key: string;
            __title: string;
            __originalIndex: number;
        }> = JSON.parse(JSON.stringify(initialData)).map((item: T, index: number) => {
            return {
                ...item,
                __key: keyExtractor ? keyExtractor(item, index) : null,
                __title: titleExtractor(item, index),
                __originalIndex: index
            };
        });

        setData(newData);

        if (initialSelectedItems && initialSelectedItems.length) {
            const newSelectedItems: Array<T & SelectedItem> = initialSelectedItems.map((item, index) => {
                let originalItem = newData.find(dataItem => {
                    return dataItem.__key === keyExtractor(item, index);
                });

                if (!originalItem) {
                    originalItem = {
                        ...item,
                        __title: titleExtractor(item, index),
                        __key: keyExtractor(item, index),
                        __originalIndex: newData.length
                    };
                    newData.push(originalItem);
                };

                return originalItem;
            });

            setSelectedItems(newSelectedItems);
        }
    }, [initialData]);

    const onClose = () => {
        setIsVisible(false);
    };

    const cleanData = () => {
        let _data = JSON.parse(JSON.stringify(data));

        delete _data.__key;
        delete _data.__originalIndex;
        delete _data.__title;

        return _data;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            variant="body3-regular"
            color={titleProps.color}
            style={titleStyle}
        >
            {title}
        </Text>;
    };

    const renderContent = () => {
        let content = localize("iocore-select-box-no-selection");

        if (selectedItems.length) {
            content = localize("iocore-select-box-n-selected", [
                selectedItems.length
            ]);

            if (selectedItems.length === 1) {
                //@ts-ignore
                content = selectedItems[0].__title;
            }
        }

        if (
            RenderIcon &&
            !renderItem &&
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.__key);

            return <div
                className={classes.customRenderForIcon}
            >
                {RenderIcon({
                    size: typography["body2-regular"]?.fontSize,
                    selectedItems: selectedItems,
                    color: contentProps.color,
                    item: data[selectedIndex],
                    index: selectedIndex,
                    data: data
                })}
            </div>;
        }

        return <div
            className={classes.customRenderForIcon}
        >
            <Text
                color={contentProps.color}
                variant="body2-regular"
            >
                {content}
            </Text>
        </div>;
    };

    const renderIcon = () => {
        if (CustomIconComponentProp) {
            return CustomIconComponentProp();
        }

        return <div
            style={iconContainer}
        >
            <ChevronDownIcon
                color={colors.gray40}
                size={16}
            />
        </div>;
    };

    const renderDialog = () => {
        return <SelectDialog
            isLoadingOKButton={isLoadingOKButton}
            setSelectedItems={setSelectedItems}
            paginationProps={paginationProps}
            isSearchLoading={isSearchLoading}
            onOverlayPress={onOverlayPress}
            selectedItems={selectedItems}
            isNeedConfirm={isNeedConfirm}
            isSearchable={isSearchable}
            emptyContent={emptyContent}
            initialData={initialData}
            multiSelect={multiSelect}
            inputTitle={inputTitle}
            renderIcon={renderIcon}
            renderItem={renderItem}
            isVisible={isVisible}
            onSearch={onSearch}
            onChange={onChange}
            onClose={onClose}
            onPress={onClick}
            title={title}
            data={data}
            onOk={onOk}
        />;
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

    return <div
        className={classes.mainContainer}
    >
        <div
            className={classes.container}
            style={{
                ...container,
                ...style
            }}
            onClick={() => {
                if (disabled) {
                    return;
                }

                if (!onClick) {
                    setIsVisible(true);
                    if (onOverlayPress) {
                        return onOverlayPress();
                    }
                } else {
                    onClick(selectedItems, cleanData());
                }
            }}
        >
            <div className={classes.content}>
                {renderTitle()}
                {renderContent()}
            </div>
            {renderIcon()}
            {renderDialog()}
        </div>
        {renderInfoText()}
    </div>;
};
export default SelectBox;
