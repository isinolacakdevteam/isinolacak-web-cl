import {
    IIOCoreIconPropsType 
} from "../../../types";

const SvgChevronUp = ({
    color = "#8C8C8C",
    size = 24,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 94 / size;

    return <svg
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M44.453 31.746a3.18 3.18 0 0 1 4.094 0l29.355 24.8a3.07 3.07 0 0 1 .34 4.371 3.177 3.177 0 0 1-4.434.337L46.5 38.183l-27.308 23.07a3.177 3.177 0 0 1-4.435-.336 3.07 3.07 0 0 1 .341-4.37l29.355-24.8Z"
            fill={color}
            transform={`scale(${1 / pathScale})`}
        />
    </svg>;
};
export default SvgChevronUp;
