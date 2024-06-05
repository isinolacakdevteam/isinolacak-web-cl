import {
    IIOCoreIconPropsType
} from "../../../types";

const SvgLoadingDotIcon = ({
    size = 22,
    color = "#45BBD4",
    ...props
}: IIOCoreIconPropsType & {
    className?: string;
}) => {
    const pathScale = 22 / size;

    return  <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        height={size}
        width={size}
        {...props}
    >
        <path
            fill={color}
            fillRule="evenodd"
            transform={`scale(${1 / pathScale})`}
            d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
        />
    </svg>;
};
export default SvgLoadingDotIcon;
