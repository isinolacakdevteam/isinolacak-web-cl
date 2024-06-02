import {
    FC
} from "react";
import useStyles, {
    paginationStyler
}  from "./pagination.styles";
import IPaginationProps from "./pagination.props";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "../../assets/svgr";
import Button from "../button/button";
import {
    IOCoreTheme
} from "../../core/index";

const Pagination: FC<IPaginationProps> = ({
    maxButtonCount = 5,
    totalDataCount,
    selectedIndex,
    itemPerPage,
    onSelect,
    onRight,
    onLeft,
    style
}) => {
    const classes = useStyles();

    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const buttonCount = Math.ceil(totalDataCount / itemPerPage);

    let startPage = Math.max(selectedIndex - Math.floor(maxButtonCount / 2), 1);
    let endPage = startPage + maxButtonCount - 1;

    const getPageNumbers = (): number[] => {
        if (endPage > buttonCount) {
            endPage = buttonCount;
            startPage = Math.max(endPage - maxButtonCount + 1, 1);
        }

        const pages: number[] = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    let pageNumbers = getPageNumbers();

    const {
        container,
        arrowButton,
        buttonStyle
    } = paginationStyler({
        borders,
        colors,
        radiuses,
        spaces
    });

    const renderGoFirstPage = () => {
        let isAtStart: Array<number> = [];

        if(!pageNumbers.includes(1)) {
            isAtStart.push(1);
        }
        if(!pageNumbers.includes(2)) {
            isAtStart.push(2);
        }
        if(!pageNumbers.includes(3)) {
            isAtStart.push(3);
        }

        if(!isAtStart.length) {
            return;
        }

        return <div
            className={classes.fastButtons}
        >
            {
                isAtStart.map((item, index) => {
                    const isCurrentSelected = selectedIndex === item;

                    return <Button
                        key={`pagination-button-${index}`}
                        title={item.toString()}
                        variant={isCurrentSelected ? "filled" : "outline"}
                        color={isCurrentSelected ? "body" : "hideBody"}
                        onClick={() => {
                            if (onSelect) onSelect(item, index);
                        }}
                        titleStyle={{
                            textAlign: "center"
                        }}
                        spreadBehaviour="baseline"
                        style={buttonStyle} 
                    />;
                }) 
            }
            <Button
                variant="ghost"
                color="hideBody"
                disabled={true}
                title="..."
                onClick={() => {
                    if (onSelect) onSelect(selectedIndex, 0);
                }}
                titleStyle={{
                    textAlign: "center"
                }}
                spreadBehaviour="baseline"
                style={buttonStyle} 
            />
        </div>;
    };

    const renderGoLastPage = () => {
        let isAtEnd :Array<number> = [];

        if(!pageNumbers.includes(buttonCount - 2)){
            isAtEnd.push(buttonCount - 2);
        }

        if(!pageNumbers.includes(buttonCount - 1)){
            isAtEnd.push(buttonCount - 1);
        }

        if(!pageNumbers.includes(buttonCount)){
            isAtEnd.push(buttonCount);
        }

        if(!isAtEnd.length) {
            return;
        }

        return <div
            className={classes.fastButtons}
        >
            <Button
                variant="ghost"
                color="hideBody"
                disabled={true}
                title="..."
                onClick={() => {}}
                titleStyle={{
                    textAlign: "center"
                }}
                spreadBehaviour="baseline"
                style={buttonStyle} 
            />
            {
                isAtEnd.map((item, index) => {
                    const isCurrentSelected = selectedIndex === item;

                    return <Button
                        key={`pagination-button-${index}`}
                        title={item.toString()}
                        variant={isCurrentSelected ? "filled" : "outline"}
                        color={isCurrentSelected ? "body" : "hideBody"}
                        onClick={() => {
                            if (onSelect) onSelect(item, index);
                        }}
                        titleStyle={{
                            textAlign: "center"
                        }}
                        spreadBehaviour="baseline"
                        style={buttonStyle} 
                    />;
                }) 
            }
        </div>;
    };

    return <div
        className={classes.container}
        style={{
            ...style,
            ...container
        }}
    >
        <Button
            disabled={selectedIndex === startPage}
            icon={() => <ChevronLeftIcon
                size={20}
                color={colors.body}
            />}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if (onLeft && selectedIndex) onLeft(selectedIndex - 1);
            }}
            style={arrowButton} 
        />
        {renderGoFirstPage()}
        <div
            className={classes.buttonsContainer}
        >
            {
                pageNumbers.map((item, index) => {
                    const isCurrentSelected = selectedIndex === item;

                    return <Button
                        key={`pagination-button-${index}`}
                        title={item.toString()}
                        variant={isCurrentSelected ? "filled" : "outline"}
                        color={isCurrentSelected ? "body" : "hideBody"}
                        onClick={() => {
                            if (onSelect) onSelect(item, index);
                        }}
                        titleStyle={{
                            textAlign: "center"
                        }}
                        spreadBehaviour="baseline"
                        style={buttonStyle} 
                    />;
                }) 
            }
        </div>
        {renderGoLastPage()}
        <Button
            disabled={selectedIndex === endPage}
            icon={() =>  <ChevronRightIcon
                size={20}
                color={colors.body}
            />}
            variant="ghost"
            spreadBehaviour="free"
            onClick={() => {
                if (onRight && selectedIndex) onRight(selectedIndex + 1);
            }}
            style={arrowButton}
        />
    </div>;
};
export default Pagination;
