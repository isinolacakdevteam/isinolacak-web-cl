import {
    useImperativeHandle,
    forwardRef,
    useEffect,
    ReactNode,
    useState,
    Ref,
    useCallback
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
    ISelectBoxRefProps,
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
    size = 'medium',
    titleExtractor,
    isNeedConfirm,
    keyExtractor,
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
}: ISelectBoxProps<T>, ref: Ref<ISelectBoxRefProps<T>>) => {
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
        style,
        title
    });

    const {
        localize
    } = IOCoreLocale.useContext();

    const [
        selectedItems,
        setSelectedItems
    ] = useState<Array<SelectedItem> | []>([]);

    useImperativeHandle(
        ref,
        () => ({
            updateSelectedItems
        }),
        [selectedItems, data]
    );

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
            const preparedDatas = prepareSelectedItems(initialSelectedItems, newData);
            const newSelectedItems: Array<T & SelectedItem> = preparedDatas.selectedItems;

            setSelectedItems(newSelectedItems);
        }
    }, [initialData]);

    const prepareSelectedItems = (items, allData) => {
        if(allData && allData.length) {
            const newSI = items.map((item, index) => {
                let originalItem = allData.find(dataItem => {
                    return dataItem.__key === keyExtractor(item, index);
                });
    
                if (!originalItem) {
                    originalItem = {
                        ...item,
                        __title: titleExtractor(item, index),
                        __key: keyExtractor(item, index),
                        __originalIndex: allData.length
                    };
                    allData.push(originalItem);
                };
    
                return originalItem;
            });

            return {
                selectedItems: newSI,
                allData
            };
        } else {
            return {
                selectedItems: [],
                allData
            };
        }
    };

    const updateSelectedItems: ISelectBoxRefProps<T>["updateSelectedItems"] = useCallback(({
        getCurrentSelectedItems,
        newSelectedItems
    }) => {
        if(getCurrentSelectedItems) {
            getCurrentSelectedItems(selectedItems, (processedSelectedItems) => {
                setSelectedItems(prepareSelectedItems(processedSelectedItems, data).selectedItems);
            });
        }

        if(newSelectedItems) {
            setSelectedItems(prepareSelectedItems(newSelectedItems, data).selectedItems);
        }
    }, [selectedItems, data]);

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
            selectedItems={selectedItems}
            isNeedConfirm={isNeedConfirm}
            isSearchable={isSearchable}
            emptyContent={emptyContent}
            initialData={initialData}
            multiSelect={multiSelect}
            onOverlayPress={onClose}
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
            size={size}
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
export default forwardRef(SelectBox) as <T extends {}>(
    props: ISelectBoxProps<T> & {
        ref?: Ref<ISelectBoxRefProps<T>>
    }
) => ReactNode;
