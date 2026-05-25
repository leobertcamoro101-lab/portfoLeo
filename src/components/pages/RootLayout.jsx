import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
// import Divider from '../Divider';
import Footer from '../Footer';
import FloatingMenu from "../FloatingMenu";

function RootLayout(){
    return(
        <div className="font-sans bg-[#F7F5F0] dark:bg-[#1A1814] text-[#1A1814] dark:text-[#F7F5F0] flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
            <Outlet/>
            {/* <Divider/> */}
        <FloatingMenu />  
        </main>
        <Footer/>
        </div>
    );
}

export default RootLayout;