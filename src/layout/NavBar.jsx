import { useState } from "react";
import { Link } from "react-router-dom";
 
const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="menubardiv">
            <button type="button" className="menuToggle" onClick={()=>setIsOpen(!isOpen)} arial-label="Toggle Menu" > All Menus ≡  </button>
<nav className={`nav ${isOpen ? "active" : ""}`}>
   <Link to="/home" onClick={()=>setIsOpen(false)}> Home </Link>
   <Link to="/prayerbooks" onClick={()=>setIsOpen(false)}> Prayerbooks </Link>
   <Link to="/application" onClick={()=>setIsOpen(false)}> Application </Link>
   <Link to="/contact" onClick={()=>setIsOpen(false)}> Contact </Link>
   <Link to="/privacypolicy" onClick={()=>setIsOpen(false)}> Privacy Policy </Link>
</nav>
        </div>
    )
}
export default NavBar