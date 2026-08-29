import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import WbHead from "./WbHead";
import Footer from "./Footer";
import "./headCss.css";
const MainLayout = () =>{
    return(
        <>
<WbHead />
<NavBar />

<div className="maindv"> <Outlet /> </div>

<Footer />
        </>
    )
}
export default MainLayout;