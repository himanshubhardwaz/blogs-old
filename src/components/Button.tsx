import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string,
    onClick?: (e: any) => void,
    loading?: boolean,
    disabled?: boolean,
    type?: "button" | "submit" | "reset" | undefined,
}

export default function Button({
    children,
    className = "",
    loading = false,
    type,
    disabled = false,
    ...rest
}: Props) {
    return (
        <button
            type={type}
            disabled={loading}
            className={`bg-blue-600 px-4 py-2 rounded-md flex text-white font-semibold ${className}`}
            {...rest}
        >
            {!loading ? children : 'Please Wait ...'}
        </button >
    )
}
