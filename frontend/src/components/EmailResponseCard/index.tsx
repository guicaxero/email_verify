
interface EmailResponseCardProps {
    isProductive: string,
    responseGenerate: string,
    position: number
}

const EmailResponseCard = ({ isProductive, responseGenerate, position }: EmailResponseCardProps) => {
    return (
        <div className="
            w-full bg-[#1a2235]/80 backdrop-blur-sm 
            rounded-2xl shadow-2xl border border-[#00FFFF]/20 
            p-6 mb-6 transition-transform duration-300 
            hover:scale-[0.99] hover:shadow-cyan-500/20
        ">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-white">
                    Email {position}
                </h1>
                <h2 className="text-lg font-medium text-gray-300">
                    Resposta sugerida
                </h2>

                <span
                    className={`
                        px-3 py-1 text-sm font-semibold rounded-full border
                        ${isProductive === 'Produtivo'
                            ? 'bg-green-900/40 text-green-300 border-green-500/40'
                            : 'bg-red-900/40 text-red-300 border-red-500/40'
                        }
                    `}
                >
                    {isProductive}
                </span>
            </div>

            <p className="text-gray-200 leading-relaxed">
                {responseGenerate}
            </p>
        </div>
    )
}

export default EmailResponseCard;
