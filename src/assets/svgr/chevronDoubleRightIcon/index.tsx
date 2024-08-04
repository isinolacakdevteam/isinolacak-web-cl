import {
    IIOCoreIconPropsType
} from "../../../types";

const ChevronRightDouble = ({
    size = 40,
    color,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 40 / size;

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            d="M4.714 35.312a2.413 2.413 0 0 1-.656-1.663c0-.624.236-1.222.656-1.663L16.588 19.53 4.714 7.075a2.354 2.354 0 0 1-.52-.764 2.45 2.45 0 0 1-.03-1.84c.112-.292.28-.558.493-.782.213-.223.467-.4.746-.518a2.151 2.151 0 0 1 1.753.033c.275.128.523.314.728.545l13.46 14.118c.42.442.656 1.04.656 1.663 0 .624-.236 1.222-.656 1.663L7.884 35.312c-.42.44-.99.688-1.585.688a2.191 2.191 0 0 1-1.585-.688Z"
            transform={`scale(${1 / pathScale})`}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
        <path
            d="M17.714 35.312a2.413 2.413 0 0 1-.656-1.663c0-.624.236-1.222.656-1.663L29.588 19.53 17.714 7.075a2.354 2.354 0 0 1-.52-.764 2.452 2.452 0 0 1-.03-1.84c.112-.292.28-.558.493-.782.213-.223.467-.4.746-.518a2.151 2.151 0 0 1 1.753.033c.275.128.523.314.728.545l13.46 14.118c.42.442.656 1.04.656 1.663 0 .624-.236 1.222-.656 1.663l-13.46 14.119c-.42.44-.99.688-1.585.688a2.191 2.191 0 0 1-1.585-.688Z"
            transform={`scale(${1 / pathScale})`}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </svg>;
};
export default ChevronRightDouble;
