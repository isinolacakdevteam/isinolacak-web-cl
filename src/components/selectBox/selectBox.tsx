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
import Text from "../text/text";
import {
    SelectObjectType
} from "../../types";
import {
    ISelectBoxProps,
    SelectedItem
} from "./selectBox.props";
import {
    ChevronRightIcon
} from "../../assets/svgr";

const SelectBox = <T extends {}>({
    spreadBehaviour = "free",
    renderIcon: RenderIcon,
    initialSelectedItems,
    multiSelect = false,
    data: initialData,
    disabled = false,
    isClick = false,
    titleExtractor,
    keyExtractor,
    renderItem,
    onClick,
    style,
    title,
}: ISelectBoxProps<T>) => {
    
    const classes = useStyles();

    const [data, setData] = useState<Array<T & SelectObjectType>>([]);

    const {
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        contentProps,
        titleProps,
        container
    } = selectBoxStyler({
        spreadBehaviour,
        radiuses,
        disabled,
        isClick,
        borders,
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
        if(!initialData || !initialData.length) {
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

        if(initialSelectedItems && initialSelectedItems.length) {
            const newSelectedItems: Array<SelectedItem> = initialSelectedItems.map((item, index) => {
                let originalItem = newData[item.originalIndex];

                if(!originalItem) {
                    originalItem = {
                        ...item,
                        __key: keyExtractor(item, index),
                        __title: titleExtractor(item, index),
                        __originalIndex: newData.length
                    };
                    newData.push(originalItem);
                };

                return {
                    title: originalItem.__title,
                    key: originalItem.__key
                };
            });

            setSelectedItems(newSelectedItems);
        }
    }, [initialData]);

    const cleanData = () => {
        let _data = JSON.parse(JSON.stringify(data));

        delete _data.__key;
        delete _data.__originalIndex;
        delete _data.__title;

        return _data;
    };

    const renderTitle = () => {
        return <Text
            variant="body3-regular"
            color={titleProps.color}
        >
            {title}
        </Text>;
    };
        
    const renderContent = () => {
        let content = localize("iocore-select-box-no-selection");

        if(selectedItems.length) {
            content = localize("iocore-select-box-n-selected", [
                selectedItems.length
            ]);

            if(selectedItems.length === 1) {
                //@ts-ignore
                content = selectedItems[0].title;
            }
        }

        if(
            RenderIcon &&
            !renderItem &&
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.key);

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

        if(
            renderItem &&
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.key);

            return renderItem({
                size: typography["body2-regular"]?.fontSize,
                selectedItems: selectedItems,
                color: contentProps.color,
                item: data[selectedIndex],
                index: selectedIndex,
                data: data
            });
        }

        return <Text
            color= {contentProps.color}
            variant="body2-regular"
        >
            {content}
        </Text>;
    };

    const renderIcon = () => {
        return <ChevronRightIcon
            color={colors.gray40}
            size={16}
        />;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            ...style,
        }}
        onClick={() => {
            if (disabled) {
                return;
            }

            if (!onClick) {
                return;
            }
            onClick(selectedItems, cleanData());
        }}
    >
        <div className={classes.content}>
            {renderTitle()}
            {renderContent()}
        </div>
        {renderIcon()}
    </div>;
};
export default SelectBox;