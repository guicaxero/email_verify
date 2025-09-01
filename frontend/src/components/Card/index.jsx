
const Card = ({title, children}) => {
    return (
        <div className="lg:w-2/3 max-h-screen md:h-[90vh] flex flex-col items-center justify-center bg-gray-300 p-10 rounded-2xl shadow-lg">
            <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
                {title}
            </h1>
            {children}
        </div>
    )
}


export default Card;
