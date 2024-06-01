import {
    IIOCoreIconPropsType
} from "../../../types";

const Info = ({
    color = "#9AA6B8",
    size = 24,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 24 / size;

    return <svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <path
            fill={color}
            transform={`scale(${1 / pathScale})`}
            d="M12 17.884a.767.767 0 0 0 .767-.768v-6.14a.767.767 0 0 0-1.534 0v6.14c0 .424.343.768.767.768ZM12 6.884a1.023 1.023 0 1 1 0 2.046 1.023 1.023 0 0 1 0-2.046Z"
        />
        <path
            fill={color}
            fillRule="evenodd"
            transform={`scale(${1 / pathScale})`}
            d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.465a9.465 9.465 0 1 0 0 18.93 9.465 9.465 0 0 0 0-18.93Z"
            clipRule="evenodd"
        />
    </svg>;
};
export default Info;
