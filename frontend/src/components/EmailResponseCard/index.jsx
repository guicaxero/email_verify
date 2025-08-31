const EmailResponseCard = ({ isProductive, responseGenerate, position }) => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-md p-6 mb-6 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold text-gray-800">
                    Email número: {position}
                </h1>
                <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full 
                    ${isProductive === 'Produtivo' 
                        ? 'bg-green-100 text-green-700 border border-green-300' 
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                >
                    {isProductive}
                </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
                {responseGenerate}
            </p>
        </div>
    )
}

export default EmailResponseCard;
