import {
    IIOCoreIconPropsType
} from "../../../types";

const SvgChevronLeft = ({
    size = 20,
    color,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 38 / size;

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            d="M22.441 1.396c.671.591.749 1.63.174 2.32L10.707 18l11.908 14.284c.575.69.497 1.729-.174 2.32a1.57 1.57 0 0 1-2.256-.178L7.385 19.07a1.68 1.68 0 0 1 0-2.142l12.8-15.354a1.57 1.57 0 0 1 2.256-.179Z"
            transform={`scale(${1 / pathScale})`}
            fill={color}
        />
    </svg>;
};
export default SvgChevronLeft;
