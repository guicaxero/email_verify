import { Outlet } from "react-router-dom";
import HeaderCpnt from "../../components/HeaderCpnt";

const PageDefault = () => {
    return (
        <>
            <HeaderCpnt />
            <main className="h-screen bg-gray-900 flex items-center justify-center">
                <Outlet />
            </main>
        </>

    )
}

export default PageDefault;
