import {
    useEffect,
    useState
} from "react";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import {
    selectDialogStyler,
    useStyles
} from "./selectDialog.styles";
import RadioButton from "../radioButton/radioButton";
import Pagination from "../pagination/pagination";
import TextInput from "../textInput/textInput";
import CheckBox from "../checkBox/checkBox";
import Button from "../button/button";
import Text from "../text/text";
import {
    SelectObjectType
} from "../../types";
import ISelectDialogProps from "./selectDialog.props";
import {
    ClearIcon
} from "../../assets/svgr";
import {
    Portal
} from "../../packages/react-portalize/src";
import Loading from "../loading/loading";

const SelecetDialog = <T, K extends T & SelectObjectType>(
    properties: ISelectDialogProps<T, K>,
) => {
    const {
        childrenStyle: childrenStyleProp,
        emptyContent: RenderEmptyContent,
        renderItem: RenderItem,
        isLoadingOKButton,
        selectDialogTitle,
        paginationProps,
        setSelectedItems,
        headerComponent,
        isSearchLoading,
        onOverlayPress,
        isNeedConfirm,
        selectedItems,
        isSearchable,
        multiSelect,
        validation,
        inputTitle,
        renderIcon,
        maxChoice,
        minChoice,
        isVisible,
        onSearch,
        onChange,
        onClose,
        onPress,
        title,
        data,
        size,
        onOk
    } = properties;

    const styles = useStyles();

    const {
        radiuses,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const {
        content: contentStyle,
        notTitleStyle,
        container
    } = selectDialogStyler({
        childrenStyleProp,
        radiuses,
        spaces,
        colors,
        size
    });

    const [tempSelectedItems, setTempSelectedItems] = useState(selectedItems);
    const [renderData, setRenderData] = useState(data);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const normalizeText = (text: string) =>
            text.toLocaleLowerCase("tr-TR");
    
        const normalizedSearchText = normalizeText(searchText);
    
        if (searchText && searchText.length) {
            const newData = data.filter((item: K) =>
                normalizeText(item.__title).includes(normalizedSearchText)
            );
            setRenderData(newData);
        } else {
            setRenderData(data);
        }
    }, [searchText, data]);
    
    useEffect(() => {
        if (onSearch) {
            onSearch(searchText);
        }
    }, [searchText]);

    useEffect(() => {
        if (!isNeedConfirm) {
            setSelectedItems(tempSelectedItems);
        }
    }, [tempSelectedItems]);

    useEffect(() => {
        if (isVisible) {
            setTempSelectedItems(selectedItems);
        } else {
            if (searchText && searchText.length) {
                setSearchText("");
                setRenderData(data);
            }

            setTempSelectedItems([]);
        }
    }, [isVisible]);

    const _onChange = (item: K) => {
        let _selectedItems = JSON.parse(JSON.stringify(tempSelectedItems));

        const isExistsInSelectedData = tempSelectedItems.findIndex(e => e.__key === item.__key);

        if (isExistsInSelectedData !== -1) {
            if (multiSelect) {
                if (
                    minChoice !== undefined &&
                    tempSelectedItems.length <= minChoice
                ) {
                    return;
                }

                _selectedItems.splice(isExistsInSelectedData, 1);
                setTempSelectedItems(_selectedItems);
            }
        } else {
            if (multiSelect) {
                if (
                    maxChoice !== undefined &&
                    tempSelectedItems.length >= maxChoice
                ) {
                    return;
                }

                _selectedItems.push({
                    ...item,
                    __key: item.__key,
                    __title: item.__title
                });
                setTempSelectedItems(_selectedItems);
            } else {
                setTempSelectedItems([
                    {
                        ...item,
                        key: item.__key,
                        title: item.__title
                    }
                ]);
            }
        }
    };

    const renderSearch = () => {
        if (!isSearchable) {
            return null;
        }

        return <div
            style={{
                marginBottom: spaces.content / 2
            }}
        >
            <TextInput
                onChangeText={(text) => setSearchText(text)}
                validation={validation}
                initialValue={searchText}
                placeholder={inputTitle}
            />
        </div>;
    };

    const renderClear = () => {
        if (isLoadingOKButton || !multiSelect) {
            return null;
        }

        if (!tempSelectedItems.length) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-clear-button")}
            spreadBehaviour={isNeedConfirm ? "baseline" : "stretch"}
            variant="outline"
            style={{
                marginRight: spaces.content
            }}
            onClick={() => {
                setTempSelectedItems([]);
            }}
        />;
    };

    const renderConfirm = () => {
        if (!isNeedConfirm) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-ok-button")}
            loading={isLoadingOKButton}
            spreadBehaviour="stretch"
            variant="filled"
            size="medium"
            onClick={() => {
                if (onOk) {
                    onOk({
                        selectedItems: tempSelectedItems,
                        closeSheet: () => {
                            if (onClose) {
                                onClose();
                            }
                        },
                        onSuccess: () => {
                            setSelectedItems(tempSelectedItems);
                            if (onClose) {
                                onClose();
                            }
                        },
                        data: data
                    });
                } else {
                    setSelectedItems(tempSelectedItems);
                    if (onClose) {
                        onClose();
                    }
                }
            }}
        />;
    };

    const renderHeader = () => {
        const headerTitle = selectDialogTitle || title;

        if (!headerTitle) {
            return <div
                style={notTitleStyle}
            />;
        }
        return <div
            className={styles.headerContainer}
            style={{
                marginBottom: spaces.content
            }}
        >
            {headerComponent || <Text
                variant="header5-regular"
            >
                {headerTitle}
            </Text>}
        </div>;
    };

    const renderActions = () => {
        return <div
            className={styles.renderActions}
            style={{
                marginTop: spaces.content,
            }}
        >
            {renderClear()}
            {renderConfirm()}
        </div>;
    };

    const renderPagination = () => {
        if (!paginationProps) {
            return null;
        }

        if (isSearchLoading) {
            return null;
        }

        return <div
            className={styles.paginationContainer}
        >
            <Pagination
                {...paginationProps}
            />
        </div>;
    };

    const renderItem = ({
        item,
        index
    }: {
        item: K,
        index: number;
    }) => {
        const isSelected = tempSelectedItems.findIndex((c_item) => c_item.__key === item.__key) !== -1;

        if (RenderItem) {
            return RenderItem({
                onChange: onChange ? () => onChange(selectedItems, renderData) : undefined,
                onPress: onPress ? () => onPress(selectedItems, renderData) : undefined,
                onClick: _onChange,
                onOk: onOk ? () => onOk({
                    selectedItems: tempSelectedItems,
                    closeSheet: () => {
                        if (onClose) {
                            onClose();
                        }
                    },
                    onSuccess: () => {
                        setSelectedItems(tempSelectedItems);
                    },
                    data: data
                }) : undefined,
                selectedItems,
                isSelected,
                index,
                data,
                item
            });
        }

        if (multiSelect) {
            return <CheckBox
                key={`select-box-item-${index}`}
                isSelected={isSelected}
                title={item.__title}
                icon={renderIcon ? ({
                    color,
                    size
                }) => {
                    const RenderIcon = renderIcon({
                        data: renderData,
                        selectedItems,
                        isSelected,
                        index,
                        color,
                        size,
                        item
                    });
                    //@ts-ignore
                    return <RenderIcon />; // TODO: Type issue will be fix
                } : undefined}
                onChange={() => {
                    _onChange(item);
                }}
            />;
        }

        return <RadioButton
            key={`select-box-item-${index}`}
            isSelected={isSelected}
            title={item.__title}
            icon={renderIcon ? ({
                color,
                size
            }) => {
                const RenderIcon = renderIcon({
                    data: renderData,
                    selectedItems,
                    isSelected,
                    index,
                    color,
                    size,
                    item
                });
                //@ts-ignore
                return <RenderIcon />; // TODO: Type issue will be fix
            } : undefined}
            onChange={() => {
                _onChange(item);
            }}
        />;
    };

    const renderContent = () => {
        if (!renderData || !renderData.length) {
            if (RenderEmptyContent) {
                return <RenderEmptyContent />;
            }
            return null;
        }

        if (isSearchLoading) {
            return <div
                className={styles.loadingContainer}
                style={{
                    padding: spaces.container
                }}
            >
                <Loading />
            </div>;
        }

        return <div>
            {
                renderData.map((item, index) => {
                    return renderItem({
                        item,
                        index
                    });
                })
            }
        </div>;
    };

    if (!isVisible) {
        return null;
    }

    return <Portal>
        <div
            className={styles.container}
            style={{
                backgroundColor: colors.modalBackground,
                padding: spaces.container
            }}
        >
            <div
                className={styles.overlay}
                onClick={() => {
                    if (onOverlayPress) onOverlayPress();
                }}
            >
                <div className={styles.overlayTouchableArea} />
            </div>
            <div
                className={styles.contentContainer}
                style={{
                    ...container
                }}
            >
                {renderHeader()}
                {renderSearch()}
                <div
                    className={styles.content}
                    style={{
                        ...contentStyle
                    }}
                >
                    {renderContent()}
                    {renderPagination()}
                </div>
                {renderActions()}
                <Button
                    className={styles.cleanButton}
                    style={{
                        top: spaces.container / 2,
                        right: spaces.container / 2
                    }}
                    variant="ghost"
                    onClick={() => {
                        if (onClose) {
                            onClose();
                        }
                    }}
                    icon={() => <ClearIcon
                        color={colors.textGrey}
                    />}
                />
            </div>
        </div>
    </Portal>;
};
export default SelecetDialog;
