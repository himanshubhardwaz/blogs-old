import { FC } from "react"

type Props = {
    name: string,
    required?: boolean,
    className?: string,
    id?: string,
    placeholder?: string
}

const Input: FC<Props> = ({
    name,
    className,
    id,
    placeholder,
    required = false
}) => {
    return (
        <input
            required={required}
            name={name}
            className={`form-input focus:ring-red-500 focus:border-red-500 rounded-md ${className}`}
            id={id}
            placeholder={placeholder}
        />
    )
}

export default Input