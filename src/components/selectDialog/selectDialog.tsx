import React, {
    useEffect,
    useState,
} from "react";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import {
    SelectObjectType
} from "../../types";
import TextInput from "../textInput/textInput";
import {
    ChevronRightIcon 
} from "../../assets/svgr";
import Button from "../button/button";
import CheckBox from "../checkBox/checkBox";
import RadioButton from "../radioButton/radioButton";
import {
    selectSheetStyler, 
    useStyles
} from "./selectDialog.styles";
import {
    Portal 
} from "../../packages/react-portalize/src";
import ISelectSheetProps from "./selectDialog.props";
import Text from "../text/text";

const SelecetDialog = <T, K extends T & SelectObjectType>(
    properties: ISelectSheetProps<T, K>,
) => {
    const {
        childrenStyle: childrenStyleProp,
        renderItem: RenderItem,
        isVisible = false,
        isLoadingOKButton,
        setSelectedItems,
        isNeedConfirm,
        selectedItems,
        isHeaderShown,
        isSearchable,
        multiSelect,
        initialData,
        inputTitle,
        renderIcon,
        maxChoice,
        minChoice,
        onSearch,
        onChange,
        onPress,
        title,
        data,
        onOk,
        ...props
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

    const [tempSelectedItems, setTempSelectedItems] = useState(selectedItems);
    const [renderData, setRenderData] = useState(data);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        if(searchText && searchText.length) {
            let newData = JSON.parse(JSON.stringify(data));
            newData = newData.filter((item: K) => item.__title.match(new RegExp(searchText, "gi")));
            setRenderData(newData);
        } else {
            setRenderData(data);
        }
    }, [searchText, data]);

    useEffect(() => {
        if(onSearch) {
            onSearch(searchText);
        }
    }, [searchText]);

    useEffect(() => {
        if(!isNeedConfirm) {
            // setSelectedItems(tempSelectedItems);
        }
    }, [tempSelectedItems]);

    const _onChange = (item: K) => {
        let _selectedItems = JSON.parse(JSON.stringify(tempSelectedItems));

        const isExistsInSelectedData = tempSelectedItems.findIndex(e => e.key === item.__key);

        if(isExistsInSelectedData !== -1) {
            if(multiSelect) {
                if(
                    minChoice !== undefined &&
                    tempSelectedItems.length <= minChoice
                ) {
                    return;
                }

                _selectedItems.splice(isExistsInSelectedData, 1);
                setTempSelectedItems(_selectedItems);
            }
        } else {
            if(multiSelect) {
                if(
                    maxChoice !== undefined &&
                    tempSelectedItems.length >= maxChoice
                ) {
                    return;
                }

                _selectedItems.push({
                    ...item,
                    key: item.__key,
                    title: item.__title
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
        if(!isSearchable) {
            return null;
        }
        
        return <div
            style={searchContainerProps}
        >
            <TextInput
                onChangeText={(text) => setSearchText(text)}
                initialValue={searchText}
                title={inputTitle}
                icon={() => <ChevronRightIcon
                    size={25}
                />}
                placeholder={""} 
                id={""}            />
        </div>; 
    };

    const renderClear = () => {
        if(isLoadingOKButton || !multiSelect) {
            return null;
        }

        if(!tempSelectedItems.length) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-clear-button")}
            spreadBehaviour={isNeedConfirm ? "baseline" : "stretch"}
            variant="outline"
            style={{
                ...clearButtonProps,
                flex: isNeedConfirm ? undefined : 1
            }}
            onClick={() => {
                setTempSelectedItems([]);
            }}
        />;
    };

    const renderConfirm = () => {
        if(!isNeedConfirm) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-ok-button")}
            loading={isLoadingOKButton}
            style={okButtonProps}
            variant="filled"
            size="medium"
            onClick={() => {
                if(onOk) {
                    onOk({
                        selectedItems: tempSelectedItems,
                        closeSheet: () => {}, // TODO: MODAL OPEN CLOSE 
                        onSuccess: () => {
                            // setSelectedItems(tempSelectedItems);
                        },
                        data: data
                    });
                } else {
                    // setSelectedItems(tempSelectedItems);
                }
            }}
        />;
    };

    const renderActions = () => {
        return <div
            style={buttonsContainerProps}
        >
            {renderClear()}
            {renderConfirm()}
        </div>;
    };

    const renderItem = ({
        item,
        index
    }: {
        item: K,
        index: number;
    }) => {
        const isSelected = tempSelectedItems.findIndex((c_item) => c_item.key === item.__key) !== -1;

        if(RenderItem) {
            return RenderItem({
                onChange: onChange ? () => onChange(selectedItems, renderData) : undefined,
                onPress: onPress ? () => onPress(selectedItems, renderData) : undefined,
                onClick: _onChange,
                onOk: onOk ? () => onOk({
                    selectedItems: tempSelectedItems,
                    closeSheet: () => {}, // TODO: MODAL OPEN CLOSE 
                    onSuccess: () => {
                        // setSelectedItems(tempSelectedItems);
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

        if(multiSelect) {
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

                    return <RenderIcon/>;
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

                return <RenderIcon/>;
            } : undefined}
            onChange={() => {
                _onChange(item);
            }}
        />;
    };

    const renderContent = () => {
        return <div>
            {renderSearch()}
            <div>
                {/* {renderData.map((item) => (
                    item// renderItem(item) 
                ))} */}
            </div>
        </div>;
    };


    const {
        buttonsContainerProps,
        searchContainerProps,
        clearButtonProps,
        okButtonProps,
    } = selectSheetStyler({
        childrenStyleProp,
        radiuses,
        colors,
        spaces
    });

    if(!isVisible) {
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
            >
                <div className={styles.overlayTouchableArea}/>
            </div>

            <div
                className={styles.contentContainer}
            >
                {renderContent()}
                {renderActions()}
                <Text>
                Merhaba
                </Text>
            </div>
        </div>
    </Portal>;
};
export default SelecetDialog;
