import { ReactNode } from "react";

interface ButtonCpntProps {
    children: ReactNode,
    onClick?: () => void,
    buttonClass?: string,
    type?: 'button' | 'submit' | 'reset'
}

const ButtonCpnt = ({children, onClick, buttonClass, type = 'button' }:ButtonCpntProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 rounded-md cursor-pointer font-bold ${buttonClass}`}
        >
            {children}
        </button>
    )
}

export default ButtonCpnt;