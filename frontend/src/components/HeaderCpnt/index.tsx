import { Link, useLocation } from "react-router-dom"
import Navbar from "../Navbar"


interface HeaderCpntProps {}

const HeaderCpnt = ({}:HeaderCpntProps) => {
    const location = useLocation();
    
    return (
        <header className="w-full bg-gray-900 flex justify-center p-4">
            <div className="bg-black flex flex-col md:flex-row justify-end items-center w-full md:w-[65%] gap-4 md:gap-20 rounded-lg relative p-2 md:p-6">
                <img 
                    src="assets/mailBlue.png" 
                    alt="Logo" 
                    className="w-12 h-12 my-2 md:absolute md:left-5"
                />

                <h1 className="text-[#00FFFF] font-bold text-xl md:text-2xl italic">
                    Email Verify
                </h1>

                <Navbar>
                    <li className={ location.pathname === "/" ? 'border-b-2 border-b-[#00FFFF]' : '' }>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={ location.pathname === "/responses/history" ? 'border-b-2 border-b-[#00FFFF]' : '' } >
                        <Link to="/responses/history">Histórico</Link>
                    </li>
                </Navbar>
            </div>
        </header>
    )
}

export default HeaderCpnt
