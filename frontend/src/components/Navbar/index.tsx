import { ReactNode } from "react";


interface NavbarProps {
    children: ReactNode
}

const Navbar = ( {children}:NavbarProps ) => {
    return (
        <nav>
            <ul className="flex gap-5 text-white 
                [&>li]:hover:text-black 
                [&>li]:font-semibold 
                [&>li]:hover:bg-[#00FFFF] 
                [&>li]:px-3 [&>li]:py-1 
                [&>li]:rounded-lg"
            >
                {children}
            </ul>
        </nav>
    )
}

export default Navbar;