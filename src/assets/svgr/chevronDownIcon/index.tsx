import {
    IIOCoreIconPropsType 
} from "../../../types";

const SvgChevronDown = ({
    color = "#8C8C8C",
    size = 18,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 18 / size;

    return <svg
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M1.186 5.28a.757.757 0 0 1 1.092-.087L9 11.146l6.722-5.953a.757.757 0 0 1 1.092.086c.278.336.24.84-.084 1.128l-7.226 6.4a.755.755 0 0 1-1.008 0l-7.226-6.4a.819.819 0 0 1-.084-1.128Z"
            fill={color}
            transform={`scale(${1 / pathScale})`}
        />
    </svg>;
};
export default SvgChevronDown;
