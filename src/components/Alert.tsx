import type { FC } from 'react'

type Props = {
    type: string,
    message: string,
    className?: string
}

const Alert: FC<Props> = ({ type, message, className }) => {
    if (type === 'error') {
        return (
            <div className={`bg-red-600 text-left py-2 px-3 rounded-md ${className} text-white font-semibold`}>
                {message}
            </div>
        )
    }

    return (
        <div className={`bg-green-600 text-left py-2 px-3 rounded-md ${className} text-white font-semibold`}>
            {message}
        </div>
    )
}

export default Alert