import { ReactNode } from "react";

interface CardProps {
    title?: string,
    children: ReactNode
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div className="
            lg:w-2/3 max-h-screen md:h-[90vh] 
            flex flex-col items-center justify-center
            bg-[#1a2235]/80 backdrop-blur-sm
            p-10 rounded-2xl shadow-2xl border border-[#00FFFF]/20
            transition-transform duration-300 hover:scale-[1.01]
        ">
            {title && (
                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-6">
                    {title}
                </h1>
            )}
            {children}
        </div>
    )
}

export default Card;
