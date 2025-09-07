import { Outlet } from "react-router-dom";

const PageDefault = () => {
    return (
        <main className="h-screen bg-[url('/assets/background.jpg')] bg-cover bg-center flex items-center justify-center bg-">
            <Outlet />
        </main>
    )
}

export default PageDefault;
