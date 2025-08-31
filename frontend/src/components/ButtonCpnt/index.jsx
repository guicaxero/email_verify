

const ButtonCpnt = ({children, onClick, buttonClass, type = 'button' }) => {
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