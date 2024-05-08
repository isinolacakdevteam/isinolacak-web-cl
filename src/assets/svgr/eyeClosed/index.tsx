import * as React from "react";
import {
    IIOCoreIconPropsType
} from "src/types";
const EyeClosedIcon = ({
    size = 16,
    color,
    ...props
}: IIOCoreIconPropsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <path
            d="M14.667 8A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0ZM8.834 4.667a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Zm-1.667 2.5a.833.833 0 1 0 0 1.666v2.5c0 .46.373.834.833.834h.834a.833.833 0 0 0 0-1.667V8A.833.833 0 0 0 8 7.167h-.833Z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </svg>
);
export default EyeClosedIcon;
