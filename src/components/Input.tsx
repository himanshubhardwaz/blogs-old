import { FC } from "react"

type Props = {
    name?: string,
    required?: boolean,
    className?: string,
    placeholder?: string,
    type?: string,
}

const Input: FC<Props> = ({
    className,
    placeholder,
    required = false,
    type = "",
    ...rest
}) => {
    return (
        <input
            required={required}
            type={type}
            className={`form-input rounded-md ${className}`}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default Input