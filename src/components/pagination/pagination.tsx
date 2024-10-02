import {
    useEffect,
    useState,
    Fragment,
    FC
} from "react";
import useStyles, {
    paginationStyler
}  from "./pagination.styles";
import IPaginationProps, {
    PaginationButtonType
} from "./pagination.props";
import {
    ChevronLeftDoubleIcon,
    ChevronRightDoubleIcon,
    RightArrowIcon,
    LeftArrowIcon
} from "../../assets/svgr";
import Button from "../button/button";
import {
    IOCoreTheme
} from "../../core/index";

const Pagination: FC<IPaginationProps> = ({
    totalDataCount,
    currentPage,
    itemPerPage,
    onSelect,
    style
}) => {
    const classes = useStyles();

    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const [buttons, setButtons] = useState<Array<PaginationButtonType>>([
        {
            pageNumber: 1
        }
    ]);

    useEffect(() => {
        calculateButtons();
    }, [totalDataCount, itemPerPage, currentPage]);

    const {
        container,
        arrowButton
    } = paginationStyler({
        borders,
        colors,
        radiuses,
        spaces
    });

    const calculateButtons = () => {
        let pageCount = Math.floor(totalDataCount / itemPerPage);
        const lastPage = totalDataCount % itemPerPage;
        if(lastPage > 0) {
            pageCount += 1;
        }

        if(pageCount > 6) {

            let _pageButtons: Array<PaginationButtonType> = [];

            for(let i = 0; i < 3; i++) {
                _pageButtons.push({
                    pageNumber: i + 1
                });
            }

            for(let i = currentPage - 1; i < currentPage + 2; i++) {
                const isExists = _pageButtons.findIndex(item => item.pageNumber === i);

                if(
                    isExists === -1 &&
                    i < pageCount &&
                    _pageButtons[_pageButtons.length - 1].pageNumber < i
                ) {
                    _pageButtons.push({
                        pageNumber: i
                    });
                }
            }

            for(let i = pageCount - 2; i < pageCount + 1; i++) {
                const isExists = _pageButtons.findIndex(item => item.pageNumber === i);

                if(isExists === -1) {
                    _pageButtons.push({
                        pageNumber: i
                    });
                }
            }

            _pageButtons = _pageButtons.sort((a, b) => {
                return a.pageNumber - b.pageNumber;
            });
            setButtons(_pageButtons);
        } else if(pageCount === 0) {
            return;
        } else {
            let _pageButtons: Array<PaginationButtonType> = [];
            for(let i = 0; i < pageCount; i++) {
                _pageButtons.push({
                    pageNumber: i + 1
                });
            }

            setButtons(_pageButtons);
        }
    };

    const renderButtons = () => {
        if(!buttons || !buttons.length) {
            return null;
        }

        return buttons.map((item, index) => {
            return <Fragment>
                {buttons[index - 1] && item.pageNumber - 1 !== buttons[index - 1].pageNumber ? "..." : null}
                <Button
                    variant={item.pageNumber === currentPage ? "filled" : "ghost"}
                    title={String(item.pageNumber)}
                    className={classes.button}
                    color="secondary"
                    onClick={() => {
                        onSelect(item, index);
                    }}
                />
            </Fragment>;
        });
    };

    return <div
        className={classes.container}
        style={{
            ...style,
            ...container
        }}
    >
        <Button
            disabled={currentPage === buttons[0].pageNumber}
            icon={() => {
                return <ChevronLeftDoubleIcon
                    color={colors.body}
                    size={20}
                />;
            }}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if(onSelect) onSelect(buttons[0], 0);
            }}
            style={arrowButton} 
        />
        <Button
            disabled={currentPage === buttons[0].pageNumber}
            icon={() => <LeftArrowIcon
                color={colors.body}
                size={20}
            />}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if(onSelect) {
                    const currentIndex = buttons.findIndex(item => item.pageNumber === currentPage);

                    if(buttons[currentIndex - 1]) {
                        onSelect(buttons[currentIndex - 1], currentIndex - 1);
                    } else {
                        onSelect(buttons[0], 0);
                    }
                };
            }}
            style={arrowButton} 
        />
        <div
            className={classes.buttonsContainer}
        >
            {renderButtons()}
        </div>
        <Button
            disabled={currentPage === buttons[buttons.length - 1].pageNumber}
            icon={() =>  <RightArrowIcon
                color={colors.body}
                size={20}
            />}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if(onSelect) {
                    const currentIndex = buttons.findIndex(item => item.pageNumber === currentPage);

                    if(buttons[currentIndex + 1]) {
                        onSelect(buttons[currentIndex + 1], currentIndex + 1);
                    } else {
                        onSelect(buttons[buttons.length - 1], buttons.length - 1);
                    }
                }
            }}
            style={arrowButton}
        />
        <Button
            disabled={currentPage === buttons[buttons.length - 1].pageNumber}
            icon={() =>  {
                return <ChevronRightDoubleIcon
                    color={colors.body}
                    size={20}
                />;
            }}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if(onSelect) onSelect(buttons[buttons.length - 1], buttons.length - 1);;
            }}
            style={arrowButton}
        />
    </div>;
};
export default Pagination;
