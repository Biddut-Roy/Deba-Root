import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar&Footer/Navbar";
import Footer from "./Component/Navbar&Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="block w-full max-w-screen-xl px-4 py-3 mx-auto text-white">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;