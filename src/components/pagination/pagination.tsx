import React, {
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
    selectedIndex,
    buttonCount,
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

    const getPageNumbers = (): number[] => {
        let startPage = Math.max(selectedIndex - Math.floor(maxButtonCount / 2), 1);
        let endPage = startPage + maxButtonCount - 1;
    
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

    const pageNumbers = getPageNumbers();

    const {
        arrowButton,
        buttonStyle
    } = paginationStyler({
        borders,
        colors,
        radiuses,
        spaces
    });

    return <div
        className={classes.container}
        style={{
            ...style
        }}
    >
        <Button
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
        <div
            className={classes.buttonsContainer}
        >
            {
                pageNumbers.map((item, index) => {
                    console.log(pageNumbers[0]);
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
        <Button
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