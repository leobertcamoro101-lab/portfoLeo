import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
// import Divider from '../Divider';
import Footer from '../Footer';

function RootLayout(){
    return(
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
            <Outlet/>
            {/* <Divider/> */}
            
        </main>
        <Footer/>
        </div>
    );
}

export default RootLayout;